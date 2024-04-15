import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PublicacionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller-app-post';
}
