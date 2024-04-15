import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
import { PublicacionesInterface } from '../../interfaces/publicaciones.interface';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit{
  
  publicacionList: PublicacionesInterface[] = [];

  constructor(private publicacionesService: PublicacionesService){}

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones(){
    this.publicacionesService.getPublicaciones().subscribe({
      next: (result: any) => {
        this.publicacionList = result;
      },
      error: (error: Error)=>{
        console.log(error);
      }
    });
  }

}
