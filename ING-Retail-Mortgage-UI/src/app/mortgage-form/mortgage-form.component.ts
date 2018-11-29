import { Component, OnInit, Input } from '@angular/core';
import { Mortgage } from './mortgage';
import { DataService } from '../data.service';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.scss']
})
export class MortgageFormComponent implements OnInit {
  @Input()
  model = new Mortgage(50000, 3, 100000, 80000, 20);

  submitted: boolean = false;
  mortgageResponse: any;
  //mortgageResponse: any={"monthlyCost": 13, "principal": 1000, "interest": 109, "eligible": true}; 

  mortgageError: boolean = false;

  chartLabels: string[] = ['Prinicipal Amount', 'Interest Amount'];
  chartData: number[] = [];
  chartType: string = 'doughnut';


  constructor(private dataService: DataService) { }

  ngOnInit() {

  }


  validateForm() {

    if ((this.model.loanValue > (4 * this.model.income))
      || (this.model.loanValue > this.model.homeValue)
      || (this.model.tenure > 30)
      || (this.model.tenure < 1)
      || (this.model.fixedInterestRatePeriod > this.model.tenure)
      || (this.model.income < 1000)) {
        
      return true;
    }
    else {
      return false;
    }
  }



  onSubmit() {
    this.submitted = true;
    this.dataService.getEligibilty(this.model).pipe(first())
      .subscribe(
        data => {
          this.mortgageResponse = data;
          this.chartData = [this.mortgageResponse.principal, this.mortgageResponse.interest];
        },
        error => {
          this.mortgageError = true;
        });


  }






}
