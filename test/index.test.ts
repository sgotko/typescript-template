import { greetings } from '../src/index.ts';

describe('Simple test', () => {
  it('Hello world', () => {
    const greetingMessage = greetings('Bob');
    expect(greetingMessage).toBe('Hello, Bob!');
  });
});
