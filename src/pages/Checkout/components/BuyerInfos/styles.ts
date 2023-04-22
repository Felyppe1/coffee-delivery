import styled from "styled-components";

export const BuyerInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    & > p {
        color: ${props => props.theme.baseSubtitle};
        font-family: "Baloo 2", cursive;
        font-size: 1.125rem;
        font-weight: 700;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: .75rem;

        & > div {
            background-color: ${props => props.theme.baseCard};
            border-radius: 6px;
        }
    }

    @media (max-width: 1099px) {
        width: 100%
    }
`

const BaseFirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;

    & > div:first-child {
        display: flex;
        gap: .5rem;

        svg {
            color: ${props => props.theme.purple}
        }

        div {
            p:first-child {
                color: ${props => props.theme.baseSubtitle};
                margin-bottom: .3rem;
            }

            p:last-child {
                color: ${props => props.theme.baseText};
                font-size: .875rem;
            }
        }
    }
`

export const FillInInfosContainer = styled(BaseFirstDiv)`
    & > div:first-child {
        svg {
            color: ${props => props.theme.yellow};
            flex-shrink: 0;
        }
    }

    & > div:last-child { //form {}
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & > div {
            display: flex;
            gap: .75rem;
        }

        input {
            background-color: ${props => props.theme.baseInput};
            color: ${props => props.theme.baseText};
            padding: .75rem;
            border-radius: 4px;
            font-size: .875rem;
        }

        input[title=cep] {
            width: 12.5rem;
        }

        input[title=complemento] {
            width: 75%;
        }

        input[title=cidade] {
            width: 65%;
        }

        input[title=uf] {
            width: 3.75rem;
        }

        button {
            display: none;
        }
    }
`

export const PaymentMethodContainer = styled(BaseFirstDiv)`
    & > div:first-child {
        svg {
            flex-shrink: 0;
        }
    }

    & > div:last-child {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr; */
        grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
        gap: .75rem;

        & > button {
            background-color: ${props => props.theme.baseButton};
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border-radius: 6px;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.theme.baseHover};
            }

            svg {
                color: ${props => props.theme.purple};
                flex-shrink: 0;
            }

            p {
                color: ${props => props.theme.baseText};
                font-size: .75rem;
            }
        }
    }
`