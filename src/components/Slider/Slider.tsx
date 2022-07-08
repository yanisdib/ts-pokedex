import { useEffect, useRef, useState } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';

import { Content, Navigation, StyledSlider, Wrapper } from './Slider.styled';


interface Props {
    children: React.ReactNode;
}


function Slider({ children }: Props): JSX.Element {
    const contentRef = useRef<any>(null);

    const [contentWidth, setContentWidth] = useState(0);
    const [isNextButtonDisplayed, setIsNextButtonDisplayed] = useState(true);
    const [isPreviousButtonDisplayed, setIsPreviousButtonDisplayed] = useState(false);
    const [translateValue, setTranslateValue] = useState(0);

    const handleNextClick = () => setTranslateValue(prevState => prevState + 500);
    const handlePreviousClick = () => setTranslateValue(prevState => prevState - 500);

    useEffect(() => {
        setContentWidth(contentRef.current?.offsetWidth);

        if (translateValue >= 0 && (translateValue + 200) < contentWidth) {
            setIsNextButtonDisplayed(true);
        } else {
            setIsNextButtonDisplayed(false);
            setTranslateValue(contentWidth);
        }

        if (translateValue > 0) {
            setIsPreviousButtonDisplayed(true);
        } else {
            setIsPreviousButtonDisplayed(false);
            setTranslateValue(0);
        }
    }, [contentRef, translateValue]);

    return (
        <StyledSlider>
            <Wrapper>
                <Content ref={contentRef} translateValue={translateValue}>
                    {children}
                    <Navigation>
                        {isPreviousButtonDisplayed && (
                            <NavigationButton
                                isNext={false}
                                onClick={handlePreviousClick}
                            />
                        )}

                        {isNextButtonDisplayed && (
                            <NavigationButton onClick={handleNextClick} />
                        )}
                    </Navigation>
                </Content>
            </Wrapper>
        </StyledSlider>
    );
}


export default Slider;