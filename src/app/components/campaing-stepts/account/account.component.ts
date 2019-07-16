import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit {
  searchResults: Array<any> = [{
    name: "pendingAccounts"
  }];
  pendingAccounts: Array<any>;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      searchAccount: []
    });
  }

  ngOnInit() {
    this.pendingAccounts = [];
    this.pendingAccounts.push(
      {
        name: "pendingAccounts"
      },
      {
        name: "pendingAccounts"
      }
    );
  }

  createAccount(account: any) {}
}
