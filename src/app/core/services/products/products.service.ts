import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  _id: string;
  name: string;
  img: string;
  price: number;
  sold: boolean;
  measures: string;
  technique: string;
  weight: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  sellProduct(id: string): Observable<Product> {
    return this.http.patch<Product>(`http://localhost:3000/products/${id}/sell`, {});
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
}
