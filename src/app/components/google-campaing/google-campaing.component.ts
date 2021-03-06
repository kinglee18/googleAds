import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { GoogleCampaingService } from "src/app/google-campaing.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Group } from "src/app/group";
import { Account } from "src/app/account";

@Component({
  selector: "app-google-campaing",
  templateUrl: "./google-campaing.component.html",
  styleUrls: ["./google-campaing.component.scss"]
})
export class GoogleCampaingComponent implements OnInit {
  account: Account;
  groupFormState = true;
  loaderState = true;
  groups: Array<Group> = [];

  constructor(
    private campaingService: GoogleCampaingService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(data => {
      this.getAccountInfo(data.id);
    });
  }

  getAccountInfo(id: string) {
    this.campaingService.getAccount(id).subscribe(
      account => {
        this.loaderState = false;
        this.account = new Account().deserialize(account);
      },
      error => {
        //implementar 404
        console.error(error);
      }
    );
  }

  getGroups(form: FormGroup) {
    this.groupFormState = form.valid;
    this.groups = form.value.groups;
  }

  updateLoader(state: boolean) {
    this.loaderState = state;
  }
}
