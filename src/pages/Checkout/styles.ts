import styled from "styled-components";

export const CheckoutContainer = styled.form`
    display: grid;
    grid-template-columns: 58% auto;
    gap: 2.5rem;

    @media (max-width: 910px) {
        grid-template-columns: 1fr;
        margin: 0 auto;
    }
`