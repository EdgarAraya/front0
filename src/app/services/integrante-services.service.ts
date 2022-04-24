import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntegranteServicesService {
//test

  
  private host= environment.host;
  private api_integrantes="/integrantes";
  private url=this.host+this.api_integrantes;
  //private url=this.host_server+"/"+this.api_server;

  constructor(private http:HttpClient) { }

  getIntegrantes():Observable<any>{
    console.log("api");
    return this.http.get(this.url)
  }

  

  
}