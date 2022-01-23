import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {IndicatorsListComponent} from './indicators-list/indicators-list.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule, CardModule, DropdownModule, TableModule} from 'primeng';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'indicators', component: IndicatorsListComponent},
  {path: '', redirectTo: '/indicators', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    IndicatorsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
