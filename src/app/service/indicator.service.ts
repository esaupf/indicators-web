import {Injectable} from '@angular/core';
import {IndicatorData} from '../model/indicator-model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  private readonly apiIndicatorUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiIndicatorUrl = `${environment.apiUrl}/indicator`;
  }

  find(countryCode: string): Observable<IndicatorData[]> {
    return this.httpClient.get<IndicatorData[]>(`${this.apiIndicatorUrl}/${countryCode}`).pipe(take(1));
  }


}
