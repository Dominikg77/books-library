export class Book {
  bookTitel: string;
  autorName: string;
  link: string;

  constructor(obj?: any) {
    this.bookTitel = obj ? obj.bookName : '';
    this.autorName = obj ? obj.autorName : '';
    this.link = obj ? obj.link : '';
  }

  public toJSON() {
    return {
      bookTitel: this.bookTitel,
      autorName: this.autorName,
      link: this.link,
    };
  }
}
