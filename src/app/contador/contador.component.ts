import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
 title: string = 'Contador App';
 numero: number = 10;
 base: number = 5;

acumular (valor: number) {

  this.numero += valor;
}




}
