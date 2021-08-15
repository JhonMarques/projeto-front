import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../cidade.model';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade-delete',
  templateUrl: './cidade-delete.component.html',
  styleUrls: ['./cidade-delete.component.css']
})
export class CidadeDeleteComponent implements OnInit {

 

  cidade: Cidade = { 
    
    id: '',
    nome: '',
    uf: ''
  }
  
    constructor(private service: CidadeService, private route: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
      this.cidade.id = this.route.snapshot.paramMap.get('id')!
      this.findById()
    }
  
  
    findById(): void {
      this.service.findById(this.cidade.id!).subscribe((resposta) => {
       this.cidade.nome = resposta.nome
       this.cidade.uf = resposta.uf
      })
    }
  
    delete(): void{
      this.service.delete(this.cidade.id!).subscribe((resposta) => {
        this.router.navigate(['cidades'])
        this.service.mensagem('Cidade excluída com sucesso!')
      }, err => {
        this.service.mensagem(err.error.error)
      })
    }
  
    cancel(): void {
      this.router.navigate(['cidades'])
    }
  

}
