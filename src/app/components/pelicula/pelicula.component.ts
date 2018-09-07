import { PeliculasService } from '../../servicios/peliculas.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent {

  pelicula: any;

  constructor( private _activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) { 
    this._activatedRoute.params.subscribe( params => {
      console.log(params);
      console.log(params['id']);
      this.peliculasService.getPelicula(params['id']).subscribe((data: any) => {
        console.log(data);
        this.pelicula = data;
      });
      console.log(this.pelicula);
    });

  }

}
