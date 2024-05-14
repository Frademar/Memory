import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(private http : HttpClient) { }

  visualizza(){
    let headers = {'Content-Type': 'text/plain'}  //specifica il tipo di contenuto della stringa
    return this.http.get(`http://localhost:8080/api/memory/visualizza`);
  }
}
