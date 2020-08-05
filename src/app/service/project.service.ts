import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Projects
} from '../interface/projects';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  _projectUrl = 'assets/json/' + sessionStorage.currentLang + '/projects.json';

  constructor(private _http: HttpClient) {}

  getProjectDetails(): Observable < Projects[] > {
      return this._http.get < Projects[] > (this._projectUrl);
  }
}