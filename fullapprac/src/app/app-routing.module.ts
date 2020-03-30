import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { HomeComponent } from './pages/home/home.component';
import { VrcComponentComponent } from './pages/vrc-component/vrc-component.component';


// const routes: Routes = [ 
//   {path: '', pathMatch: 'full', redirectTo: 'dashboard'}, 
//   { path: "fo", component: FirstComponent, outlet: "foutlet1" },
//  { path: 'dashboard', component: HomeComponent  },
//   { path: 'first', component: FirstComponent },
//   { path: 'second', component: SecondComponent },
//   { path: 'vrc', component: VrcComponentComponent }
  
// ]
//   ;
const routes: Routes = [ 
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'}, 
  { path: "fo", component: FirstComponent, outlet: "foutlet1" },
 { path: 'dashboard', component: HomeComponent  },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'vrc', component: VrcComponentComponent },
  { path: 'homepage', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) }
  
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
