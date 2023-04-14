import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem 0;

    nav {
        display: flex;
        justify-content: space-between;
    }
`

export const RightNavDiv = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;

    div {
        background-color: ${props => props.theme.purpleLight};
        color: ${props => props.theme.purpleDark};
        display: flex;
        align-items: center;
        gap: .25rem;
        padding: .5rem;
        border-radius: .375rem;
    }

    a {
        background-color: ${props => props.theme.yellowLight};
        color: ${props => props.theme.yellowDark};
        padding: .5rem;
        border-radius: .375rem;

        svg {
            vertical-align: middle;
        }
    }
`