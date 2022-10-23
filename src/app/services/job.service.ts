import { Injectable } from '@angular/core';
import {JOBS} from '../shared/jobs';
import {Job} from '../shared/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJobs(): Job[] {
    return JOBS;
  }
  getFeaturedJob(): Job {
    return JOBS[0];
  }
}
