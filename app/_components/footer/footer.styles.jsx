import styled from "styled-components";

export const FooterContainer = styled.div`
    background: var(--color-main-dark);
    color: var(--color-base);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem;

    @media screen and (max-width: 600px) {
        gap: 0.3rem;
    }
`;

export const InfoDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    h5 {
        font-size: clamp(0.3rem, 2vw + 0.5rem, 1rem);
        text-align: center;
    }

    p{
        font-size: clamp(0.7rem, 2vw + 0.9rem, 0.9rem);
    }

    .logo {
        font-weight: bold;
        color: var(--color-accent-light);
    }

    .contact {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 0.3rem;

        span {
            color: var(--color-accent-light);
        }
    }

    @media screen and (max-width: 1055px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.3rem;

        h5 {
            text-align: end;
        }

        .contact {
            @media screen and (max-width: 1055px) {
                grid-column: -2;
            }
    }
    }

    @media screen and (max-width: 600px) {
        h5 {
            display: none;
        }
    }
`;

export const RightsDiv = styled.div`
    align-self: center;
    font-size: clamp(0.5rem, 2vw + 0.85rem, 0.85rem);
`;
