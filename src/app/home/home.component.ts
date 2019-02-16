import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../providers/services';

@Component({
    selector: 'soap-home',
    template: `
    <div class="row">
        <div class="col-md-12 form-group">
                <h4 class="text-center">{{title}}</h4><br>
                <!--<p class="text-center">....descripcion del projyecto</p>-->
        </div>
    </div>
    <div class="row">
        <div class="col-md-9 form-group">
            <input class="form-control" type="text" placeholder="Buscar por DNI" [(ngModel)]="nrodni">
        </div>
        <div class="col-md-3 form-group">
            <button class="btn btn-info btn-sm" (click)="getData()"> Obtener Data</button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 form-group">
            <div class="table-responsive">
                <table class="table table-sm table-bordered table-striped text-center">
                        <tr>
                            <th class="text-center">ID Estudiante</th>
                            <th class="text-center">ID Deposito</th>
                            <th class="text-center">Dni</th>
                            <th class="text-center">Estado</th>
                            <th class="text-center">Fecha</th>
                            <th class="text-center">Importe</th>
                            </tr>
                        <tr>
                            <td>{{listData.id_deposito}}</td>
                            <td>{{listData.id_estudiante}}</td>
                            <td>{{listData.dni}}</td>
                            <td>{{listData.estado_deposito}}</td>
                            <td>{{listData.fecha_pago}}</td>
                            <td>{{listData.importe}}</td>
                        </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 form-group back">
            <code>{{listData | json}}</code>
        </div>
    </div>
    `,
    styles: [`
        .back {
            border-left: 4px solid #1976d2;
            background-color: rgba(25,118,210,.05);
        }
    `],
})

export class HOmeComponent implements OnInit {
    public nrodni: any;
    public listData: any = {};
     /*= [
        {nombre: 'test', compra: '5454'},
        {nombre: 'otra comra', compra: '4545'},
     ];*/
   public title: string;
    constructor(private servicesService: ServicesService) { }

    ngOnInit() {
        this.title = 'Bienvenido Demo Soap';
        // this.getData();
    }

    public getData() {
        const params: any = {}; console.log('---->', this.nrodni);

        this.servicesService.getById$(this.nrodni).subscribe(response => {
            console.log('..respuesta', response);
            this.listData = response.data;
            // this.listData.push({nombre: 'success', compra: '666'});
        });
    }
}
