import { Component, OnInit } from '@angular/core';
import { MoviesFetchService } from '../services/movies-fetch.service';
import { MovieJsonData } from '../constants/movie-json-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-home-page',
  templateUrl: './movies-home-page.page.html',
  styleUrls: ['./movies-home-page.page.scss'],
})
export class MoviesHomePagePage implements OnInit {
  jsonData = new MovieJsonData();

  constructor(private movieService: MoviesFetchService,
              private route: Router) { }

  ngOnInit() {}


  routingData(id:any){
    console.log(id);
    if(id!=null && id!=0){
      sessionStorage.setItem("movieData",id);
      this.route.navigate(['/movies-details-page'])
    }
    
  }
}
