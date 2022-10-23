import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {Observable, of} from 'rxjs';
import {catchError, delay, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ProcessHttpMsgService} from './process-http-msg.service';
import {baseUrl} from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseUrl + 'leadership');
    // return of(LEADERS).pipe(delay(2000));
  }
  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseUrl + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    // return  of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
  }
  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseUrl + 'leadership?featured=true')
      .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }

  // getLeaders(): Promise<Leader[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(LEADERS), 2000);
  //   });
  // }
  // getLeader(id: string): Promise<Leader> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
  //   });
  // }
  // getFeaturedLeader(): Promise<Leader> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
  //   });
  // }
}
