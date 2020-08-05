import {
  Component,
  OnInit
} from '@angular/core';
import {
  TranslateService
} from '@ngx-translate/core';
import {
  Router
} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  ngOnInit(): void {}

  constructor(public translate: TranslateService, public _router: Router) {
      translate.addLangs(['en', 'jp']);
      translate.setDefaultLang(sessionStorage.currentLang);
  }

  // Change Language Settings
  switchLang() {

      if (sessionStorage.currentLang == 'en') {
          this.translate.use('jp');
          sessionStorage.currentLang = 'jp';
      } else {
          this.translate.use('en');
          sessionStorage.currentLang = 'en';
      }

      window.location.reload();
  }
}