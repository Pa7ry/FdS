import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPaymentDialogComponent } from './no-payment-dialog.component';

describe('NoPaymentDialogComponent', () => {
  let component: NoPaymentDialogComponent;
  let fixture: ComponentFixture<NoPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoPaymentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
