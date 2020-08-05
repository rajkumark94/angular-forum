import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import {
  Projects
} from '../interface/projects';
import {
  ProjectService
} from '../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  page = 1;
  pageSize = 4;
  totalItems = 0;
  projectDetails: Projects[] = [];
  public modelProjectDetails: Projects;
  public projectBackgroundImg = "assets/images/projects/img_background.jpg";

  constructor(private _projectDetails: ProjectService, private modalService: NgbModal) {  }

  ngOnInit() {
      this._projectDetails.getProjectDetails()
          .subscribe(projectDetails => {
              this.totalItems = projectDetails.length;
              this.projectDetails = projectDetails;
          });
  }

  get projects(): Projects[] {
      return this.projectDetails
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  openProjectModel(projectModel, projects) {
      this.modelProjectDetails = projects;
      this.modalService.open(projectModel, {
          centered: true,
          size: 'lg',
          scrollable: true
      });
  }

}