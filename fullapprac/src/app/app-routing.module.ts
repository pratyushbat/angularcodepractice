import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [ 
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'}, 
  { path: "fo", component: FirstComponent, outlet: "foutlet1" },
 { path: 'dashboard', component: HomeComponent  },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
