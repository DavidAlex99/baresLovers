import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Importación de la interfaz
import {Root2} from '../../interfaces/informacion-bar';

 //Importación del servicio
 import { BarService } from '../../services/detallesBar/bar.service';


@Component({
  selector: 'app-detalles-bar',
  templateUrl: './detalles-bar.component.html',
  styleUrls: ['./detalles-bar.component.css']
})



export class DetallesBarComponent implements OnInit {
  // public bar!: Root2;  // Para almacenar los detalles del bar seleccionado

  // constructor(
  //   private route: ActivatedRoute,  // Inyecta ActivatedRoute
  //   private dataProvider: MongodbAPIService  // Inyecta el servicio
  // ) { }

  // ngOnInit(): void {
  //   // Obtén el 'id' del bar seleccionado de la ruta
  //   const barId = this.route.snapshot.paramMap.get('id')!;
    
  //   // Usa el servicio para obtener los detalles del bar usando el 'barId'
  //   this.dataProvider.getBarDetails(barId).subscribe((response) => {
  //     this.bar = response as Root2;
  //   });
  // }
  bar: any;

  constructor(private route: ActivatedRoute, private barService: BarService) { }

  ngOnInit(): void {
    const barId = this.route.snapshot.paramMap.get('barId');
    console.log("error");
    if (barId) {
        this.barService.getBarById(barId).subscribe(data => {
            this.bar = data;
        });
    } else {
        // Manejar el error o redirigir al usuario si el ID no se proporciona
    }
}
  
}
