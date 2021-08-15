import { CidadeUpdateComponent } from './components/views/cidade/cidade-update/cidade-update.component';
import { HomeComponent } from './components/template/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeReadComponent } from './components/views/cidade-read/cidade-read.component';
import { CidadeCreateComponent } from './components/views/cidade/cidade-create/cidade-create.component';
import { CidadeDeleteComponent } from './components/views/cidade/cidade-delete/cidade-delete.component';

const routes: Routes = [

  
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'cidades',
    component: CidadeReadComponent
  },

  {
    path:'cidades/create',
    component: CidadeCreateComponent
  },

  {
    path:'cidades/update/:id',
    component: CidadeUpdateComponent
  },
  {
    path:'cidades/deletar/:id',
    component: CidadeDeleteComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
