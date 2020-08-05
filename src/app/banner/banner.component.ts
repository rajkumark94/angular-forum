import {
  Component,
  OnInit
} from '@angular/core';
import {
  BannerService
} from '../service/banner.service';
import {
  Banner
} from '../interface/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerDetails: Banner[];
  constructor(private _bannerService: BannerService) {}

  ngOnInit() {
      this._bannerService.getbannerdata()
          .subscribe(bannerData => this.bannerDetails = bannerData);
  }
}