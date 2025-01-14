import {Component} from '@angular/core';
import {FiltersCreateComponent} from './filters/create/filters-create.component';
import {FiltersListComponent} from './filters/list/filters-list.component';
import {FilterItem} from '../model/filterItem';
import {FiltersService} from '../service/filters/filters.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FiltersCreateComponent,
    FiltersListComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'filters-frontend';
  filters: FilterItem[] = [];
  errorMessage: string = '';

  constructor(private filtersService: FiltersService) {
    this.filtersService.getFilters().then((filterList: FilterItem[]) => {
      this.filters = filterList;
    }).catch(reason => this.errorMessage = 'Technical error.')
  }

  onCreatedFilterEvent(filter: FilterItem) {
    this.filters.push(filter);
  }

  onErrorEvent(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
