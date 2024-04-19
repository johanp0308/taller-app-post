import { Component, OnInit } from '@angular/core';
import { PexelApiService } from '../../services/pexel-api.service';
import { error } from 'console';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  imagenesLista: any[] = [];

  constructor(private pexelService: PexelApiService){

  }
  ngOnInit(): void {
    this.getImagenes();
  }

  getImagenes(){
    this.pexelService.getImagenes().subscribe({
      next:(result: any) =>{
        this.imagenesLista = result;
        console.log(result);
      },
      error: (error: Error) =>{
        console.log("hubo un error: "+error);
      }
    })


  }
}
