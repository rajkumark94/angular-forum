import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  NavigationComponent
} from './navigation/navigation.component';
import {
  TechnologiesComponent
} from './technologies/technologies.component';
import {
  ProjectsComponent
} from './projects/projects.component';
import {
  CertificationsComponent
} from './certifications/certifications.component';
import {
  MailUsComponent
} from './mailus/mailus.component';
import {
  HomeComponent
} from './home/home.component';

const routes: Routes = [{
      path: '',
      component: HomeComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'technologies',
      component: TechnologiesComponent
  },
  {
      path: 'projects',
      component: ProjectsComponent
  },
  {
      path: 'certifications',
      component: CertificationsComponent
  },
  {
      path: 'mailus',
      component: MailUsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, NavigationComponent, TechnologiesComponent, ProjectsComponent, CertificationsComponent, MailUsComponent]