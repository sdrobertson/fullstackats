import { Injectable } from '@angular/core';
import {Applicant} from '../shared/applicant';
import {APPLICANTS} from '../shared/applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  constructor() { }
  getApplicants(): Applicant[] {
    return APPLICANTS;
  }
}
