import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridBarComponent } from './components/grid-bar/grid-bar.component';
import { DetallesBarComponent } from './components/detalles-bar/detalles-bar.component';

const routes: Routes = [
  { path: '', component: GridBarComponent },
  { path: 'bares/:barId', component: DetallesBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
