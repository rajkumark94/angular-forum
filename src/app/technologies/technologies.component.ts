import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgbRatingConfig
} from '@ng-bootstrap/ng-bootstrap';
import {
  TechnologyService
} from '../service/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  currentRate = 3;
  technologiesDetails: any;
  tempTechnologiesDetails: any;
  quotesDetails: any;
  selectedValue: string;
  techBackgroundImg = "assets/images/technologies/img_background.jpg";

  constructor(private _technologiesService: TechnologyService, private _NgbRatingConfig: NgbRatingConfig) {
      _NgbRatingConfig.max = 5;
      _NgbRatingConfig.readonly = true;
  }

  ngOnInit() {

      this._technologiesService.getTechnologies()
          .subscribe(technologyData => {
              this.technologiesDetails = technologyData.technologies;
              this.tempTechnologiesDetails = this.technologiesDetails.all;
              this.quotesDetails = this.technologiesDetails.quotes;

              // TODO
              if (sessionStorage.currentLang == 'en') {
                  this.selectedValue = "All Technologies";
              } else {
                  this.selectedValue = "すべてのテクノロジー";
              }

          });
  }

  loadAllDetails() {
      // TODO
      if (sessionStorage.currentLang == 'en') {
          this.selectedValue = "All Technologies";
      } else {
          this.selectedValue = "すべてのテクノロジー";
      }
      this.tempTechnologiesDetails = this.technologiesDetails.all;
  }

  loadFrameWorkDetails() {
      // TODO
      if (sessionStorage.currentLang == 'en') {
          this.selectedValue = "Frameworks";
      } else {
          this.selectedValue = "フレームワーク";
      }
      this.tempTechnologiesDetails = this.technologiesDetails.framework;
  }

  loadScriptingDetails() {
      // TODO
      if (sessionStorage.currentLang == 'en') {
          this.selectedValue = "Scripting";
      } else {
          this.selectedValue = "スクリプティング";
      }
      this.tempTechnologiesDetails = this.technologiesDetails.scripting;
  }

  loadDatabaseDetails() {
      // TODO
      if (sessionStorage.currentLang == 'en') {
          this.selectedValue = "Database";
      } else {
          this.selectedValue = "データベース";
      }
      this.tempTechnologiesDetails = this.technologiesDetails.database;
  }

  loadDevopsDetails() {
      this.selectedValue = "DevOps";
      this.tempTechnologiesDetails = this.technologiesDetails.devops;
  }

  loadBuildDetails() {
      // TODO
      if (sessionStorage.currentLang == 'en') {
          this.selectedValue = "Build";
      } else {
          this.selectedValue = "ビルド";
      }
      this.tempTechnologiesDetails = this.technologiesDetails.build;
  }

}