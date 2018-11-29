import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-mortgage-rate',
  templateUrl: './mortgage-rate.component.html',
  styleUrls: ['./mortgage-rate.component.scss']
})
export class MortgageRateComponent implements OnInit {

  mortgageRatesHeader = ['Loan Details', '≤60%', '≤80%', '≤100%','Last Updated'];
  mortgageRates: any ;
  //mortgageRates: any=[{"id":11,"description":"Upto 5 Years","tenure":5,"fixedInterestRatePeriod":2,"interestRate":5,"lastUpdate":"1992-11-30T18:30:00.000+0000"},{"id":12,"description":"Upto 10 Years","tenure":10,"fixedInterestRatePeriod":2,"interestRate":4,"lastUpdate":"1992-11-30T18:30:00.000+0000"},{"id":13,"description":"Upto 15 Years","tenure":15,"fixedInterestRatePeriod":2,"interestRate":3,"lastUpdate":"1992-11-01T18:30:00.000+0000"},{"id":14,"description":"Upto 20 Years","tenure":20,"fixedInterestRatePeriod":2,"interestRate":2,"lastUpdate":"1992-12-02T18:30:00.000+0000"},{"id":15,"description":"Upto 25 Years","tenure":25,"fixedInterestRatePeriod":2,"interestRate":2,"lastUpdate":"1992-10-01T18:30:00.000+0000"}]

 
  error = '';
  ratesAvailable:boolean=false;


  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.getRates().pipe(first())
    .subscribe(
      data => {
        this.mortgageRates = data;
        this.ratesAvailable=true;
      },
      error => {
        this.error = error;
      });


  }

}
