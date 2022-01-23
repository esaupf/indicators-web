import {Country} from './country-model';

export interface IndicatorData {
  indicator: Indicator;
  country: Country;
  countryiso3code: string;
  date: string;
  value: any;
  unit: string;
  decimal: number;
  obsStatus: string;
}

export interface Indicator {
  id: string;
  value: string;
}
