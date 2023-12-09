'use client'
import styled from "styled-components"

export const AdditionalDiv = styled.div`
    color: var(--color-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem 1rem 1rem;

    h3 {
        font-size: clamp(1rem, 2vw + 1.2rem, 1.7rem);
        margin: 2rem 0 1rem 0;
        text-align: center;
    }

    input {
        padding: 0.8rem 1rem;
        border-radius: 0.7rem;
        border: none;
        width: 30rem;
        max-width: 100%;
        background: var(--color-secondary);
        color: var(--color-accent-light);
        transition: 0.2s ease-in-out;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &:focus {
            background: var(--color-main-dark);
            color: var(--color-base);
        }
        &:focus::placeholder {
            color: var(--color-secondary-light);
        }
    }
`;