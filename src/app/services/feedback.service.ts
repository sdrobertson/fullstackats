import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProcessHttpMsgService} from './process-http-msg.service';
import {baseUrl} from '../shared/baseurl';
import {Feedback} from '../shared/feedback';
import {catchError, delay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Dish} from '../shared/dish';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpMsgService) { }
  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // console.log('Feedback', feedback);
    return this.http.post<Feedback>(baseUrl + 'feedback/' , JSON.stringify(feedback), httpOptions)
      // .pipe(delay(5000))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
