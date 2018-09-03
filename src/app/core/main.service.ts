import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  RequestMethod,
  ResponseContentType
} from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IMovie } from '../interfaces/movie';

@Injectable()
export class MainService {
  constructor(private _http: Http) {}

  getAllMovies(): Observable<IMovie[]> {
    return this._http
      .get('http://starlord.hackerearth.com/movieslisting')
      .map((response: Response) => <IMovie[]>response.json())
      .catch(this.handleError);
  }

  handleError(err: Response) {
    console.log(err);
    return Observable.throw(err);
  }
}
