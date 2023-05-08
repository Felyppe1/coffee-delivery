import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: grid;
    gap: 3rem;

    & > div:first-child {
        h1 {
            color: ${props => props.theme.yellowDark};
            font-family: 'Baloo 2', cursive;
            font-size: 2rem;
            font-weight: 800;
        }

        p {
            color: ${props => props.theme.baseSubtitle};
            font-size: 1.25rem;
        }
    }

    & > div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        img {
            width: 45%;
            max-width: 492px;
        }
    }

    @media (max-width: 860px) {
        gap: 2rem;

        & > div:last-child {
            flex-direction: column-reverse;
            align-items: flex-start;

            img {
                width: 17.25rem;
            }
        }
    }

    @media (max-width: 443.5px) {
        & > div:first-child {
            h1 {
                line-height: 110%;
            }
        }
    }

    @media (max-width: 350px) {
        & > div:last-child {
            img {
                width: 100%;
            }
        }
    }
`

export const DeliveryInfosContainer = styled.div`
    padding: 2.5rem;
    border: 1px solid ${props => props.theme.yellow};
    border-radius: .375rem 2.5rem;
    display: grid;
    gap: 2rem;
    width: 32.875rem;
    max-width: 32.875rem;
    min-height: 16.875rem;

    & > div {
        display: flex;
        align-items: center;
        gap: .75rem;

        svg {
            
            color: ${props => props.theme.background};
            padding: .5rem;
            border-radius: 50%;
            flex-shrink: 0;
        }

        svg[id=map] {
            background-color: ${props => props.theme.purple};
        }

        svg[id=timer] {
            background-color: ${props => props.theme.yellow};
        }

        svg[id=money] {
            background-color: ${props => props.theme.yellowDark};
        }

        & > div {
            display: grid;
            color: ${props => props.theme.baseText};

            span {
                font-weight: 800;
            }
        }
    }

    @media (max-width: 860px) {
        width: 100%;
    }

    @media (max-width: 350px) {
        padding: 1.3rem;
    }
`