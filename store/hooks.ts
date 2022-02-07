import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from './index';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export type TState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//  Use 'custom created' Hooks ( useAppDispatch, useAppSelector )
//  instated traditional Hooks ( useDispatch   , useSelector ) imported from 'react-redux',
//  to avoid using the TYPEs


// https://www.youtube.com/watch?v=upcZZAN7Gt8&list=PLVgOtoUBG2mdLpj6qT5DXfg5_pGPTDrJZ&t=19s

// https://codesandbox.io/s/react-redux-typescript-oof6n?file=/src/hooks.ts:0-343