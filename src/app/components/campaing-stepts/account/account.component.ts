import { Component, OnInit } from "@angular/core";
import { CampaingStepps } from 'src/app/campaing-stepps';
import { GoogleCampaingService } from 'src/app/google-campaing.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent extends CampaingStepps {
 /*  pendingAccounts: Array<any>;

  constructor(private googleService: GoogleCampaingService, private http: HttpClient) {
    super();
  }
  loading = true;
  
  ngOnInit() {
    this.getAccount();
  }

  createAccount(account: any) {}

  continue(): void {
    this.googleService.saveAccount(this.pendingAccounts[0], this.id);
    this.advanceStep();
  }

  getAccount(){
    this.googleService.getAccount().subscribe(
      (data: any) => {
        this.pendingAccounts = data.accounts;
        this.loading = false;
      }
    );
  }*/
} 
