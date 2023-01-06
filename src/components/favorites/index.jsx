import { useReducer, useState } from 'react';
import './fav.scss';
export const startState = {
  name: 'Selected Favorites',
  favorites: [],
};

export const favoriteReducer = (state = startState, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'remove':
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

const Favorites = () => {
  const [state, dispatch] = useReducer(favoriteReducer, startState);
  const [fav, setFav] = useState('');
  const newFav = () => {
    let action = {
      type: 'add',
      payload: fav,
    };
    dispatch(action);
  };

  const RemoveFav = () => {
    let action = {
      type: 'remove',
      payload: fav,
    };
    dispatch(action);
  };

  return (
    <>
      <label>
        <span>Have favorites? ADD EM HERE FOR ONLY $999,999.99</span>
        <input
          data-testid='reducer'
          onChange={(e) => {
            setFav(e.target.value);
          }}
        />
        <button data-testid='reducer-fav' onClick={newFav}>
          ADD!
        </button>
        <button data-testid='reducer-bad' onClick={RemoveFav}>
          REMOVE!
        </button>
        <ul>
          {state.favorites.map((favorites, index) => (
            <li key={`favorites-${index}`}>{favorites}</li>
          ))}
        </ul>
      </label>
    </>
  );
};
export default Favorites;
