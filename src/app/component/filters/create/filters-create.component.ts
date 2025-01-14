import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import {CriteriaType, CriteriaComparator} from '../../../model/criteriaItem';
import {FiltersService} from '../../../service/filters/filters.service';
import {FilterItem} from '../../../model/filterItem';

@Component({
  selector: 'app-filters-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './filters-create.component.html',
  styleUrl: './filters-create.component.css'
})
export class FiltersCreateComponent {
  @Output() onCreatedFilter = new EventEmitter<FilterItem>();
  formOpen: boolean = false;
  filterForm: FormGroup;
  criteriaOptions: CriteriaType[] = [CriteriaType.TITLE,CriteriaType.AMOUNT,CriteriaType.DATE]
  comparatorOptions: CriteriaComparator[] = [
    CriteriaComparator.MORE,
    CriteriaComparator.LESS,
    CriteriaComparator.EQUALS,
    CriteriaComparator.STARTS,
    CriteriaComparator.CONTAINS,
    CriteriaComparator.UNTIL,
    CriteriaComparator.FROM];

  // TODO: dynamically add comparators
  // comparatorOptions = {
  //   [CriteriaType.TITLE]: [CriteriaComparator.EQUALS, CriteriaComparator.CONTAINS, CriteriaComparator.STARTS],
  //   [CriteriaType.AMOUNT]: [CriteriaComparator.EQUALS, CriteriaComparator.LESS, CriteriaComparator.MORE],
  //   [CriteriaType.DATE]: [CriteriaComparator.EQUALS, CriteriaComparator.UNTIL, CriteriaComparator.FROM]
  // };

  constructor(private filtersService: FiltersService) {
    this.filterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      criteria: new FormArray([
        this.createField()
      ])
    });
  }

  createField(): FormGroup {
    return new FormGroup({
      criterion: new FormControl('', Validators.required),
      comparator: new FormControl('', Validators.required),
      condition: new FormControl('', Validators.required)
    })
  }

  getCriteriaFields(): FormArray {
    return this.filterForm.get('criteria') as FormArray;
  }

  addField(): void {
    this.getCriteriaFields().push(this.createField());
  }

  removeField(index: number): void {
    this.getCriteriaFields().removeAt(index);
  }

  onSubmit() {
    const filter: FilterItem = this.filterForm.getRawValue() as FilterItem;
    // TODO: add error handling
    this.filtersService.postFilter(filter)
      .subscribe(
        createdFilter => this.onCreatedFilter.emit(createdFilter)
      );
  }

  toggleFormOpen() {
    this.formOpen = !this.formOpen;
  }
}
