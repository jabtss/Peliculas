import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "peliculas", component: PeliculasComponent },
  { path: "buscador/:termino", component: BuscadorComponent },
  { path: "pelicula/:id", component: PeliculaComponent },
  { path: "**", pathMatch: "full", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
