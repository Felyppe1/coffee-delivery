import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem 0;

    nav {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        & > a {
            display: flex;
            align-items: center;
        }
    }

    

    @media (max-width: 460px) {
        nav {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
    }
`

export const RightNavDiv = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;

    & > div:first-child {
        background-color: ${props => props.theme.purpleLight};
        color: ${props => props.theme.purpleDark};
        display: flex;
        align-items: center;
        gap: .25rem;
        padding: .5rem;
        border-radius: .375rem;
    }

    a {
        & > div {
            background-color: ${props => props.theme.yellowLight};
            color: ${props => props.theme.yellowDark};
            padding: .5rem;
            border-radius: .375rem;
            position: relative;

            svg {
                vertical-align: middle;
            }

            p {
                background-color: ${props => props.theme.yellowDark};
                color: ${props => props.theme.background};
                position: absolute;
                top: 0px;
                right: 0px;
                transform: translate(50%, -50%);
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: .75rem;
                font-weight: 700;
            }
        }

        

        
    }
`