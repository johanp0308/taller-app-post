import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BarranavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller-app-post';
}
