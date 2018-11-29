import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountBreakupComponent } from './amount-breakup.component';

describe('AmountBreakupComponent', () => {
  let component: AmountBreakupComponent;
  let fixture: ComponentFixture<AmountBreakupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountBreakupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountBreakupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
