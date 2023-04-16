import styled from "styled-components";

export const ProductContainer = styled.div`
    background-color: ${props => props.theme.baseCard};
    max-width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .7rem;
    padding: 0 1rem 1.5rem 1rem;
    border-radius: 0 40px;

    img {
        margin-top: -1rem;
    }

    & > div:first-of-type {
        display: flex;
        gap: .2rem;
        margin-bottom: .4rem;

        p {
            background-color: ${props => props.theme.yellowLight};
            color: ${props => props.theme.yellowDark};
            padding: .25rem .5rem;
            border-radius: 4px;
            font-size: .625rem;
            font-weight: 700;
            border-radius: 100px;
            text-transform: uppercase;
        }
    }

    & > p:first-of-type {
        color: ${props => props.theme.baseTitle};
        font-family: 'Baloo 2', cursive;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 100%;
    }

    & > p:nth-of-type(2) {
        color: ${props => props.theme.baseLabel};
        font-size: .875rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const AddToCartContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & > p {
        color: ${props => props.theme.baseText};
        font-size: .875rem;

        span {
            font-family: 'Baloo 2', cursive;
            font-size: 1.5rem;
            font-weight: 800;
        }
    }

    & > div {
        display: flex;
        gap: .6rem;

        /* & > div:first-child {
            background-color: ${props => props.theme.baseButton};
            display: flex;
            align-items: center;
            gap: .4rem;
            padding: .3rem;
            border-radius: 6px;

            svg {
                color: ${props => props.theme.purpleDark};
                cursor: pointer;

                &:hover {
                    color: ${props => props.theme.purple};
                }
            }
        } */

        button {
            background-color: ${props => props.theme.purpleDark};
            color: ${props => props.theme.background};
            border-radius: 6px;
            padding: .5rem;
            cursor: pointer;
            transition: background-color .1s;

            &:hover {
                background-color: ${props => props.theme.purple};
            }

            svg {
                vertical-align: middle;
            }
        }
    }
`