import { Action } from '@reduxjs/toolkit';


/**
 * Interface describing properties 
 * returned by the payload of a failed action 
 */
export interface FailedAction extends Action {
    error: Error;
}