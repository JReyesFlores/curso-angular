import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'keepers',
    templateUrl: './keepers.component.html',
    styleUrls: []
})
export class KeepersComponent implements OnInit {
    public title='Cuidadores';
    constructor() { }

    ngOnInit(): void {
        //console.log('Keeper component cargado!!');
     }
}
