import { render } from '@testing-library/react';

import Card from '../Card';


describe('Card component', () => {
    test('should render without crashing', () => {
        const { container } = render(<Card />);

        expect(container).toMatchSnapshot();
    });

    test('should render children text', () => {
        const { getByText } = render(<Card>Hello there!</Card>);

        expect(getByText('Hello there!')).toBeInTheDocument();
    });

    test('should have yellow borders by default', () => {
        const { getByTestId } = render(<Card />);

        expect(getByTestId('card-test')).toHaveStyle('border: 2px solid #FFFF00');
    });

    test('should have red borders', () => {
        const { getByTestId } = render(<Card cardColor="red" />);

        expect(getByTestId('card-test')).toHaveStyle('border: 2px solid red');
    });
});