import {Component, Inject, OnInit} from '@angular/core';
import {LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {
  leaderErrMess: string;
  constructor(private leaderService: LeaderService, @Inject('BaseUrl') private BaseUrl) { }
  leaders: Leader[];
  ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe((leaders) => this.leaders = leaders,
          errmess => this.leaderErrMess = <any>errmess);
  }

}

