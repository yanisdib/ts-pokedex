import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Generation } from '../interfaces/Generation';
import { StoreState } from '../interfaces/StoreState';

import { fetchGenerationRequest } from '../services/redux/slices/generation';

import { useAppSelector } from './useAppSelector';


export const useGeneration = (generationId: number): StoreState<Generation> => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenerationRequest(generationId));
    }, [generationId]);

    return useAppSelector(state => state.generation);
}