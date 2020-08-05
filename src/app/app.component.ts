import {
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  AboutService
} from './service/about.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  visitorsForm: FormGroup;
  submitted: boolean = false;
  buttonFlag : boolean  = false;
  hiddenBodyFlag: boolean = false;
  mobileBrowserFlag: boolean = false;
  vistorModel: any;
  public langBackgroundImg = "assets/images/language/img_background.jpg";
  public expBackgroundImg = "assets/images/experience/img_background.jpg";

  @ViewChild('visitorsModel', { static: true }) _visitorsModel: TemplateRef<any>;
  @ViewChild('mobileBrowserModel', { static: true }) _mobileBrowserModel: TemplateRef<any>;

  constructor(private formBuilder: FormBuilder, private _aboutService: AboutService, private modalService: NgbModal) {  }

  ngOnInit() {
     
    if(detectMob()){
      this.mobileBrowserFlag =true;
      this.openVisitorsModel(this._mobileBrowserModel);
      return false;
    }

    this.visitorsForm = this.formBuilder.group({
          visitorsname: ['', Validators.required],
          visitorscompany: ['', Validators.required]
      });

      if (sessionStorage.visitorFlag == undefined) {
        this.openVisitorsModel(this._visitorsModel);
        sessionStorage.visitorFlag = true;
      }
  }

  get form() {
      return this.visitorsForm.controls;
  }

  onSubmit() {

      this.submitted = true;

      // stop here if form is invalid
      if (this.visitorsForm.invalid) {
          return;
      }

      this.buttonFlag = true;
      this._aboutService.sendVisitorsInformation(this.visitorsForm).subscribe(response => {
          this.buttonFlag = false;
          this.submitted = false;
          this.visitorsForm.reset();
          this.hiddenBodyFlag = true;
          sessionStorage.visitorFlag = true;
      });
  }

  openVisitorsModel(model) {
      this.hiddenBodyFlag = false;
      this.modalService.open(model, {
          size: 'lg',
          centered: true,
          backdrop : 'static',
          keyboard : false
      });
  }

  closeVisitorModel(){
    this.submitted = false;
    this.visitorsForm.reset();
  }

}

function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}