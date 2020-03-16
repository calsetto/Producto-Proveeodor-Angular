import { Component, OnInit } from '@angular/core';

import { Proveedor } from './../models/proveedor'


@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  lol1:number = 1;

  ProveedorArray: Proveedor[] = [
    {id: 1, nombre: 'Eduardo Mendez', direccion:'c/ Libertador #40', telefono: '849-25-1185'}
  ];

  selectedProveedor: Proveedor = new Proveedor();

  //metodo para editar y anadir proveedor
  AddoEditProveedor()
  {
    if(this.selectedProveedor.id == 0)
    {
      //con esta linea se agrega el id que es autoincrementado
      this.selectedProveedor.id = this.ProveedorArray.length + 1 ;

      //se agrega el proveedor al array
      this.ProveedorArray.push(this.selectedProveedor);

      //se agrega al LOCALSTORAGE

      localStorage.setItem('PROVEEDOR', JSON.stringify(this.ProveedorArray));

      let proveedor = JSON.parse(localStorage.getItem("PROVEEDOR"));

      console.log(proveedor);
    }

      this.selectedProveedor = new Proveedor();

  }

  //metodo para abrir y editar los proveedores
  openProveedor(proveedor: Proveedor)
  {
    this.selectedProveedor = proveedor;
  }

  //metodo para eliminar el proveedor
  deleteProveedor()
  {
    if( confirm('Estas seguro de eliminar este proveedor?'))
    {
      this.ProveedorArray= this.ProveedorArray.filter(x => x != this.selectedProveedor);
      this.selectedProveedor = new Proveedor;
    }
  }

  next1()
  {
    this.lol1 = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
