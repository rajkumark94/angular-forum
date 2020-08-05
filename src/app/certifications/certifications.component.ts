import {
  Component,
  OnInit
} from '@angular/core';
import {
  CertificationService
} from '../service/certification.service';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  Certification
} from '../interface/certification';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  page = 1;
  pageSize = 4;
  totalItems = 0;
  certificationDetails: Certification[] = [];
  public modelCertificationDetails: Certification;
  public ceritificationBackgroundImg = "assets/images/certification/img_background.jpg";

  constructor(private _certificationDetails: CertificationService, private modalService: NgbModal) {}

  ngOnInit() {
      this._certificationDetails.getCertificationdatails()
          .subscribe(certificationDetails => {
              this.totalItems = certificationDetails.length;
              this.certificationDetails = certificationDetails;
          });
  }

  get certifications(): Certification[] {
      return this.certificationDetails
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  openCertificationModel(certificationModel, certification) {
      this.modelCertificationDetails = certification;
      this.modalService.open(certificationModel, {
          centered: true,
          size: 'lg'
      });
  }

}