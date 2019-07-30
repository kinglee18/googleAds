import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountComponent } from "./account.component";
import { CustomMaterialModule } from "src/app/material.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from '@angular/router/testing';

describe("AccountComponent", () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountComponent],
      imports: [CustomMaterialModule, HttpClientModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
