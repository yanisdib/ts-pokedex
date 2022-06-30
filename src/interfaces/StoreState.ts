/**
 * Interface describing store's state properties 
 */
export interface StoreState<T> {
    body: T;
    error: Error | null;
    status: string;
}