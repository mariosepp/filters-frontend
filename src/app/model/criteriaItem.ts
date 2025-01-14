export class CriteriaItem {
  constructor(
    public id: number,
    public criterion: CriteriaType,
    public comparator: CriteriaComparator,
    public condition: String
  ) {
  }
}

export enum CriteriaType {
  AMOUNT = "AMOUNT",
  TITLE = "TITLE",
  DATE = "DATE"
}

export enum CriteriaComparator {
  MORE = "MORE",
  LESS = "LESS",
  EQUALS = "EQUALS",
  STARTS = "STARTS",
  CONTAINS = "CONTAINS",
  UNTIL = "UNTIL",
  FROM = "FROM"
}
