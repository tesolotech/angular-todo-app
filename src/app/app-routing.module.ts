import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];

// { path: 'first-component', component: FirstComponent },

// { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404

// https://angular.io/guide/router

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
