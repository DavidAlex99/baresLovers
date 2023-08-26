import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongodbAPIService {


   //Atributo URL
   private URL: string = 'http://localhost:3000/api/bares/';

  //Inyección de dependencia del HttpClient
  constructor(private http:HttpClient) { }

  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }
}
