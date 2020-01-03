import foist from './main.js';

describe('foist', () => {
  it('foists values upon an unsuspecting object', () => {
    const upon = {};
    const obj = { key: 'value', key2: 'value2' };

    foist(obj, upon);

    expect(upon.key).toEqual(obj.key);
    expect(upon.key2).toEqual(obj.key2);
  });

  it('is REALLY foist upon upon (i.e. you cannot overwrite it)', () => {
    const upon = {};
    const obj = { key: 'value' };

    foist(obj, upon);

    expect(() => { upon.key = 'something else'; }).toThrow();
  });

  xit('crashes the test suite (warning this works! ', () => {
    foist({ expect: '😂' });

    expect(expect).not.toBeInstanceOf(Function);
  });

  it('defaults to foisting globally!', () => {
    expect(typeof uniqueEnoughProp).toEqual('undefined');

    const saying = 'it is what it is';
    const obj = { uniqueEnoughProp: saying };
    foist(obj);

    expect(uniqueEnoughProp).toEqual(saying);
  });
});
