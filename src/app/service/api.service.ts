import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data; 

  constructor(data2: HttpClient) { 
    this.data = data2;
  }

  myDatas(letter: string) {
    return this.data.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  }
}
