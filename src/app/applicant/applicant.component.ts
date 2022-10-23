import { Component, OnInit } from '@angular/core';
import {Applicant} from '../shared/applicant';
import {ApplicantService} from '../services/applicant.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {

  constructor(private applicantService: ApplicantService) { }
  applicants: Applicant[];

  ngOnInit() {
    this.applicants = this.applicantService.getApplicants();
  }

}
