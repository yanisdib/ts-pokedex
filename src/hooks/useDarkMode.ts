import { useState } from 'react';


type ReturnedValue = readonly [
    boolean,
    () => void
];

/**
 * Hooks that enables/disables a dark mode theme
 * TODO: Manage saving user's choice with cookie creation and redux state
 */
export const useDarkMode = (
    initialValue?: boolean
): ReturnedValue => {
    const [isEnabled, setIsEnabled] = useState(initialValue ?? false);

    const handleToggleMode = () => {
        setIsEnabled(previousState => !previousState);
    };

    return [isEnabled, handleToggleMode];
} 