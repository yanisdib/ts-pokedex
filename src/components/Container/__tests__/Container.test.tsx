import { render } from '@testing-library/react';

import Container from '../Container';


describe('Container component', () => {
    test('should render without crashing', () => {
        const { container } = render(<Container />);

        expect(container).toMatchSnapshot();
    });
});