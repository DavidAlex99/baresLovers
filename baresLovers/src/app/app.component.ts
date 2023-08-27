import { Component } from '@angular/core';

//Importación de la interfaz
import {Root2} from './interfaces/informacion-bar';

 //Importación del servicio
import {MongodbAPIService} from './peticiones/mongodb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baresLovers';

  //Inyección de dependencia del servicio
  constructor(private dataProvider: MongodbAPIService) { }

  //Atributo con el tipo de dato de la interfaz
  public data : Root2[] = [];

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Root2[]); 
    })
  } 
}
