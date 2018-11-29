import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-amount-breakup',
  templateUrl: './amount-breakup.component.html',
  styleUrls: ['./amount-breakup.component.scss']
})
export class AmountBreakupComponent implements OnInit {


  
  @Input('chartLabels')
  chartLabels: string[];
  @Input('chartData')
  chartData: number[];
  @Input('chartType')
  chartType: string;
  @Input('checkResponse')
  checkResponse: any;

  public chartColors:any[] = [ {
    backgroundColor:["#FF7360", "#B9E8E0"] }];


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {}


}
