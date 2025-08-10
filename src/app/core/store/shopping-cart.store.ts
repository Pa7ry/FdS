import { Injectable } from '@angular/core';
import { Product } from '../services/products/products.service';
import { signal } from '@angular/core';


const LOCAL_STORAGE_KEY = 'shopping_cart_products';

@Injectable({ providedIn: 'root' })
export class ShoppingCartStore {
    private loadFromLocalStorage(): Product[] {
        const storedProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedProducts ? JSON.parse(storedProducts) : [];
    }

    private productsSignal = signal<Product[]>(this.loadFromLocalStorage());
    products$ = this.productsSignal.asReadonly();

    private saveToLocalStorage(products: Product[]) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
    }

    get products(): Product[] {
        return this.productsSignal();
    }

    addProduct(product: Product) {
        const products = [...this.productsSignal()];
        const index = products.findIndex(p => p._id === product._id);
        if (index === -1) {
            products.push(product);
        }
        this.productsSignal.set(products);
        this.saveToLocalStorage(products);
    }

    removeProduct(productId: string) {
        const products = this.productsSignal().filter(p => p._id !== productId);
        this.productsSignal.set(products);
        this.saveToLocalStorage(products);
    }

    clearCart() {
        this.productsSignal.set([]);
        this.saveToLocalStorage([]);
    }
    get totalPrice(): number {
        return this.productsSignal().reduce((total, product) => total + (product.price || 0), 0);
    }
}