import { render } from '@testing-library/react';

import Tag from '../Tag';


describe('Tag component', () => {
    test('should render without crashing', () => {
        const { container } = render(<Tag />);

        expect(container).toMatchSnapshot();
    });

    test('should render with default background color', () => {
        const {getByTestId} = render(<Tag data-testid="tag-test" />);

        expect(getByTestId('tag-test')).toHaveStyle('background-color: #A8A8A8')
    });

    test('should render with background color passed as props', () => {
        const { getByTestId } = render(
            <Tag
                data-testid="tag-test"
                backgroundColor="#CE0101"
            />
        );

        expect(getByTestId('tag-test')).toHaveStyle('background-color: #CE0101');
    });
});