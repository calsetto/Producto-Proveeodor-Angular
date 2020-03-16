import { Component } from '@angular/core';
import { Producto } from './models/producto';
import { Proveedor } from './models/proveedor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lol:number = 1;

  ProductoArray: Producto[]= [

    {id: 1, nombre: "Papel Scott", descripcion: "Papel Higienico", fecha_venci: "14/02/2020", id_proveedor: 12 }

  ];

  selectedProducto: Producto = new Producto();

  //metodo para editar y anadir
  AddoEditProducto()
  {
    
    if(this.selectedProducto.id == 0)
    {
      this.selectedProducto.id = this.ProductoArray.length + 1;
      this.ProductoArray.push(this.selectedProducto);
      
    }

    this.selectedProducto = new Producto();
  }

  //metodo para abrir y editar los productos
  openProducto(producto: Producto)
  {
    this.selectedProducto = producto;
  }

  //metodo para eliminar el producto
  deleteProducto()
  {
    if( confirm('Estas seguro de eliminar este producto?'))
    {
      this.ProductoArray = this.ProductoArray.filter(x => x != this.selectedProducto);
      this.selectedProducto = new Producto
    }
  }

  next()
  {
    this.lol = 0;
  }

}



