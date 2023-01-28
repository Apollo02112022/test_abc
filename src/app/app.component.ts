import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_abc';

  myService;

  apiDatas: any = {};

  letter: string = ""; 

  myArray: any = [];

  constructor(theService: ApiService) {
    this.myService = theService;
  } 

  api() {
    this.myService.myDatas(this.letter).subscribe({
      next: (datas) => {this.apiDatas = datas; this.myArray = this.apiDatas.drinks.filter((cocktail:any) => cocktail.strAlcoholic != "Alcoholic") ; console.log(this.myArray);
        
      },
      error: () => {},
      complete: () => {}
    })
  }
}
