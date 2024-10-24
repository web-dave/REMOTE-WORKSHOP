import { EscapePipe } from './escape.pipe';

describe('EscapePipe', () => {
  it('create an instance', () => {
    const pipe = new EscapePipe();
    expect(pipe).toBeTruthy();

    expect(
      pipe.transform('PHP &amp;amp; MySQL Web Development All-in-One Desk')
    ).toBe('PHP & MySQL Web Development All-in-One Desk');
  });
});
