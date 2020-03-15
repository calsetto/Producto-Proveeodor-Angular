import { Component } from '@angular/core';
import { Producto } from './models/producto';
import { Proveedor } from './models/proveedor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ProductoArray: Producto[];

  selectedProducto: Producto = new Producto();

  //metodo para editar y anadir
  AddoEditProducto()
  {
    if(this.selectedProducto.id == 0)
    {
      //con esta linea se agrega el id que es autoincrementado
      this.selectedProducto.id = this.ProductoArray.length + 1 ;

      //se agrega el producto al array
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
      this.ProductoArray.filter(x => x != this.selectedProducto);
      this.selectedProducto = new Producto
    }
  }
}



