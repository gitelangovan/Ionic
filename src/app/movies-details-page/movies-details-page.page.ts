import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieJsonData } from '../constants/movie-json-data';

@Component({
  selector: 'app-movies-details-page',
  templateUrl: './movies-details-page.page.html',
  styleUrls: ['./movies-details-page.page.scss'],
})
export class MoviesDetailsPagePage implements OnInit {

  jsonData = new MovieJsonData();
  title: any;
  original_title: any;
  images: any;
  movieContent: any;
  mPopularity: any;
  mVote: any;
  mLanguage: any;
  mLink: any;
  
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    // getting values from the movie home page
    var id = sessionStorage.getItem('movieData');
    // need to send only the movie title name
    for(let movieTitle of this.jsonData.moviesData){
      if(movieTitle.id==id){
        this.title=movieTitle.title;
        this.images=movieTitle.Images;
        this.original_title=movieTitle.original_title;
        this.movieContent=movieTitle.overview;
        this.mPopularity=movieTitle.vote_count;
        this.mVote=movieTitle.vote_average;
        this.mLanguage=movieTitle.original_language;
      }
      else{
        console.log();
      }
    }
  }


  movieLink(){
    var id = sessionStorage.getItem('movieData');
    for(let movieTitle of this.jsonData.moviesData){
      if(movieTitle.id==id){
        this.mLink=movieTitle.link;
        window.open(this.mLink);
        return;
      }
      else{
        
      }
    }
  }

}
