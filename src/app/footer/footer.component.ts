import {
  Component,
  OnInit
} from '@angular/core';
import {
  About
} from '../interface/about';
import {
  AboutService
} from '../service/about.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright: Date;
  personalDetails: About[];

  constructor(private _aboutService: AboutService) {
      this.copyright = new Date();
  }

  ngOnInit() {
    
    this._aboutService.getPersonalDetails()
        .subscribe(personalData => this.personalDetails = personalData);
  }

}