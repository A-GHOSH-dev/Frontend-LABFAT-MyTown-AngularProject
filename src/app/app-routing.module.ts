import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PlacesComponent } from './places/places.component';
import { FactComponent } from './fact/fact.component';
import { FoodComponent } from './food/food.component';
import { CareComponent } from './care/care.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
 
{ path: 'places', component: PlacesComponent},
{ path: 'food', component: FoodComponent},
{ path: 'care', component: CareComponent},
{ path: 'contact', component: ContactComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
