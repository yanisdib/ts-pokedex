import { Spinner } from '..';

import {
    Content,
    StyledLoading,
    Wrapper
} from './Loading.styled';


function Loading(): JSX.Element {
    return (
        <StyledLoading>
            <Wrapper>
                <Content>
                    <Spinner />
                </Content>
            </Wrapper>
        </StyledLoading>
    );
}


export default Loading;