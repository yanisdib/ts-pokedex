import { Loading } from '../../components';


interface Props {
    error: Error | null;
    forwardedRef?: React.RefObject<HTMLElement>;
    status: string;
}


const withStatus = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    function WithStatusComponent({
        error,
        status,
        forwardedRef,
        ...props
    }: Props): JSX.Element {
        if (status === 'rejected') {
            return <div>{error?.message}</div>;
        }

        if (status === 'idle' || status === 'pending') {
            return <Loading />;
        }

        return <WrappedComponent ref={forwardedRef} {...(props as P)} />;
    }

    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

    WithStatusComponent.displayName = `withStatus(${wrappedComponentName})`;

    return WithStatusComponent;
}


export default withStatus;