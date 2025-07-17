import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [CurrencyPipe, UpperCasePipe, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  items: any[] = [];
  imageWidth = 300;
  imageHeight = 200;

  private readonly productsService = inject(ProductsService);
  private readonly router = inject(Router);

  ngOnInit() {
    this.productsService.getProducts().then((products) => this.items = products);
  }

  onItemClick(item: any): void {
    console.log('Item clicked:', item);
    this.router.navigate(['/product', item.id]);
  }
}