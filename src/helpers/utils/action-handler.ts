import { AnyAction } from '@reduxjs/toolkit';

import { FailedAction } from '../../interfaces/FailedAction';


/**
 * Handle failed actions dispatched to the Redux store
 */ 
export const isFailedAction = (action: AnyAction): action is FailedAction => {
    return action.type.endsWith('Failure');
};