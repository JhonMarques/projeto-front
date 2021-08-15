import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient,  private _snack: MatSnackBar) { }

  findAll():Observable<Cliente[]> {
    const url = `${this.baseUrl}/clientes/listarAtivos`
    return this.http.get<Cliente[]>(url)
  }

  findById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/clientes/buscarCliente/${id}`
    return this.http.get<Cliente>(url)
  }
    

  create(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/clientes/novoCliente`
    return this.http.post<Cliente>(url, cliente);
   }
  
   update(cliente: Cliente):Observable<void> {
    const url = `${this.baseUrl}/clientes/atualizarCliente/${cliente.id}`
    return this.http.put<void>(url, cliente)
  }
 
   mensagem(str: string): void {
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
       duration: 3000
    })
 }
}
