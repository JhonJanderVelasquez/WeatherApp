import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KansasDashboardComponent } from './kansas-dashboard/kansas-dashboard.component';
import { ColumbiaDashboardComponent } from './columbia-dashboard/columbia-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'weather/TOP', component: KansasDashboardComponent},
  {path: 'weather/LWX', component: ColumbiaDashboardComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
