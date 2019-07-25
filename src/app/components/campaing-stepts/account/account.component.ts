import { Component, OnInit } from "@angular/core";
import { CampaingStepps } from 'src/app/campaing-stepps';
import { GoogleCampaingService } from 'src/app/google-campaing.service';

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent extends CampaingStepps implements OnInit {
  pendingAccounts: Array<any>;

  constructor(private googleAccounts: GoogleCampaingService) {
    super();
  }

  ngOnInit() {
    this.pendingAccounts = [];
    this.pendingAccounts.push(
      {
        name: "Cuenta 1 "
      },
      {
        name: "Cuenta 2 "
      }
    );
  }

  createAccount(account: any) {}

  continue(): void {
    this.googleAccounts.saveAccount(this.pendingAccounts[0]);
    this.advanceStep();
  }
}
