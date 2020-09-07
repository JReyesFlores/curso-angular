import { Component,Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
    //Asignando atributos de ingreso de datos
    @Input() nombre:string;
    @Input('metros_cuadrados') metros:number;
    public vegetacion:boolean;
    public abierto:boolean;
    
    //EventEmitter => Se utiliza para desencadenar un evento como parametro de salida
    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = true;
        this.abierto = true;
    }

    //Hook OnDestroy => Se ejecuta con ng elimine el componente
    ngOnDestroy(): void {
        //throw new Error("Method not implemented.");
        //console.log('se elimina el component');
    }

    //Hook DoCheck => Cada modificación, o ejecución de un evento
    ngDoCheck(): void {
        //throw new Error("Method not implemented.");
        //console.log('docheck ejecutado!!');
    }

    //Hook oninit => Se inicia el componente solo una vez, a demás se procesa después del onchange
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
        //console.log('oninit ejecutado!!');
    }

    //Hook onchanges => permite identificar los cambios del componente así como su atributos
    ngOnChanges(changes: SimpleChanges): void {
        //console.log('onchange ejecutado!!');
    }

    EmitirEvento(){
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    }
}