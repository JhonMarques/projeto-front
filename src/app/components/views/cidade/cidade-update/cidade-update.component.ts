import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../cidade.model';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade-update',
  templateUrl: './cidade-update.component.html',
  styleUrls: ['./cidade-update.component.css']
})
export class CidadeUpdateComponent implements OnInit {

  cidade: Cidade = {
    id: "",
    nome: "",
    uf: "",
  };


  constructor(
    private service: CidadeService, 
    private router: Router, 
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.cidade.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cidade.id!).subscribe(resposta => {
      this.cidade.nome = resposta.nome;
      this.cidade.uf = resposta.uf;
    });

  }

  update(): void {
    this.service.update(this.cidade).subscribe((resposta) => {
      this.router.navigate(["cidades"]);
      this.service.mensagem("Cidade atualizada com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }


  cancel(): void {
    this.router.navigate(['cidades']);
  }

}
