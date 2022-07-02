import { render } from '@testing-library/react';

import Hero from '../Hero';


describe('Hero component', () => {
    test('should render without crashing', () => {
        const { container } = render(<Hero />);

        expect(container).toMatchSnapshot();
    });
});