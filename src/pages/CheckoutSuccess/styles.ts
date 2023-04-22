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
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;

        img {
            width: 75%;
        }
    }
`

export const DeliveryInfosContainer = styled.div`
    padding: 2.5rem;
    border: 1px solid ${props => props.theme.yellow};
    border-radius: .375rem 2.5rem;
    display: grid;
    gap: 2rem;

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
`