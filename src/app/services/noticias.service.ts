import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
  getTopHeadline(){
    return this.http.get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&apiKey=07abab0c61bf446188176073e8b0640d');
  }
}


//0