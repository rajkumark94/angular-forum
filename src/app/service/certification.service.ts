import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Certification
} from '../interface/certification';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  _certificationUrl = 'assets/json/' + sessionStorage.currentLang + '/certification.json'

  constructor(private _http: HttpClient) {}

  getCertificationdatails(): Observable < Certification[] > {
      return this._http.get < Certification[] > (this._certificationUrl);
  }
}