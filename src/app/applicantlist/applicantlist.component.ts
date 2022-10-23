import {Component, Inject, OnInit} from '@angular/core';
import {Applicant} from '../shared/applicant';
import {ApplicantService} from '../services/applicant.service';

@Component({
  selector: 'app-applicantlist',
  templateUrl: './applicantlist.component.html',
  styleUrls: ['./applicantlist.component.scss']
})
export class ApplicantlistComponent implements OnInit {
  applicants: Applicant[];

  constructor(private applicantService: ApplicantService, @Inject('BaseUrl') private BaseUrl) { }

  ngOnInit() {
    this.applicants = this.applicantService.getApplicants();
    console.log(this.applicants);
  }

}
