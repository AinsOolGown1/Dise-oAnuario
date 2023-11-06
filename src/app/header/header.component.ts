import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  rutaApp = ""

  constructor(@Inject(DOCUMENT) document:any){
   // console.log(document.location.href)
    this.rutaApp= document.location.href
    console.log(this.rutaApp)
  }

  felicitacionestxt = "FELICIDADES A LOS GRADUADOS 2023"
  anuariotxt = "ANUARIO UNIVERSIDAD CENTRAL DE NICARAGUA"
}
