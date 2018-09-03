import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../core/main.service';
import { IMovie } from '../interfaces/movie';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: IMovie[] = [];
  dataSourceMovies: any;
  columnsToDisplay = [];


@ViewChild('moviesPaginator') moviesPaginator: MatPaginator;

  constructor(private _mainService: MainService) {
   }

  ngOnInit() {
    this._mainService.getAllMovies()
      .subscribe((moviesO) => {
        this.movies = moviesO;
        this.dataSourceMovies = new MatTableDataSource<IMovie>(this.movies);
        this.dataSourceMovies.paginator = this.moviesPaginator;
        this.columnsToDisplay = ['movie_title', 'title_year'];
        console.log(this.movies);
      });
  }
}
