import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailUsService {

  _mailUrl = 'assets/json/mailus/mailus.json';

  constructor(private _http: HttpClient) {}

  sendMessage(mailusForm: any): any {
      const mailus = mailusForm.value;
      const headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
      return this._http.post('https://formspree.io/xnqgdjng', {
          name: mailus.name,
          emailId: mailus.email,
          message: mailus.message
      }, {
          'headers': headers
      });
  }
}