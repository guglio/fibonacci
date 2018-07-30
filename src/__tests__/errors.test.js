import { shallow, mount } from 'enzyme';

import { error } from '../errors';

describe('error', () => {
  it('should be defined', () => {
   expect(error).toBeDefined();
  });
  it('error.NUM_NOT_IN_RANGE = string', () => {
    expect(typeof error.NUM_NOT_IN_RANGE).toBe('string');
  });
  it('error keys are strings', () => {
    for (let i in error) {
      if (error.hasOwnProperty(i)) {
        expect(typeof error[i]).toBe('string');
      }
    }


  });
});
