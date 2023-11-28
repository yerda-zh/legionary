'use client'
import styled from "styled-components";

export const RegisterContainer = styled.div`
    color: var(--color-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    div {
        background: var(--color-secondary);
        width: 30rem;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.2rem 2rem;
        border-radius: 1rem;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
    }

    h2 {
        color: var(--color-accent);
        font-size: clamp(1rem, 2vw + 1.3rem, 2.3rem);
    }

    p{
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        margin-top: 1.5rem;
    }

    input {
        margin: 0.3rem 0;
        padding: 0.8rem 1rem;
        border-radius: 0.7rem;
        border: none;
        width: 100%;
        background: var(--color-main);
        color: var(--color-accent-light);
        transition: 0.2s ease-in-out;

        &:focus {
            background: rgba(255, 255, 255, 0.8);
            color: var(--color-main);
        }
        &:focus::placeholder {
            color: var(--color-secondary-light);
        }
    }

    button {
        margin-top: 1.5rem;
        background: var(--color-accent-light);
        color: var(--color-main);
        border: none;
        padding: 0.7rem 3rem;
        font-weight: 700;
        font-size: clamp(0.7rem, 2vw + 0.5rem, 1.1rem);
        border-radius: 0.7rem;
        transition: 0.3s ease;
        cursor: pointer;
    }
    button:hover {
        color: var(--color-base);
        background: var(--color-accent);
    }
    button:active {
        transform: scale(0.95);
        transition: 0.2s ease;
    }

    @media screen and (max-width: 484px) {
        div {
            background: transparent;
            padding: 1rem;
        }

        input {
            background: var(--color-main-dark);
        }
    }
`;

export const LoaderDiv = styled.div`
    padding: 0!important;
    margin-top: 1.5rem;
`;