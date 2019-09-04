import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  posts = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get('http://localhost:8090/?rest_route=/wp/v2/posts/').subscribe ( data => {
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.posts.push(data[key]);
        }
      }
      console.log(this.posts);
    })
  }

  title = 'app';
}
