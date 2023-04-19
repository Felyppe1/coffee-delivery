import styled from "styled-components";

export const SingleProductCartDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: .5px solid ${props => props.theme.baseHover};

    & > div {
        display: flex;
        gap: 1.5rem;

        img {
            width: 4rem;
        }
    }

    & > p {
        color: ${props => props.theme.baseText};
        font-weight: 700;
    }
`

export const ProductButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > p {
        color: ${props => props.theme.baseSubtitle};
    }

    & > div {
        display: flex;
        justify-content: space-between;
        gap: .6rem;

        & > button {
            background-color: ${props => props.theme.baseButton};
            display: flex;
            align-items: center;
            gap: .3rem;
            padding: .4rem .5rem;
            border-radius: 6px;
            cursor: pointer;

            svg {
                color: ${props => props.theme.purple};
            }

            p {
                color: ${props => props.theme.baseText};
                font-size: .75rem;
                user-select: none;
            }
        }
    }
`

export const ProductQuantityDiv = styled.div`
    background-color: ${props => props.theme.baseButton};
    display: flex;
    align-items: center;
    gap: .4rem;
    padding: .4rem;
    border-radius: 6px;

    button {
        background-color: transparent;
        display: flex;
        align-items: center;

        svg {
            color: ${props => props.theme.purpleDark};
            cursor: pointer;

            &:hover {
                color: ${props => props.theme.purple};
            }
        }
    }

    p {
        user-select: none;
    }
`