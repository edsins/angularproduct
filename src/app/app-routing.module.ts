import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'update/:productid', component:UpdateComponent},
  {path:'Create', component:CreateComponent},
  {path:'Home', component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
