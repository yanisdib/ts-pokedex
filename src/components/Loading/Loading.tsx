import { Spinner } from '../';

import {
    StyledLoading,
    Content,
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