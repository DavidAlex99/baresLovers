import { Component, Input } from '@angular/core';

//Importación de la interfaz
import {Root2} from '../../interfaces/informacion-bar';

 //Importación del servicio
import {MongodbAPIService} from '../../services/barPrincipal/main-bar.service';

@Component({
  selector: 'app-grid-bar',
  templateUrl: './grid-bar.component.html',
  styleUrls: ['./grid-bar.component.css']
})
export class GridBarComponent {
/* 
  //Inyección de dependencia del servicio
  constructor(private dataProvider: MongodbAPIService) { }

  //Atributo con el tipo de dato de la interfaz
  public data : Root2[] = [];

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Root2[]); 
    })
  } */
  @Input() bar: any; // Esto define una entrada llamada "bar" que puedes pasar al componente

  constructor() { }

  ngOnInit(): void {
  }

}