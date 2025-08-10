import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'gallery',
        loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent)
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./features/product/product.component').then(m => m.ProductComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'shopping-cart',
        loadComponent: () => import('./features/shopping-cart/shopping-cart.component').then(m => m.ShoppingCartComponent)
    },
    {
        path: 'success',
        loadComponent: () => import('./features/payment-success/payment-success.component').then(m => m.PaymentSuccessComponent)
    },
    {
        path: 'cancel',
        loadComponent: () => import('./features/payment-cancel/payment-cancel.component').then(m => m.PaymentCancelComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
];
