export class Sort {
  private order = 1;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base'
  });

  constructor() { }

  public startSort(property, order): any {
    order === 'desc'
      ? this.order = -1
      : this.order = 1;

    return (a, b) => {
      return this.collator.compare(a[property], b[property]) * this.order;
    };
  }
}
