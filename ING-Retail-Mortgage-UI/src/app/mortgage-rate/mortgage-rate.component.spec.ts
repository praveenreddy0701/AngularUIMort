import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageRateComponent } from './mortgage-rate.component';

describe('MortgageRateComponent', () => {
  let component: MortgageRateComponent;
  let fixture: ComponentFixture<MortgageRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
