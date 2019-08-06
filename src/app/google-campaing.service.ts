import { Injectable } from "@angular/core";
import { Campaing } from "./campaing";
import { Account } from "./account";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Group } from "./group";

@Injectable({
  providedIn: "root"
})
export class GoogleCampaingService {
  constructor(private http: HttpClient) {}
  key = "lastAccount";

  saveAccount(account: any, id: string): void {
    localStorage.setItem(this.key + id, JSON.stringify(account));
  }

  saveCampaing(campaing: Campaing, id: string) {
    this.getAccount(id).subscribe(account => {
      account.campaing = campaing;
      this.saveAccount(account, id);
    });
  }

  private generateId(groups: Array<Group>): number {
    let lastIndex = 1;
    if (groups) {
      groups.forEach(element => {
        if (element.id) {
          lastIndex = element.id + 1;
        }
      });
    }

    return lastIndex;
  }

  saveAnnouncement(groups: Array<any>, accountId: string) {
    this.getAccount(accountId).subscribe(account => {
      account.groups = groups;
      this.saveAccount(account, accountId);
    });
  }

  getAnnouncementsById(accountId: string, groupId: number) {
    return new Observable(obs => {
      this.getAccount(accountId).subscribe((account: Account) => {
        let group = account.groups.find(element => {
          return element.id === groupId;
        });
        if (group && group["announcementForm"]) {
          obs.next(group["announcementForm"].announcements || []);
        } else {
          obs.next([]);
        }
      });
    });
  }

  saveGroup(group: Group, accountId: string): Observable<number> {
    return new Observable(obs => {
      let groups = [];
      this.getAccount(accountId).subscribe((account: Account) => {
        if (group.id) {
          groups = account.groups.filter(obj => {
            return obj.id !== group.id;
          });
        } else {
          group.id = this.generateId(account.groups);
          groups = account.groups || groups;
        }

        groups.push(group);
        account.groups = groups;
        this.saveAccount(account, accountId);
        obs.next(group.id);
      });
    });
  }

  removeGroup() {}

  getAccount(id: string): Observable<Account | any> {
    return new Observable(observer => {
      const account = JSON.parse(localStorage.getItem(this.key + id));
      if (!account) {
        this.http
          .get("https://private-8eb8e2-test13853.apiary-mock.com/" + id)
          .subscribe(
            data => {
              this.saveAccount(data, id);
              observer.next(data);
            },
            error => {
              observer.error(error);
            }
          );
      } else {
        observer.next(account);
      }
    });
  }
}
