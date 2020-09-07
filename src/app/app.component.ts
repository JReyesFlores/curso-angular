import { Component, DoCheck, OnInit } from '@angular/core'; 
//import * as $ from 'jquery'; // Importando JQuery en angular 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  public title:string = 'curso-angular';
  public emailContacto:string;
  
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    //console.log(localStorage.getItem('emailContacto'));
      
  }
  
  ngDoCheck(): void {
    //throw new Error("Method not implemented.");
    //console.log('docheck ejecutado!! - appComponent');
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(): void {
    localStorage.removeItem('emailContacto');
    localStorage.clear(); //elimina todos los elementos del localstorage
    this.emailContacto=null;
  }
}
