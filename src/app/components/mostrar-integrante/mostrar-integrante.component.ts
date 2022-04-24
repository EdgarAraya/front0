import { Component, OnInit } from '@angular/core';
import { Integrante } from 'src/app/interfaces/integrante';
import { IntegranteServicesService } from 'src/app/services/integrante-services.service';

@Component({
  selector: 'app-mostrar-integrante',
  templateUrl: './mostrar-integrante.component.html',
  styleUrls: ['./mostrar-integrante.component.css']
})
export class MostrarIntegranteComponent implements OnInit {

  grouplist:Integrante[];

  constructor(private _servicio_integrantes:IntegranteServicesService) {
    this.grouplist = []

  }

  getGroupList(){
    this._servicio_integrantes.getIntegrantes().subscribe(
      lista => {
        console.log(lista);
        this.grouplist = lista;
      }
    );
  }

  ngOnInit(): void {
    this.getGroupList();
  }

}
