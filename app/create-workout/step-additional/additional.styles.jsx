'use client'
import styled from "styled-components"

export const AdditionalDiv = styled.div`
    color: var(--color-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem 1rem 1rem;

    h4 {
        font-size: clamp(1rem, 2vw + 1.1rem, 1.4rem);
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

    button {
        margin: 1rem 0;
        background: var(--color-secondary-light);
        color: var(--color-base);
        border: none;
        padding: 0.5rem 1.7rem;
        font-weight: 700;
        font-size: clamp(0.7rem, 2vw + 0.5rem, 1.1rem);
        border-radius: 0.4rem;
        transition: 0.3s ease;
        cursor: pointer;
    }
    button:hover {
        background: var(--color-main-dark);
    }
    button:active {
        transform: scale(0.95);
        transition: 0.2s ease;
    }
    
`