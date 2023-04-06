import { MorsePipe } from './morse.pipe';

describe('MorsePipe', () => {
  it('create an instance', () => {
    const pipe = new MorsePipe();
    expect(pipe).toBeTruthy();
  });
});
