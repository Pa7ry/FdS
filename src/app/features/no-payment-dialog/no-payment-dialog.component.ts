import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-no-payment-dialog',
  imports: [MatButtonModule],
  templateUrl: './no-payment-dialog.component.html',
  styleUrl: './no-payment-dialog.component.scss'
})
export class NoPaymentDialogComponent {
  readonly dialogRef = inject(MatDialogRef<NoPaymentDialogComponent>);
}
