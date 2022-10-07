export class Book {
  bookTitel: string;
  autorName: string;
  link: string;
  bookPages: number;
  amount: number;
  category: string;

  constructor(obj?: any) {
    this.bookTitel = obj ? obj.bookName : '';
    this.autorName = obj ? obj.autorName : '';
    this.link = obj ? obj.link : '';
    this.bookPages = obj ? obj.bookPages : '';
    this.amount = obj ? obj.amount : '';
    this.category = obj ? obj.category : '';
  }

  public toJSON() {
    return {
      bookTitel: this.bookTitel,
      autorName: this.autorName,
      link: this.link,
      bookPages: this.bookPages,
      amount: this.amount,
      category: this.category,
    };
  }
}
