import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-checkout',
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  private readonly fb = inject(FormBuilder);

  checkoutForm = this.fb.group({
    nombre: [''],
    apellidos: [''],
    direccion: [''],
    direccionAdicional: [''],
    ciudad: [''],
    codigoPostal: [''],
    telefono: [''],
    email: ['']
  });

  onSubmit() {
    if (this.checkoutForm.valid) {
      // Procesar el formulario
      console.log(this.checkoutForm.value);
    }
  }
}
