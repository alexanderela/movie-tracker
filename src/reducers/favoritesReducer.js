export const defaultState = []

export const favoritesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_FAVORITE':
      return state.map(favorite => {
        return favorite.id === action.id ? {...favorite, isFavorite: !favorite.isFavorite} : favorite
      });
    default: 
      return state;
  }
}