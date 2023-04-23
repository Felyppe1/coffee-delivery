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

    @media (max-width: 1420px) {
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 0 1rem 0;
    }

    @media (max-width: 910px) {
        flex-direction: row;
        gap: 0;
        padding: 2rem 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 0 1rem 0;
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

            &:hover {
                background-color: ${props => props.theme.baseHover};
            }

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

    @media (max-width: 1160px) {
        gap: .5rem;

        & > div {
            flex-direction: column;
            gap: .3rem;

            & > button {
                justify-content: center;
            }
        }
    }

    @media (max-width: 910px) {
        gap: 0;

        & > div {
            flex-direction: row;
            gap: .6rem;

            & > button {
                justify-content: center;
            }
        }
    }

    @media (max-width: 430px) {
        gap: .5rem;

        & > div {
            flex-direction: column;
            gap: .3rem;

            & > button {
                justify-content: center;
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

    @media (max-width: 1160px) {
        justify-content: space-evenly;
    }

    @media (max-width: 910px) {
        justify-content: flex-start;
    }

    @media (max-width: 540px) {
        justify-content: space-evenly;
    }
`