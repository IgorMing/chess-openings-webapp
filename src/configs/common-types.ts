import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers';

export type Dispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type GetState = () => RootState;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void;
