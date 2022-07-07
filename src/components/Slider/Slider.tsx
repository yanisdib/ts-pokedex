import { useState } from 'react';

import { Content, StyledSlider, Wrapper } from './Slider.styled';


interface Props {
    children: React.ReactNode;
}


function Slider({ children }: Props): JSX.Element {
    const [translateValue, setTranslateValue] = useState(0);

    return (
        <StyledSlider>
            <Wrapper>
                <Content translateValue={translateValue}>
                    {children}
                    {/** Add logic for Navigation buttons */}
                </Content>
            </Wrapper>
        </StyledSlider>
    );
}


export default Slider;