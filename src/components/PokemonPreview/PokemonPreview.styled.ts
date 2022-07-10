import styled from 'styled-components';


export const PokemonIdentity = styled.div`
    display: flex;
    column-gap: calc(var(--ui-gutter-x) - 10px);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: calc(var(--ui-gutter-x) - 5px) calc(var(--ui-gutter-y) * 2.5);

    h5 {
        font-family: var(--info-font);
        font-weight: 600;
        font-size: 1em;
    }
`;


interface PokemonIllustrationProps {
    backgroundColor: string;
}


export const PokemonIllustation = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    width: 50%;
    background-image: ${({
        backgroundColor
    }: PokemonIllustrationProps) => `radial-gradient(
        ${backgroundColor} 10%,
        transparent 10%
    )`};
    background-position: 0 0, 50px 50px;
    background-size: 5px 5px;
    border-radius: 50%;
    text-align: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export const PokemonDataGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 50px;
    column-gap: var(--ui-gutter-x);
    row-gap: var(--ui-gutter-y);
    justify-content: center;
    align-items: center;
`;