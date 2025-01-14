import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilterItem} from '../../model/filterItem';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private httpClient: HttpClient) {}

  async getFilters(): Promise<FilterItem[]> {
    const results = await fetch("/filters");
    return (await results.json()) ?? [];
  }

  postFilter(filter: FilterItem): Observable<FilterItem> {
    return this.httpClient.post("/filter", filter) as Observable<FilterItem>;
  }
}
