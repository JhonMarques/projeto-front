import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente : Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    cep: '',
    email: '',
    ativo: true,
  }


  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.cliente).subscribe((resposta) => {
      this.router.navigate(['clientes'])
      this.service.mensagem('Cliente cadastrado com sucesso!');
  }, err => {
    
    for(let i = 0; i < err.error.errors.length; i++){
      this.service.mensagem(err.error.errors[i].message)
    }
  })
}

cancel(): void {
  this.router.navigate(['clientes'])
}

}
