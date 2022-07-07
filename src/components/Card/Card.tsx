import { Content, StyledCard, Wrapper } from './Card.styled';


interface Props {
    cardColor?: string;
    children?: React.ReactNode;
}


function Card({ cardColor, children }: Props): JSX.Element {
    return (
        <StyledCard cardColor={cardColor} data-testid="card-test">
            <Wrapper>
                <Content>
                    {children}
                </Content>
            </Wrapper>
        </StyledCard>
    );
}


export default Card;