import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GoogleCampaingComponent } from "./google-campaing.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CustomMaterialModule } from "src/app/material.module";
import { AccountComponent } from "../campaing-stepts/account/account.component";
import { CampaingComponent } from "../campaing-stepts/campaing/campaing.component";
import { GroupsComponent } from "../campaing-stepts/groups/groups.component";
import { AnnouncementsComponent } from "../campaing-stepts/announcements/announcements.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable, of, BehaviorSubject} from "rxjs";


 class MockActivatedRoute {
    private paramsSubject = new BehaviorSubject(this.testParams);
    private _testParams: {};

    params  = this.paramsSubject.asObservable();

    get testParams() {
        return this._testParams;
    }
    set testParams(newParams: any) {
        this._testParams = newParams;
        this.paramsSubject.next(newParams);
    }
} 

describe("GoogleCampaingComponent", () => {
  let activeRoute: MockActivatedRoute; 
  let component: GoogleCampaingComponent;
  let fixture: ComponentFixture<GoogleCampaingComponent>;

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
  });

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
        HttpClientModule,
        FormsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { provider: ActivatedRoute, useValue: activeRoute }
        }
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
