import { Injectable } from "@angular/core";
import { Campaing } from "./campaing";
import { Account } from "./account";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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

  saveGroups(groups, id: string) {
    this.getAccount(id).subscribe(account => {
      account.groups = groups;
      this.saveAccount(account, id);
    });
  }

  //revisar si se implementa o no 
  saveAnnouncements(announcements, id: string) {
    this.getAccount(id).subscribe(account => {
      account.announcements = announcements;
      this.saveAccount(account, id);
    });
  }

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
