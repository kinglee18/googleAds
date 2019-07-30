import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CampaingComponent } from "./campaing.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomMaterialModule } from "src/app/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("CampaingComponent", () => {
  let component: CampaingComponent;
  let fixture: ComponentFixture<CampaingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampaingComponent],
      imports: [
        ReactiveFormsModule,
        CustomMaterialModule,
        BrowserModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
