import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterItem} from '../../../model/filterItem';

@Component({
  selector: 'app-filters-list',
  imports: [CommonModule],
  templateUrl: './filters-list.component.html',
  styleUrl: './filters-list.component.css'
})
export class FiltersListComponent {
  @Input() filters: FilterItem[] = [];
}
