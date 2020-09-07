import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: []
})
export class ContactComponent implements OnInit {
    public title='Contacto';
    public emailContacto = '';
    constructor() { }

    ngOnInit(): void {
        //console.log('Contacto component iniciado!!');
     }

     guardarEmail(): void {
         //console.log(this.emailContacto);
         localStorage.setItem('emailContacto',this.emailContacto);
         console.log(localStorage.getItem('emailContacto'));
     }
}
