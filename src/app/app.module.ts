import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { map } from 'rxjs/operators';
import { NgSemanticModule } from 'ng-semantic';
import { BorradoresComponent } from './borradores/borradores.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BorradoresComponent,
    EncuestasComponent,
    CrearEncuestaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSemanticModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
