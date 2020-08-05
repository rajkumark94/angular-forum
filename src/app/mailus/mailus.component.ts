import {
  Component,
  TemplateRef,
  ViewChild,
  OnInit
} from '@angular/core';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MailUsService
} from '../service/mailus.service';

@Component({
  selector: 'app-mailus',
  templateUrl: './mailus.component.html',
  styleUrls: ['./mailus.component.css']
})
export class MailUsComponent implements OnInit {

  responseData: any;
  mailusForm: FormGroup;
  submitted : boolean  = false;
  buttonFlag : boolean  = false;

  @ViewChild('mailusModel', { static: true }) mailusModel: TemplateRef<any>;

  constructor(private formBuilder: FormBuilder, private _mailUsService: MailUsService, private modalService: NgbModal) {}

  ngOnInit(): void {

      this.mailusForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          message: ['', Validators.required]
      });

  }

  get form() {
      return this.mailusForm.controls;
  }

  onSubmit(): void {

      this.submitted = true;

      // stop here if form is invalid
      if (this.mailusForm.invalid) {
          return;
      }

      this.buttonFlag = true;
      this._mailUsService.sendMessage(this.mailusForm).subscribe(response => {
          if (response) {
              this.modalService.open(this.mailusModel, {
                  size: 'lg',
                  centered: true,
                  backdrop : 'static',
                  keyboard : false
              });
              this.buttonFlag = false;
              this.submitted = false;
              this.mailusForm.reset();
          }
      });
  }

}