import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [ ]
})
export class HomeComponent implements OnInit {
    public title='Home';
    constructor() { }

    ngOnInit(): void { 
        //console.log('home component cargado!!');
    }
}
