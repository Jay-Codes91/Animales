import { Component, OnInit } from '@angular/core';
import { DatosAnimalesService } from 'src/app/Services/datos-animales.service';
import Swal from 'sweetalert2';

declare var AOS: any;
declare var alertify: any;
//declare var Swal: any;

@Component({
  selector: 'app-tipos-animales',
  templateUrl: './tipos-animales.component.html',
  styleUrls: ['./tipos-animales.component.scss']
})
export class TiposAnimalesComponent implements OnInit {

  animales: any[] = [];
  mamiferos: any[] = [];
  aves: any[] = [];
  reptiles: any[] = [];
  insectos: any[] = [];
  peces: any[] = [];
  anfibios: any[] = [];
  crustaceos: any[] = [];
  todosAnimales: any[] = [];
  buscar = '';
  mostrarContenido: boolean = false;

  constructor(private servicio: DatosAnimalesService) {
    this.animales = this.servicio.listaDescripcionEspecies();
    this.mamiferos = this.servicio.listaMamiferos();
    this.aves = this.servicio.listaAves();
    this.reptiles = this.servicio.listaReptiles();
    this.insectos = this.servicio.listaInsectos();
    this.peces = this.servicio.listaPeces();
    this.anfibios = this.servicio.listaAnfibios();
    this.crustaceos = this.servicio.listaCrustaceos();
    this.todosAnimales = this.servicio.listaTodosAnimales();
  }

  ngOnInit(): void {
    //alertify.defaults.transition = "zoom";
  }

  descripcion(titulo: string, desc: string, img: any) {
    //alertify.alert(titulo, desc)

    Swal.fire({
      imageUrl: img,
      imageHeight: 100,
      imageWidth: 100,
      title: titulo,
      text: desc,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#8BC34A'
    })
  }

}
