import { render } from '@testing-library/react';

import Slider from '../Slider';


describe('Slider component', () => {
    test('should render with a children props', () => {
        const { container, getByText } = render(<Slider>Hello world</Slider>);

        expect(container).toMatchSnapshot();
        expect(getByText('Hello world')).toBeInTheDocument();
    });
});