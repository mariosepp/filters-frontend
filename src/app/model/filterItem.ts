import {CriteriaItem} from './criteriaItem';

export class FilterItem {
  constructor(
    public id: number,
    public name: String,
    public criteria: CriteriaItem[]
  ) {

  }
}
