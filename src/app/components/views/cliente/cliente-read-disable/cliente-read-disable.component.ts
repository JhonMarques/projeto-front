import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read-disable',
  templateUrl: './cliente-read-disable.component.html',
  styleUrls: ['./cliente-read-disable.component.css']
})
export class ClienteReadDisableComponent implements OnInit {

  clientesDisable: Cliente [] = []
  


  displayedColumns: string[] = ["id", "nome", "cpf", "endereco","numero"
  ,"bairro","cidade","cep","telefone", "ativo", "acoes"];


  constructor(private service: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findAllInative();
  }

  findAllInative(): void{
    this.service.findInative().subscribe(resposta => {
      this.clientesDisable = resposta;
    })
  }

  navegarClienteAtivo(){
    this.router.navigate(['clientes'])
  }


}
