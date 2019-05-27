import { Component, OnInit, ViewChild } from "@angular/core";
import { CategoriasService } from "../_servicio/categorias/categorias.service";
import {
  MatTable,
  MatPaginator,
  MatTableDataSource,
  MatExpansionPanelDescription
} from "@angular/material";
import swal from "sweetalert2";
import { throwError } from "rxjs";
import { tryParse } from "selenium-webdriver/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"]
})
export class CategoriasComponent implements OnInit {
  constructor(private service: CategoriasService) {}

  public categorias = {
    id: 0,
    codigo: "",
    nombre: "",
    descripcion: "",
    activo: 1
  };
  public prueba;
  public flag = false;

  imprimir() {
    console.log(this.categorias);
  }

  activar_boton(id) {
    if (id !== undefined) {
      this.flag = true;
    }
  }
  

  limpiarFormulario() {
    this.categorias = {
      id: 0,
      codigo: "",
      nombre: "",
      descripcion: "",
      activo: 0
    };
  }

  public dataSource: any;
  public listadoCategorias;

  public dataCategorias: MatTableDataSource<any>; // Mi objeto tipo matTable para actualizar mi tabla
  // @ViewChild("pcategorias") pCategorias: MatPaginator;
  @ViewChild("tabla") table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // tCategorias ;
  displayedColumns: string[] = [
    "codigo",
    "nombre",
    "descripcion",
    "activo",
    "editar"
  ];

  // public listadoCategorias = [{
  //   codigo: "001", nombre: 'Hydrogen', descripcion: "hola", activo: '1'}];
  public estado: any[] = [
    { key: 1, value: "Activo" },
    { key: 0, value: "Inactivo" }
  ];

  validarRepetidos(array) {
    let flag = true;
    let codigo = this.categorias.codigo;
    let nombre = this.categorias.nombre;
    array.filter(function(data) {
      if (data.codigo === codigo || data.nombre === nombre) {
        flag = false;
      } else {
        flag = true;
      }
    });
    return flag;
  }

  saveCategoria() {
    if (this.validarRepetidos(this.listadoCategorias) == true) {
      if (
        this.categorias.activo !== undefined &&
        this.categorias.codigo !== undefined &&
        this.categorias.descripcion !== undefined &&
        this.categorias.nombre !== undefined
      ) {
        this.service.saveCategoria(this.categorias).subscribe((data: any) => {
          if (data.status == "succes") {
            swal.fire({
              title: "Bien..!",
              text: `La categoria ${
                this.categorias.nombre
              } fue creada exitosamente..!`,
              type: "success"
            });
            this.getCategorias();
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
    } else {
      swal.fire({
        title: "Error..!",
        text: `El Nombre o Código ya se encuentra registrado, verifique!`,
        type: "error"
      });
    }
  }

  getCategorias() {
    this.service.getCategorias().subscribe((data: any) => {
      this.listadoCategorias = data;
      if (this.listadoCategorias) {
        this.dataSource = new MatTableDataSource<any>(this.listadoCategorias);
        if (this.dataSource.length > 0) {
          this.table.renderRows();
          this.dataSource.paginator = this.paginator;
        }
      }
      console.log(this.dataSource);
    });
  }

  editCategoria() {
    // if(this.validarRepetidos(this.listadoCategorias) == true ){
    this.service
      .updateCategoria(this.categorias.id, this.categorias)
      .subscribe((data: any) => {
        console.log(data.status == "succes");
        swal.fire({
          title: "Bien..!",
          text: `La categoria ${
            this.categorias.nombre
          } fue editada exitosamente..!`,
          type: "success"
        });
        this.limpiarFormulario();
        this.getCategorias();
      });
    // }else {
    swal.fire({
      title: "Error..!",
      text: `El Nombre o Código ya se encuentra registrado, verifique!`,
      type: "error"
    });
    // }
  }

  selectCategoria(object) {
    this.categorias = object;
    if (object.activo == true) {
      this.categorias.activo = 1;
    } else {
      this.categorias.activo = 0;
    }
  }

  deleteCategoria(id) {
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

          this.service.deleteCategoria(id).subscribe((data: any) => {
            console.log(data);
          });

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

    // });
  }

  onRegistrarCategorias() {
    console.log(this.categorias);
  }

  ngOnInit() {
    this.getCategorias();
  }
}
