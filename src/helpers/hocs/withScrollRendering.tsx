import { useEffect, useRef, useState } from 'react';


const withScrollRendering = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    function WithScrollRenderingComponent({ ...props }) {
        const componentRef = useRef<any>();

        const [componentPositionY, setComponentPositionY] = useState(0);
        const [isComponentDisplayed, setIsComponentDisplayed] = useState(false);

        const listenToScroll = () => {
            let threshold = componentPositionY - 500;

            const scrollPosition = document.body.scrollTop
                || document.documentElement.scrollTop;

            if (scrollPosition > threshold) {
                setIsComponentDisplayed(true);
            } else {
                setIsComponentDisplayed(false);
            }
        };

        useEffect(() => {
            setComponentPositionY(componentRef.current.offsetHeight);

            window.addEventListener('scroll', listenToScroll);

            return () => window.removeEventListener('scroll', listenToScroll);
        }, [componentRef]);

        return isComponentDisplayed && <WrappedComponent ref={componentRef} {...(props as P)} />;
    }

    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

    WithScrollRenderingComponent.displayName = `withScrollRendering(${wrappedComponentName})`;

    return WithScrollRenderingComponent;
}


export default withScrollRendering;