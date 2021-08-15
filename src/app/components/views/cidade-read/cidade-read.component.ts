import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cidade } from '../cidade/cidade.model';
import { CidadeService } from '../cidade/cidade.service';

@Component({
  selector: 'app-cidade-read',
  templateUrl: './cidade-read.component.html',
  styleUrls: ['./cidade-read.component.css']
})
export class CidadeReadComponent implements OnInit {

  dataSource = new MatTableDataSource();
  cidades: Cidade[] = []

  displayedColumns: string[] = ["id", "nome", "uf", "acoes"];

  constructor(private service: CidadeService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.cidades = resposta;
    })
  }

  navegarCidadeCreate(){
    this.router.navigate(['cidades/create'])
  }

  navegarCidadeDelete(){
    this.router.navigate(['cidades/deletar'])
  }

}

