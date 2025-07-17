import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { Product } from '../../core/services/products.service';
import { ShoppingCartStore } from '../../core/store/shopping-cart.store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  private readonly shoppingCartStore = inject(ShoppingCartStore);
  private readonly router = inject(Router);

  cartItems = this.shoppingCartStore.products$
  total: number = 0;

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
    this.total = 100
    // this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  checkout() {
    this.router.navigate(['/checkout']);
    console.log('Checkout process initiated');
  }
}