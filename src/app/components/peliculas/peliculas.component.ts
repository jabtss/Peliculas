import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { PeliculasService } from "../../servicios/peliculas.service";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html"
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];
  termino: string;

  constructor(
    private _peliculasService: PeliculasService,
    private _router: Router,
    private _ActivatesRoute: ActivatedRoute
  ) {
    this.termino = localStorage.getItem('buscadorPeliculas');
    this._peliculasService
      .getPeliculas(this.termino ? this.termino : "batman")
      .subscribe((data: any) => {
        console.log(data);
        this.peliculas = data;
      });
  }

  ngOnInit() {
    console.log("ngOnInit");
    console.log(this.peliculas);
  }
  verPelicula(index: number) {
    this._router.navigate(["pelicula", index]);
  }
}
