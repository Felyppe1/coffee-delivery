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

    @media (max-width: 332px) {
        padding: 2rem 1rem;
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
        display: grid;
        grid-template-columns: 30% 3% 43% 15%;
        gap: 1rem .75rem;

        input {
            background-color: ${props => props.theme.baseInput};
            color: ${props => props.theme.baseText};
            padding: .75rem;
            border-radius: 4px;
            font-size: .875rem;
        }

        input[title=cep] {
            grid-column: 1 / 3;
        }

        input[title=rua] {
            grid-row: 2;
            grid-column: 1 / -1;
        }

        input[title=numero] {
            grid-row: 3;
        }

        input[title=complemento] {
            grid-row: 3;
            grid-column: 2 / -1;
        }

        input[title=bairro] {
            grid-row: 4;
        }

        input[title=cidade] {
            grid-row: 4;
            grid-column: 2 / 4;
        }

        input[title=uf] {
            grid-row: 4;
            grid-column: 4;
        }
    }

    @media (max-width: 535px) {
        & > div:last-child {
            grid-template-columns: 100%;

            input[title=cep] {
                grid-column: 1;
            }

            input[title=rua] {
                grid-row: 2;
                grid-column: 1;
            }

            input[title=numero] {
                grid-row: 3;
            }

            input[title=complemento] {
                grid-row: 4;
                grid-column: 1;
            }

            input[title=bairro] {
                grid-row: 5;
            }

            input[title=cidade] {
                grid-row: 6;
                grid-column: 1;
            }

            input[title=uf] {
                grid-row: 7;
                grid-column: 1;
            }
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