import {
  Component,
  OnInit
} from '@angular/core';
import {
  About
} from '../interface/about';
import {
  Experience
} from '../interface/experience';
import {
  AboutService
} from '../service/about.service';
import {
  Language
} from '../interface/language';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personalDetails: About[];
  languageDetails: Language[];
  experienceDetails: Experience[];
  public langBackgroundImg = "assets/images/language/img_background.jpg";
  public expBackgroundImg = "assets/images/experience/img_background.jpg";

  constructor(private _aboutService: AboutService) { }

  ngOnInit() {

      this._aboutService.getPersonalDetails()
          .subscribe(personalData => this.personalDetails = personalData);

      this._aboutService.getLanguageDetails()
          .subscribe(langData => this.languageDetails = langData);

      this._aboutService.getExperience()
          .subscribe(experienceData => this.experienceDetails = experienceData);
  }

}