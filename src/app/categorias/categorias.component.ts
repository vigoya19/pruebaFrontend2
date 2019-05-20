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
    activo: 0
  };
  public prueba;
  imprimir() {
    console.log(this.categorias);
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
  @ViewChild("pcategorias") pCategorias: MatPaginator;
  @ViewChild("tcategoria") TCategorias: MatTable<any>;

  // tCategorias ;
  displayedColumns: string[] = [
    "codigo",
    "nombre",
    "descripcion",
    "activo",
    "editar",
    "eliminar"
  ];

  // public listadoCategorias = [{
  //   codigo: "001", nombre: 'Hydrogen', descripcion: "hola", activo: '1'}];
  public estado: any[] = [
    { key: 1, value: "Activo" },
    { key: 0, value: "Inactivo" }
  ];

  saveCategoria() {
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
  }

  getCategorias() {
    this.service.getCategorias().subscribe((data: any) => {
      this.listadoCategorias = data;
      if (this.listadoCategorias) {
        this.dataCategorias = new MatTableDataSource<any>(
          this.listadoCategorias
        );
        this.dataCategorias.paginator = this.pCategorias; //con esto pagino en angular material
      }
      console.log(this.listadoCategorias);
      this.dataSource = this.listadoCategorias;
    });
  }

  editCategoria() {
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
         
      });
  }

  deleteCategoria(id){
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
       //AQUI ENTRA SI ENTRA
        
       this.service.deleteCategoria(id).subscribe((data:any) => {
             console.log(data);
              

       } )
       
       swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
       //AQUI ENTRA SI CANCELO
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


 
    // });
  }

  onRegistrarCategorias() {
    console.log(this.categorias);
  }

  ngOnInit() {
    this.getCategorias();
  }
}
