import styled from "styled-components";

export const FooterContainer = styled.div`
    background: var(--color-main-dark);
    color: var(--color-base);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
`;

export const InfoDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    h5 {
        font-size: clamp(0.3rem, 2vw + 0.7rem, 1rem);
        text-align: center;
    }

    p{
        font-size: clamp(0.7rem, 2vw + 0.9rem, 0.9rem);
    }

    .logo {
        font-weight: bold;
    }

    .contact {
        display: flex;
        justify-self: end;
        align-items: center;
        gap: 0.3rem;
        cursor: pointer;
        width: fit-content;
        transition: 0.15s ease;

        &:hover {
            color: var(--color-accent-light);
        }
    }

    @media screen and (max-width: 1055px) {
        grid-template-columns: 1fr 2fr;
        gap: 0.5rem;

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
        display: flex;
        justify-content: space-between;
        h5 {
            display: none;
        }
    }
`;

export const RightsDiv = styled.div`
    align-self: center;
    font-size: clamp(0.5rem, 2vw + 0.85rem, 0.85rem);
`;
