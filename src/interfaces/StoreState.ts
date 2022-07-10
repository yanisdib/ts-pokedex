/**
 * Interface describing store's state properties 
 */
export interface StoreState<T> {
    body: T | object;
    error: Error | null;
    status: string;
}