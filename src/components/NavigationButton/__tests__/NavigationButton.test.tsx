import { render } from '@testing-library/react';

import NavigationButton from '../NavigationButton';


describe('NavigationButton component', () => {
    test('should render without crashing', () => {
        const { container } = render(<NavigationButton />);

        expect(container).toMatchSnapshot();
    });
    
    // test('should render ChevronRight by default', () => {
    //     const { getByTestId } = render(<NavigationButton />);

    //     expect(getByTestId('test-right')).toBeInTheDocument();
    // });

    // test('should render ChevronRight if button is next', () => {
    //     const { getByTestId } = render(<NavigationButton isNext={true} />);

    //     expect(getByTestId('test-right')).toBeInTheDocument();
    // });

    // test('should render ChevronLeft if button is false', () => {
    //     const { getByTestId } = render(<NavigationButton isNext={false} />);

    //     expect(getByTestId('test-left')).toBeInTheDocument();
    // });
});