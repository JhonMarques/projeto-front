import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente/cliente.model';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente [] = []
  


  displayedColumns: string[] = ["id", "nome", "cpf", "endereco","numero"
  ,"bairro","id_cidade","cep","telefone", "ativo", "acoes"];


  constructor(private service: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe(resposta => {
      this.clientes = resposta;
    })
  }

  navegarClienteCreate(){
    this.router.navigate(['clientes/create'])
  }
}
