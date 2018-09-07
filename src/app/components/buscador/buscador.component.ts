import { PeliculasService } from "../../servicios/peliculas.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html"
})
export class BuscadorComponent implements OnInit {
  constructor(
    private _ActivatesRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private _router: Router
  ) {}

  peliculas: any[] = [];
  termino: string;

  ngOnInit() {
    this._ActivatesRoute.params.subscribe(params => {
      this.termino = params["termino"];
      this.peliculas = this.peliculasService
        .getPeliculas(params["termino"])
        .subscribe((data: any) => {
          this.peliculas = data;
          localStorage.setItem('buscadorPeliculas', this.termino);
        });
      console.log(this.peliculas);
    });
  }
  verPelicula(index: string) {
    this._router.navigate(["pelicula", index]);
  }
}
