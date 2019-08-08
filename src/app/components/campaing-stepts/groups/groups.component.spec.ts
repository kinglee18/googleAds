import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GroupsComponent } from "./groups.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomMaterialModule } from "src/app/material.module";
import { HttpClientModule } from '@angular/common/http';
import { Account } from 'src/app/account';

describe("GroupsComponent", () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;
  const accountFixture = {
    id: "1",
    campaing: {
      creationDate: "12/17/1992",
      name: "cuenta a",
      networks: "Display, búsqueda",
      language: "Español",
      budget: "2900",
      bid: "Clics esta campaña usará la estrategia de puja Maximizar clics",
      schedule: "Todo el día",
      extension1: "Llamada: Usar configuración de cuenta ",
      extension2: "Enlace de sitio"
    },
    groups: [
      {
        id: 1,
        type: "standar",
        inputKeywords: null,
        keywordsList: "Palabra 1 , Palabra 2, aa"
      }
    ]
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupsComponent],
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
    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;
    component.account = new Account().deserialize(accountFixture);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });


});
