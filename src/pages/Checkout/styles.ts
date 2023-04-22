import styled from "styled-components";

export const CheckoutContainer = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;

    @media (max-width: 1275px) {
        flex-direction: column;
        max-width: 50rem;
        margin: 0 auto;
    }
`