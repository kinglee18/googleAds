import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AnnouncementsComponent } from "./announcements.component";
import { CustomMaterialModule } from "src/app/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("AnnouncementsComponent", () => {
  let component: AnnouncementsComponent;
  let fixture: ComponentFixture<AnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsComponent],
      imports: [
        CustomMaterialModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
