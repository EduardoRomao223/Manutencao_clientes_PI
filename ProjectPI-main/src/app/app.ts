import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';
import { Footer } from './shared/footer/footer';

@Component({
  imports: [RouterOutlet, Menu, Footer],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = 'Site de Instrumentos Musicais';
  nome = 'randy';
}
