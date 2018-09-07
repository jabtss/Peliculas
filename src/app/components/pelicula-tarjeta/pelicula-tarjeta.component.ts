import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pelicula-tarjeta",
  templateUrl: "./pelicula-tarjeta.component.html"
})
export class PeliculaTarjetaComponent implements OnInit {
  @Input()
  pelicula: any;
  @Input()
  index: number;
  @Output()
  peliculaSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    this.peliculaSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verPelicula() {
    this._router.navigate(["pelicula", this.index]);
    /* this.peliculaSeleccionado.emit(this.index); */
  }
}
