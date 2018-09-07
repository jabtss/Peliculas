import { Injectable } from "@angular/core";
import { PeliculaComponent } from "../components/pelicula/pelicula.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class PeliculasService {
  constructor(private httpClient: HttpClient) {}
  getQuery(query: string) {
    const url = `http://www.omdbapi.com/?apikey=f12ba140${query}`;
    return this.httpClient.get(url);
  }
  getPeliculas(termino: string): any {
    return this.getQuery("&s=" + termino.replace(" ", "+")).pipe(
      map(data => data["Search"])
    );
  }

  getPelicula(termino: string): any {
    return this.getQuery("&i=" + termino.replace(" ", "+"));
  }

  buscarPeliculas(termino: string): any {
    let peliculasArr: any = [];
    termino = termino.toLowerCase();
    /* for (let peliculae of this.peliculas) {
      let nombre: String = peliculae.nombre.toLowerCase();
      if ( nombre.indexOf(termino) > -1 ) {
        peliculasArr.push(peliculae);
      }
    } */
    /* for (let i = 0; i < this.peliculas.length; i++) {
      let peliculae: Pelicula = this.peliculas[i];
      let nombre: String = peliculae.nombre.toLowerCase();
      peliculae.idx = i;
      if (nombre.indexOf(termino) > -1) {
        peliculasArr.push(peliculae);
      }
    } */
    return peliculasArr;
  }
}
