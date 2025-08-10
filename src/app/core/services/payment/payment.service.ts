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
export class PaymentService {

  private http = inject(HttpClient);

  createCheckoutSession() {
    return this.http.post<{ url: string }>(
      'http://localhost:3000/create-checkout-session',
      {}
    );
  }
}
