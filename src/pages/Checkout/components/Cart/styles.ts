import styled from "styled-components";

export const CartContainer = styled.div`
    width: 28rem;

    & > p {
        color: ${props => props.theme.baseSubtitle};
        font-family: "Baloo 2", cursive;
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    & > div {
        background-color: ${props => props.theme.baseCard};
        padding: .5rem 2.5rem 2.5rem 2.5rem;
        display: flex;
        flex-direction: column;
        border-radius: 6px 44px;
    }
`

export const PricesDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
    margin-bottom: 2rem;

    div {
        display: flex;
        justify-content: space-between;

        p {
            color: ${props => props.theme.baseText};
        }

        p:first-child {
            font-size: .875rem;
        }
    }

    div:last-child {
        p {
            color: ${props => props.theme.baseSubtitle};
            font-size: 1.25rem;
            font-weight: 700;
        }
    }
`

export const ConfirmButton = styled.button`
    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.background};
    padding: .75rem .5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color .15s;

    &:hover {
        background-color: ${props => props.theme.yellowDark};
    }
`