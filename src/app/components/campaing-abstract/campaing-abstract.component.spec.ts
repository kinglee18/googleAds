import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaingAbstractComponent } from './campaing-abstract.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CustomMaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CampaingAbstractComponent', () => {
  let component: CampaingAbstractComponent;
  let fixture: ComponentFixture<CampaingAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaingAbstractComponent ],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        FormsModule,
        GoogleChartsModule,
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaingAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
