import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FooterComponent } from './components/template/footer/footer.component';
import { CidadeReadComponent } from './components/views/cidade-read/cidade-read.component';
import { HomeComponent } from './components/template/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';
import { CidadeUpdateComponent } from './components/views/cidade/cidade-update/cidade-update.component';
import { CidadeCreateComponent } from './components/views/cidade/cidade-create/cidade-create.component';
import { CidadeDeleteComponent } from './components/views/cidade/cidade-delete/cidade-delete.component';
import { ClienteReadComponent } from './components/views/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ClienteDisableComponent } from './components/views/cliente/cliente-disable/cliente-disable.component';
import { ClienteReadDisableComponent } from './components/views/cliente/cliente-read-disable/cliente-read-disable.component';
import { ClienteAtiveComponent } from './components/views/cliente/cliente-ative/cliente-ative.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CidadeReadComponent,
    HomeComponent,
    NavComponent,
    CidadeUpdateComponent,
    CidadeCreateComponent,
    CidadeDeleteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDisableComponent,
    ClienteReadDisableComponent,
    ClienteAtiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
