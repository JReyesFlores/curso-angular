import { Component } from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
    public titulo:string;
    public nombreDelParque:string;
    public miParque;

    constructor() {
        this.titulo = 'Esta es la tienda';
    } 

    mostrarNombre(){
        //console.log(this.nombreDelParque);
    }

    VerDatosParque(event){
        this.miParque = event;
    }
}