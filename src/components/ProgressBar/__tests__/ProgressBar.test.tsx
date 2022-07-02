import { render } from '@testing-library/react';

import ProgressBar from '../ProgressBar';


describe('ProgressBar component', () => {
    test('should render without crashing', () => {
        const { container } = render(<ProgressBar progressValue={0} />);

        expect(container).toMatchSnapshot();
    });

    test('should display a progression of 30%', () => {
        const { getByTestId, getByText } = render(
            <ProgressBar
                progressValue={30}
            />
        );

        expect(getByText('30%')).toBeInTheDocument();
    });
});