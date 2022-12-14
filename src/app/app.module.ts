import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealsComponent } from './meals/meals.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
// import { DeleteMealComponent } from './meal/delete-meal/delete-meal.component';
// import { EditMealComponent } from './meal/edit-meal/edit-meal.component';
import { MealProtoComponent } from './meal-proto/meal-proto.component';
import { MealsProtoComponent } from './meals-proto/meals-proto.component';
import { CategoryProtoComponent } from './category-proto/category-proto.component';
import { CategoriesProtoComponent } from './categories-proto/categories-proto.component';
import { AddMealProtoComponent } from './add-meal-proto/add-meal-proto.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AddCategoryProtoComponent } from './add-category-proto/add-category-proto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DeleteMealProtoComponent } from './delete-meal-proto/delete-meal-proto.component';
import { FlexFilterPipe } from './flex-filter.pipe';

import { DeleteCategoryProtoComponent } from './delete-category-proto/delete-category-proto.component';
import { DirFormaterDirective } from './dir-formater.directive';
import { EditCategoryProtoComponent } from './edit-category-proto/edit-category-proto.component';
import { EditMealProtoComponent } from './edit-meal-proto/edit-meal-proto.component';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealComponent,
    MenuComponent,
    // DeleteMealComponent,
    // EditMealComponent,
    MealProtoComponent,
    MealsProtoComponent,
    CategoryProtoComponent,
    CategoriesProtoComponent,
    AddMealProtoComponent,
    AddCategoryProtoComponent,
    NavigationBarComponent,
    DeleteMealProtoComponent,
    FlexFilterPipe,
    DeleteCategoryProtoComponent,
    DirFormaterDirective,
    EditCategoryProtoComponent,
    EditMealProtoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
