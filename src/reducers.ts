import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import game from './pages/Game/duck';

const rootReducer = combineReducers({
  game
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
