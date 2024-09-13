import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from "./heroes/heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { AboutusComponent } from "./aboutus/aboutus.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, HeroeComponent, ListadoComponent, AboutusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';
}
