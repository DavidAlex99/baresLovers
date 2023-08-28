import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { GridBarComponent } from './components/grid-bar/grid-bar.component';
import { GridPostComponent } from './components/grid-post/grid-post.component';
import { GridEventComponent } from './components/grid-event/grid-event.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DetallesBarComponent } from './components/detalles-bar/detalles-bar.component';
import { VisualBarComponent } from './components/visual-bar/visual-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GridBarComponent,
    GridPostComponent,
    GridEventComponent,
    NavBarComponent,
    DetallesBarComponent,
    VisualBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //Registro de módulo importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
