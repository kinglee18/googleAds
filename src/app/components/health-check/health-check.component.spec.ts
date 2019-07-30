import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HealthCheckComponent } from "./health-check.component";
import { CustomMaterialModule } from "src/app/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

describe("HealthCheckComponent", () => {
  let component: HealthCheckComponent;
  let fixture: ComponentFixture<HealthCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HealthCheckComponent],
      imports: [BrowserModule, BrowserAnimationsModule, CustomMaterialModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
