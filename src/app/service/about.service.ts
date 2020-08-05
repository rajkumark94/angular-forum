import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  About
} from '../interface/about';
import {
  Language
} from '../interface/language';
import {
  Experience
} from '../interface/experience';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  _aboutUrl = 'assets/json/' + sessionStorage.currentLang + '/about.json';
  _langUrl = 'assets/json/' + sessionStorage.currentLang + '/languages.json';
  _experienceUrl = 'assets/json/' + sessionStorage.currentLang + '/experience.json';

  constructor(private _http: HttpClient) {}

  getPersonalDetails(): Observable < About[] > {
      return this._http.get < About[] > (this._aboutUrl);
  }

  getLanguageDetails(): Observable < Language[] > {
      return this._http.get < Language[] > (this._langUrl);
  }

  getExperience(): Observable < Experience[] > {
      return this._http.get < Experience[] > (this._experienceUrl);
  }

  sendVisitorsInformation(visitorsForm: any): any {
    const visitorsInformation = visitorsForm.value;
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this._http.post('https://formspree.io/xwkrovbb', {
        name: visitorsInformation.visitorsname,
        companyName: visitorsInformation.visitorscompany
    }, {
        'headers': headers
    });
}

}