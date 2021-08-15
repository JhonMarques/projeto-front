import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: Cliente ={
    nome: '',
    cpf: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    cep: '',
    telefone: '',
    email: '',
    ativo: true,
  }

  constructor(
    private service: ClienteService, 
    private router: Router, 
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id!).subscribe(resposta => {
      this.cliente.nome = resposta.nome;
      this.cliente.cpf = resposta.cpf;
      this.cliente.endereco = resposta.endereco;
      this.cliente.numero = resposta.numero;
      this.cliente.bairro = resposta.bairro;
      this.cliente.cidade = resposta.cidade;
      this.cliente.cep = resposta.cep;
      this.cliente.telefone = resposta.telefone;
      this.cliente.email = resposta.email;
      this.cliente.ativo = true;
    });

  }

  update(): void {
    this.service.update(this.cliente).subscribe((resposta) => {
      this.router.navigate(["clientes"]);
      this.service.mensagem("Cliente atualizado com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }


  cancel(): void {
    this.router.navigate(['clientes']);
  }
}
