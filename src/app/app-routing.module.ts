import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MealsProtoComponent } from './meals-proto/meals-proto.component';
import { CategoriesProtoComponent } from './categories-proto/categories-proto.component';
import { AddMealProtoComponent } from './add-meal-proto/add-meal-proto.component';

const appRoute: Routes = [
     {path: '', redirectTo: 'Menu', pathMatch: 'full'},
     {path: 'Menu', component: MenuComponent},
     {path: 'Przepisy/:id', component: MealsProtoComponent},
     {path: 'Kategorie', component: CategoriesProtoComponent},
     {path: '**', component: MenuComponent},
   ]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
