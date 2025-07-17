import { Injectable } from '@angular/core';
import { collection, getDocs, Firestore, DocumentData } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export interface Product {
  id: string;
  name: string;
  price?: number;
  img?: string;
  sold: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  async getProducts(): Promise<Product[]> {
    const productsCollectionRef = collection(db, 'products'); // Referencia a la colección 'productos'
    const querySnapshot = await getDocs(productsCollectionRef); // Obtiene todos los documentos
    const products: Product[] = [];

    // Itera sobre los documentos y los mapea a tu interfaz Product
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id, // El ID del documento de Firestore
        ...((({ id, ...rest }) => rest)(doc.data() as Product)) // Excluye el campo 'id' del spread
      });
    });

    return products;
  }

  async getProductById(id: string): Promise<Product | undefined> {
    const productsCollectionRef = collection(db, 'products'); // Referencia a la colección 'productos'
    const querySnapshot = await getDocs(productsCollectionRef); // Obtiene todos los documentos
    let product: any;

    const doc = querySnapshot.docs.find((doc) => doc.id === id);
    if (doc) {
      product = {
        id: doc.id,
        ...((({ id, ...rest }) => rest)(doc.data() as Product))
      };
    } else {
      product = undefined;
    }

    console.log('Product found:', product);

    return product;
  }
}
