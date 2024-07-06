import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contador',
  standalone:true,
  imports:[RouterOutlet],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  public title:string = 'Hola Mundo';
  public numero:number = 10;
  public base:number =10
  acumular(valor:number):void{
    this.numero+=valor
  }
}
