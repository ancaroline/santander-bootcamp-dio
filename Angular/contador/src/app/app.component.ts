import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'contador';
  count = 0;
  text = ''; //two way data binding

  idiomas = [
    {
      idioma: "Francês",
      traducao: "un, deux, trois, quatre..."
    },
    {
      idioma: "Inglês",
      traducao: "one, two, three, four..."
    },
 
  ]

  constructor() {}

  //método de contador
  ngOnInit(): void {
      let interval = setInterval(() => {
        this.count++;
        if(this.count === 10) {
          clearInterval(interval);
        }
      }, 1000)
  }
}
