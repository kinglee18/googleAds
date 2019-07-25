import { Injectable } from "@angular/core";
import { Campaing } from "./campaing";
import { Account } from "./account";

@Injectable({
  providedIn: "root"
})
export class GoogleCampaingService {
  constructor() {}

  saveAccount(account: any): void {
    localStorage.setItem("lastAccount", JSON.stringify(account));
  }

  saveCampaing(campaing: Campaing) {
    const account: Account = this.getLastAccount();
    account.campaing = campaing;
    this.saveAccount(account);
  }

  saveGroups(groups) {
    const account: Account = this.getLastAccount();
    account.groups = groups.groups;
    this.saveAccount(account);
  }

  getLastAccount(): Account {
    return JSON.parse(localStorage.getItem("lastAccount"));
  }
}
