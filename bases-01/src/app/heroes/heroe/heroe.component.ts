import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
nombre: string = 'Ironman';
edad: number = 20

get nombreCapitalizado(): string {
 return this.nombre.toUpperCase()

}

obtenerNombre(): string {

return ` ${this.nombre} - ${this.edad}`;

   }

cambiarNombre():void {
 this.nombre = 'Spiderman';

}

cambiarEdad():void {
  this.edad = 30
 
 }

}
