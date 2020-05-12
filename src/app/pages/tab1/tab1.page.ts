import { Component, OnInit } from '@angular/core';
import { NoticiasService} from '../../services/noticias.service'
import { RespuestaTopHeadlines, Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //Creamos un objeto de barrido, tipo matriz
    noticias: Article[] = [];

  //Aca creamos un Metodo Constructor de tipo Privado
  constructor(private noticiasService:NoticiasService) {}
  //ACa creamos una Funcion que TS que se conecte y extraiga los datos que vienen de la URL
  // Y los muestra en un mensaje LOG JS en el debuger del navegador
  ngOnInit(){
    this.noticiasService.getTopHeadline()
    .subscribe(resp=>{
      console.log('noticias',resp);
      this.noticias.push( ...resp.articles );
    });
  }
}
