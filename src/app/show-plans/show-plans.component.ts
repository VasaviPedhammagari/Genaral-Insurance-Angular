import { Component, OnInit } from '@angular/core';
import { Estimate } from '../appmodel/estimate';

@Component({
  selector: 'app-show-plans',
  templateUrl: './show-plans.component.html',
  styleUrls: ['./show-plans.component.css']
})
export class ShowPlansComponent implements OnInit {

  constructor() { }

  estimate: Estimate[];

  ngOnInit(): void {
    this.estimate = JSON.parse(sessionStorage.getItem('estimate') || '{}');
  }

}
