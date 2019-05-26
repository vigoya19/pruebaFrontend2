import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductosService } from "../_servicio/productos/productos.service";
import { CategoriasService } from "../_servicio/categorias/categorias.service";
import swal from "sweetalert2";
import {
  MatTable,
  MatPaginator,
  MatTableDataSource,
  MatExpansionPanelDescription
} from "@angular/material";
@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"]
})
export class ProductosComponent implements OnInit {
  constructor(private prod: ProductosService, private cs: CategoriasService) {}

  public dataSource: any;
  public dataSourceCategoria: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
public flag = false;
  public listadoProductos: any = [];
  public categorias;
  public categoriasDeProductos;
  public categoriaInformativa;


  public estado: any[] = [
    { key: 1, value: "Activo" },
    { key: 0, value: "Inactivo" }
  ];

  displayedColumns: string[] = [
    "codigo",
    "nombre",
    "descripcion",
    "marca",
    "categoria",
    "precio",
    "editar",
    "eliminar",
    "categorias"
  ];

activar_boton(id){
    if (id!==undefined){
     this.flag = true;
  }
}
  displayedColumnsCategoria: string[] = [
    "codigo",
    "nombre",
    "descripcion",
    "activo",
    "asignar"
    
  ];

  public categoriasData = {
    id: 0,
    codigo: "",
    nombre: "",
    descripcion: "",
    activo: 1
  };

  public productos = {
    id: 0,
    codigo: "",
    nombre: "",
    descripcion: "",
    marca: "",
    categoria: 0,
    precio: 0
  };

  cambiar() {
    console.log(this.productos.categoria);
  }

  limpiarFormulario() {
    this.productos = {
      id: 0,
      codigo: "",
      nombre: "",
      descripcion: "",
      marca: "",
      categoria: 0,
      precio: 0
    };
  }

  validarRepetidos(array) {
    let flag = true;
    let codigo = this.productos.codigo;
    let nombre = this.productos.nombre;
    array.filter(function(data) {
      if (data.codigo === codigo ||  data.nombre  ===  nombre) {
       flag = false;
            
      }else{
        flag = true;
      }
    });
    return flag;
  }



  guardarProductos() {

if( this.validarRepetidos(this.listadoProductos)=== true){

  if (
    this.productos.codigo !== undefined &&
    this.productos.nombre !== undefined &&
    this.productos.descripcion !== undefined &&
    this.productos.marca !== undefined &&
    this.productos.categoria !== undefined &&
    this.productos.precio !== undefined
  ) {
    this.prod.saveProductos(this.productos).subscribe((data: any) => {
      if (data.staus == "succes") {
        swal.fire({
          title: "Bien..!",
          text: `EL producto ${
            this.productos.nombre
          } fue creado exitosamente..!`,
          type: "success"
        });
      }
      this.limpiarFormulario();
    });
  } else {
    swal.fire({
      title: "Error..!",
      text: `Faltan campos por llenar, por favor verifique`,
      type: "error"
    });
  }
  
}else{
  swal.fire({
    title: "Error..!",
    text: `El nombre o código ya se encuentra registrado en la base de datos`,
    type: "error"
  });
}




  }

  getProductos() {
    this.prod.getProductos().subscribe((data: any) => {
      this.listadoProductos = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      console.log(this.listadoProductos);
    });
  }

  editProductos() {
    this.prod
      .editProductos(this.productos.id, this.productos)
      .subscribe((data: any) => {
        if (data.status === "succes") {
          swal.fire({
            title: "Bien..!",
            text: `EL producto ${
              this.productos.nombre
            } fue editado exitosamente..!`,
            type: "success"
          });
          this.limpiarFormulario();
        } else {
          swal.fire({
            title: "Error..!",
            text: `No se editó`,
            type: "error"
          });
        }
      });
  }

  deleteProductos(id) {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          //AQUI ENTRA SI ENTRA
          this.prod.deleteProductos(id).subscribe((data: any) => {});

          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          //AQUI ENTRA SI CANCELO
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }

  showCategoriasProductos(id) {
    console.log(id);
    this.prod.showCategoriesByProductos(id).subscribe((data: any) => {
      
      // this.dataSourceCategoria = data;
      this.categoriasDeProductos = data;

      console.log(this.categoriasDeProductos);

    });
  }

  imprimirSeleccionado(element){
    console.log(element);
  }

  imprimir() {
    console.log(this.productos);
  }

  getCategorias() {
    this.cs.getCategorias().subscribe((data: any) => {
      this.categorias = data;
      console.log(this.categorias);
    });
  }
  onRegistrarProductos() {
    console.log(this.productos);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.getCategorias();
    this.getProductos();
  }
}
