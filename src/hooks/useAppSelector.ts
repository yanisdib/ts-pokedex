import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../services/redux/store';


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;