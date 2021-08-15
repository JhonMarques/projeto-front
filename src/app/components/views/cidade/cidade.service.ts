import { Cidade } from './cidade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

 
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: string): Observable<Cidade> {
    const url = `${this.baseUrl}/cidades/buscarCidade/${id}`
    return this.http.get<Cidade>(url)
  }

  findAll():Observable<Cidade[]> {
    const url = `${this.baseUrl}/cidades/listarTodos`
    return this.http.get<Cidade[]>(url)
  }

  create(cidade: Cidade): Observable<Cidade>{
    const url = `${this.baseUrl}/cidades/novo`
    return this.http.post<Cidade>(url, cidade);
   }

   delete(id: string):Observable<void>{
     const url = `${this.baseUrl}/cidades/deletar/${id}`
     return this.http.delete<void>(url)
   }


   update(cidade: Cidade):Observable<void> {
    const url = `${this.baseUrl}/cidades/atualizarCidade/${cidade.id}`
    return this.http.put<void>(url, cidade)
  }


   mensagem(str: string): void {
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
       duration: 3000
    })
 }
}
