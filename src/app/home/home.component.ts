import {Component, Inject, OnInit} from '@angular/core';

import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {expand, flyInOut} from '../animations/app.animation';
import {Job} from '../shared/job';
import {JobService} from '../services/job.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  constructor(private jobService: JobService, private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService, @Inject('BaseUrl') private BaseUrl) { }
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promotionErrMess: string;
  leaderErrMess: string;
  featuredJob: Job;
  ngOnInit() {
    this.featuredJob = this.jobService.getFeaturedJob();
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
      errmess => this.dishErrMess = <any>errmess);
    this.promotionService.getPromotion('0')
      .subscribe((promotion) => this.promotion = promotion,
        errmess => this.promotionErrMess = <any>errmess);
    this.leaderService.getFeaturedLeader()
      .subscribe((leader) => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess);
  }

}
