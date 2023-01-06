import { startState, favoriteReducer } from './index';
describe('reducer works', () => {
  test('grabs the starting state and produces the starting state', () => {
    let state = favoriteReducer(startState, {});

    expect(state.name).toEqual('Selected Favorites')
    expect(state.favorites).toEqual([]);
  });
  test('adds new fav', () => {
    let state = favoriteReducer(startState, {});
    state = favoriteReducer(state, { type: 'add', payload: 'add test' });
    expect(state.favorites.includes('add test')).toBeTruthy()
  });
  test('removes a fav', () => {
    let state = favoriteReducer(startState, {});
    state = favoriteReducer(state, { type: 'remove', payload: 'add test' });
    expect(state.favorites.includes('add test')).toBeFalsy();
  });
});