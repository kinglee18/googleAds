import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GoogleCampaingComponent } from "./google-campaing.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomMaterialModule } from "src/app/material.module";
import { AccountComponent } from "../campaing-stepts/account/account.component";
import { CampaingComponent } from "../campaing-stepts/campaing/campaing.component";
import { GroupsComponent } from "../campaing-stepts/groups/groups.component";
import { AnnouncementsComponent } from '../campaing-stepts/announcements/announcements.component';
import { HttpClientModule } from '@angular/common/http';

describe("GoogleCampaingComponent", () => {
  let component: GoogleCampaingComponent;
  let fixture: ComponentFixture<GoogleCampaingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoogleCampaingComponent,
        AccountComponent,
        CampaingComponent,
        GroupsComponent,
        AnnouncementsComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
