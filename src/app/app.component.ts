import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FdS';
  menuItems = [
    {
      path: '',
      icon: 'home',
      title: 'Inicio',
    },
    {
      path: 'gallery',
      icon: 'photo',
      title: 'Galería',
    },
    {
      path: 'about',
      icon: 'info',
      title: 'Sobre mí',
    }
  ]
}
