import { Component, OnInit } from '@angular/core';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionesService } from '../../services/publicaciones.service';
import { PublicacionesInterface } from '../../interfaces/publicaciones.interface';
import { UsuarioInterface } from '../../interfaces/usuario.interface';
import e from 'express';

@Component({
  selector: 'app-publicaciones-page',
  standalone: true,
  imports: [PublicacionesComponent],
  templateUrl: './publicaciones-page.component.html',
  styleUrl: './publicaciones-page.component.css'
})
export class PublicacionesPageComponent implements OnInit{

  publicacionList: PublicacionesInterface[] = [];
  userList: UsuarioInterface[] = [];

  


  constructor(private publicacionesService: PublicacionesService){}

  ngOnInit(): void {
    this.getPublicacion();
    this.getUser();
  }

  getPublicacion(){
    this.publicacionesService.getPublicaciones().subscribe({
      next: (result: any) => {
        this.publicacionList = result;
      },
      error: (err: any) => {
        console.log("Erro: "+err);
      }
    })
  }

  getUser(){
    this.publicacionesService.getUsers().subscribe({
      next: (result: any) =>{
        this.userList = result;
      },
      error: (err: any) =>{
        console.log("Error: "+err);
      }
    })
  }

  

}
