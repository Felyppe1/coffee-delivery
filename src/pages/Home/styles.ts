import styled from "styled-components";

export const Section1 = styled.section`
    display: flex;
    gap: 3rem;
    justify-content: space-between;
    padding: 6rem 0;

    @media screen and (max-width: 1230px) {
        img {
            width: 23rem;
        }
    }

    @media screen and (max-width: 1099px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 1.5rem;
        padding: 2rem 0px 6rem 0;

        img {
            width: initial;
        }
    }

    @media screen and (max-width: 600px) {
        img {
            width: 98%;
        }
    }

    @media (max-width: 400px) {
        padding: 0 0 4rem 0;
    }
`

export const Section1Container1 = styled.div`
    max-width: 36.75rem;
    margin-bottom: 4rem;

    h1 {
        color: ${props => props.theme.baseTitle};
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-weight: 800;
        line-height: 130%;
        margin-bottom: 1rem;
    }

    p {
        color: ${props => props.theme.baseSubtitle};
        font-size: 1.25rem;
        line-height: 100%;
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 2.5rem;
            line-height: 110%;
        }
    }
`

export const Section1Container2 = styled.div`
    gap: 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    & > div {
        display: flex;
        align-items: center;
        gap: .75rem;

        & > svg {
            background-color: ${props => props.theme.baseText};
            color: ${props => props.theme.background};
            padding: .5rem;
            border-radius: 50%;
            flex-shrink: 0;
        }

        svg[id=shoppingCart] {
            background-color: ${props => props.theme.yellowDark};
        }

        svg[id=package] {
            background-color: ${props => props.theme.baseText};
        }

        svg[id=timer] {
            background-color: ${props => props.theme.yellow};
        }

        svg[id=coffee] {
            background-color: ${props => props.theme.purple};
        }

        & > p {
            color: ${props => props.theme.baseText}
        }
    }

    @media (max-width: 510px) {
        grid-template-columns: 1fr;
    }
`

export const Section2 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.375rem;

    h2 {
        color: ${props => props.theme.baseTitle};
        font-family: "Baloo 2", cursive;
        font-size: 2rem;
        font-weight: 800;
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
        gap: 2.5rem 2rem;
    }
`