import {Injectable} from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import {Observable, of} from 'rxjs';
import {catchError, delay, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ProcessHttpMsgService} from './process-http-msg.service';
import {baseUrl} from '../shared/baseurl';
import {Dish} from '../shared/dish';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpMsgService) {
  }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseUrl + 'promotions');
    // return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseUrl + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion>(baseUrl + 'promotions?featured=true')
      .pipe(map(promotions => promotions[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
   // return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  }

  // getPromotions(): Promise<Promotion[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(PROMOTIONS));
  //   });
  // }
  //
  // getPromotion(id: string): Promise<Promotion> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]), 2000);
  //   });
  // }
  //
  // getFeaturedPromotion(): Promise<Promotion> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
  //   });
  // }
}
