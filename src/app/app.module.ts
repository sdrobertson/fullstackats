import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatGridListModule} from '@angular/material';
import {MatFormFieldModule, MatInputModule, MatCheckboxModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import { AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule} from '@angular/common/http';

import { ProcessHttpMsgService} from './services/process-http-msg.service';
import { DishService } from './services/dish.service';
import {LeaderService} from './services/leader.service';
import {PromotionService} from './services/promotion.service';


import { AppComponent } from './app.component';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


import { baseUrl} from './shared/baseurl';
import { HighlightDirective } from './directives/highlight.directive';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import {JoblistComponent} from './joblist/joblist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    ApplicantlistComponent,
    JoblistComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatDatepickerModule

  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    ProcessHttpMsgService,
    { provide: 'BaseUrl', useValue: baseUrl }

  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
