import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { IBook } from '../shared/book.interface';
import { BookPreviewComponent } from './book-preview.component';

const book: IBook = {
  title: 'Design Patterns',
  subtitle: 'Elements of Reusable Object-Oriented Software',
  isbn: '978-0-20163-361-0',
  abstract:
    'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
  numPages: 395,
  author: 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
  publisher: {
    name: 'Addison-Wesley',
    url: 'http://www.addison-wesley.de/',
  },
  cover: 'http://localhost:4730/covers/978-0-20163-361-0.jpg',
};

describe('BookPreviewComponent', () => {
  let spectator: Spectator<BookPreviewComponent>;
  const createComponent = createComponentFactory(BookPreviewComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should have a title', () => {
    spectator.setInput('book', book);
    expect(spectator.query('.title')).toHaveText(book.title);
  });
});
