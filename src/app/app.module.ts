import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos 
import { FormsModule } from '@angular/forms';

//Componentes creados y por defecto
import { AppComponent } from "./app.component";
import { TiendaComponent } from  './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
