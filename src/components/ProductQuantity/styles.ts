import styled from "styled-components";

export const ProductQuantityDiv = styled.div`
    background-color: ${props => props.theme.baseButton};
    display: flex;
    align-items: center;
    gap: .4rem;
    padding: .4rem;
    border-radius: 6px;

    svg {
        color: ${props => props.theme.purpleDark};
        cursor: pointer;

        &:hover {
            color: ${props => props.theme.purple};
        }
    }
`