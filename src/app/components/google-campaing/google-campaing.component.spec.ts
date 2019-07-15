import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCampaingComponent } from './google-campaing.component';

describe('GoogleCampaingComponent', () => {
  let component: GoogleCampaingComponent;
  let fixture: ComponentFixture<GoogleCampaingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleCampaingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
