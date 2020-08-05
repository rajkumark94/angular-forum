import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  _technologyUrl = 'assets/json/en/technologies.json';

  constructor(private _http: HttpClient) {}

  getTechnologies(): Observable <any> {
      return this._http.get(this._technologyUrl);
  }

}