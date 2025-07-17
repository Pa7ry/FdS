import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductsService } from '../../core/services/products.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ShoppingCartStore } from '../../core/store/shopping-cart.store';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, UpperCasePipe, MatButtonModule, MatIconModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product!: any;

  private readonly productsService = inject(ProductsService);
  private readonly router = inject(Router);
  private readonly shoppingCartStore = inject(ShoppingCartStore);

  ngOnInit() {
    const id = this.router.url.split('/').pop(); // Obtiene el ID del producto de la URL
    if (id) {
      this.getProductById(id);
    } else {
      this.router.navigate(['/gallery']);
    }
  }

  getProductById(id: string) {
    this.productsService.getProductById(id).then((product) => {
      if (product) {
        this.product = product;
      } else {
        this.router.navigate(['/gallery']);
      }
    })
  }

  addToCart(product: Product) {
    console.log('Añadir al carrito:', product);
    this.shoppingCartStore.addProduct(product)
  }
}
