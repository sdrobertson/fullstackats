import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import {ApplicantlistComponent} from '../applicantlist/applicantlist.component';
import {JoblistComponent} from '../joblist/joblist.component';
import {UserprofileComponent} from '../userprofile/userprofile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'applicants', component: ApplicantlistComponent },
  { path: 'jobs', component: JoblistComponent },
  { path: 'dishdetail/:id', component: DishdetailComponent },
  { path: 'contactus',  component: ContactComponent },
  { path: 'profile',  component: UserprofileComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
