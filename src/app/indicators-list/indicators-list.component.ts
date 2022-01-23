import {Component, OnInit} from '@angular/core';
import {IndicatorService} from '../service/indicator.service';
import {IndicatorData} from '../model/indicator-model';
import {CountryService} from '../service/country.service';
import {Country} from '../model/country-model';
import {map} from 'rxjs/operators';
import {SelectItem} from 'primeng';

@Component({
  selector: 'app-indicators-list',
  templateUrl: './indicators-list.component.html',
  styleUrls: ['./indicators-list.component.css']
})
export class IndicatorsListComponent implements OnInit {

  indicators: IndicatorData[] = [];
  countriesSelectedItems: SelectItem[];
  countriesSelected: string;

  constructor(
    private indicatorService: IndicatorService,
    private countryService: CountryService,
    ) {
  }

  ngOnInit(): void {

    this.loadCountries();

  }

  private loadCountries() {
    this.countryService.find().pipe(map(items => {
      return items.map(item => {
        return {label: item.name, value: item.code} as SelectItem;
      });
    })).subscribe(data => {
      this.countriesSelectedItems = data;
    });
  }

  findIndicators(): void {
    this.indicatorService.find(this.countriesSelected).subscribe(data => {
      this.indicators = data;
    });
  }

}
