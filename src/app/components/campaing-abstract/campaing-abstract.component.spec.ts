import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaingAbstractComponent } from './campaing-abstract.component';

describe('CampaingAbstractComponent', () => {
  let component: CampaingAbstractComponent;
  let fixture: ComponentFixture<CampaingAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaingAbstractComponent ]
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
