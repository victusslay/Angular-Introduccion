import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

barbies: string []= ['Barbie Bailarina','Barbie Mariposa','Barbie Medico','Barbie Ingeniero'];
barbieBorrada: string ='';

borrarBarbie () {
 this.barbieBorrada = this.barbies.shift() || '' ;

  }
}
