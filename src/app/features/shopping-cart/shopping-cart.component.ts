import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { Product } from '../../core/services/products/products.service';
import { ShoppingCartStore } from '../../core/store/shopping-cart.store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PaymentService } from '../../core/services/payment/payment.service';
import {
  MatDialog,
} from '@angular/material/dialog';
import { NoPaymentDialogComponent } from '../no-payment-dialog/no-payment-dialog.component';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  private readonly shoppingCartStore = inject(ShoppingCartStore);
  private readonly paymentService = inject(PaymentService);

  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);

  cartItems = this.shoppingCartStore.products$;
  total: number = 0;

  ngOnInit() {
    this.calculateTotal();
  }

  removeFromCart(itemId: string) {
    // this.cartItems = this.cartItems.filter(i => i.id !== itemId);
    this.shoppingCartStore.removeProduct(itemId);
    this.calculateTotal();
  }

  clearCart() {
    this.shoppingCartStore.clearCart();
    this.total = 0;
  }

  private calculateTotal() {
    this.total = this.cartItems().reduce((sum, item) => sum + (item.price || 0), 0);
  }

  checkout() {
    console.log('Checkout - Total amount:', this.total);

    this.dialog.open(NoPaymentDialogComponent);
    // this.paymentService.createCheckoutSession().subscribe({
    //   next: (res) => {
    //     window.location.href = res.url; // redirige a Stripe
    //   },
    //   error: (err) => console.error(err)
    // });
  }
}