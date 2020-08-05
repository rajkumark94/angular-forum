import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Banner
} from '../interface/banner';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  _bannerUrl = 'assets/json/' + sessionStorage.currentLang + '/banner.json'

  constructor(private _http: HttpClient) {}

  getbannerdata(): Observable < Banner[] > {
      return this._http.get < Banner[] > (this._bannerUrl);
  }
}