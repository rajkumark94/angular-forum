import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  HttpClientModule,
  HttpClient
} from "@angular/common/http";
import {
  AppComponent
} from './app.component';
import {
  AppRoutingModule,
  routingComponents
} from './app-routing.module';
import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import {
  TranslateHttpLoader
} from '@ngx-translate/http-loader';
import {
  ReactiveFormsModule
} from '@angular/forms';
import {
  BannerComponent
} from './banner/banner.component';
import {
  FooterComponent
} from './footer/footer.component';

@NgModule({
  declarations: [
      AppComponent,
      routingComponents,
      BannerComponent,
      FooterComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      NgbModule,
      AppRoutingModule,
      ReactiveFormsModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: httpTranslateLoader,
              deps: [HttpClient]
          }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    if (sessionStorage.currentLang == undefined) {
      sessionStorage.currentLang = 'en';
    }
  }
}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}