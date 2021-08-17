import { initialState, globalContextReducer } from '../GlobalContexReducer';

describe('Global context reducer', () => {
  it('should test SET_IS_DARK_MODE action', () => {
    const action = {
      type: 'SET_IS_DARK_MODE',
      payload: true,
    };

    const result = globalContextReducer(initialState, action);

    expect(result).toStrictEqual({ isDarkMode: true, searchTerm: '' });
  });

  it('should test SET_IS_DARK_MODE action', () => {
    const action = {
      type: 'SET_SEARCH_TERM',
      payload: 'test',
    };

    const result = globalContextReducer(initialState, action);

    expect(result).toStrictEqual({ isDarkMode: false, searchTerm: 'test' });
  });

  it('should by default return the initial state', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: '',
    };
    const result = globalContextReducer(initialState, action);

    expect(result).toStrictEqual(initialState);
  });
});
