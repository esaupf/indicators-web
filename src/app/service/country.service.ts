import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {take} from 'rxjs/operators';
import {Country} from '../model/country-model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly apiIndicatorUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiIndicatorUrl = `${environment.apiUrl}/country`;
  }

  find(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.apiIndicatorUrl).pipe(take(1));
  }


}
