import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MortgageFormComponent } from './mortgage-form/mortgage-form.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MortgageRateComponent } from './mortgage-rate/mortgage-rate.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { AmountBreakupComponent } from './amount-breakup/amount-breakup.component';
registerLocaleData(localeNl);


@NgModule({
  declarations: [
    AppComponent,
    MortgageFormComponent,
    MortgageRateComponent,
    AmountBreakupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'nl' }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
