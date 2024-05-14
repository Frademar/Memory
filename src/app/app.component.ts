import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MemoryService } from './service/memory.service';
import { ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memory';
  coperta= "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Carte_Napoletane_retro.jpg/640px-Carte_Napoletane_retro.jpg";
  listaCard : any[]=[];
  primaCarta !: number;
  coppia : any[]=[];
  disabilita : boolean = false;
//   Query di vista

      // Una query di vista è un modo per accedere a elementi o direttive figlio all'interno del DOM della vista di un componente. Il DOM della vista è la rappresentazione ad albero degli elementi HTML che compongono il componente. La query di vista consente di ottenere un riferimento a questi elementi o direttive figlio in modo da poterne interagire con il codice del componente.
  // ViewChildrende possibile accedere agli elementi DOM nativi che hanno una variabile di riferimento del modello.


  constructor(private service : MemoryService){
    service.visualizza().subscribe({
      next: (data : any)=>{console.log(data); this.listaCard=data;}
    })
  }
  
 async ruotaCarta(event : any, i : number){
    let cards=document.getElementById(`${event.currentTarget.id}`);
    console.log(cards)
    if(this.coppia.length == 0){
      console.log("La lunghezza dell'array per decretare l'uguaglianza: "+this.coppia.length);
      this.primaCarta=i;
    }

   if(!cards?.classList.contains("ruota-180") && this.coppia.length<2){ 

      cards?.classList.add("ruota-180")
      this.coppia.push(cards);
      
      // CONDIZIONE CHE REVISIONA SE LE DUE CARD HANNO LO STESSO URL IDENTIFICATIVO DELLA CARD
    console.log
      if(this.coppia.length==2 && this.listaCard[this.primaCarta].url == this.listaCard[i].url){
        console.log("Complimenti coppia raggiunta!!");
        this.coppia[0].classList.add("true");
        this.coppia[1].classList.add("true");
        this.coppia.splice(0,2);
      }
      else if(this.coppia.length==2 && this.listaCard[this.primaCarta].url != this.listaCard[i].url){
         this.disabilita=true;
         await new Promise((resolve)=>{
         setTimeout(()=>{
           resolve("promessa eseguita con successo");
           this.coppia[0].classList.remove("ruota-180");
           this.coppia[1].classList.remove("ruota-180");
           this.coppia.splice(0,2);
          },1000)}
        ); 
        this.disabilita=false;
        console.log("Coppia non abbinata!!")
      }
    }
    // console.log(this.coppia);
    // this.ruota=!this.ruota;
    // card1?.classList.add("ruota");
  
  }
  

}
