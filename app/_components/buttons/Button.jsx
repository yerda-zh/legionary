'use client';
import styled from "styled-components";

export const ButtonAccent = styled.button`
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
    -webkit-tap-highlight-color: transparent;

    &:hover {
        color: var(--color-base);
        background: var(--color-accent);
    }

    &:active {
        transform: scale(0.95);
        transition: 0.2s ease;
    }
`;

export const ButtonAccentDark = styled(ButtonAccent)`
    margin: 1.2rem 0;
    background: none;
    border: 0.1rem solid var(--color-accent);
    color: var(--color-accent);
    padding: 0.5rem 1.7rem;
    border-radius: 0.4rem;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        background: var(--color-accent);
        color: var(--color-main);
    }
`;

export const ButtonGrey = styled(ButtonAccentDark)` 
    margin: 1rem 0.3rem;
    border: none;
    background: var(--color-secondary-light);
    color: var(--color-base);
    -webkit-tap-highlight-color: transparent;

    &:hover {
        background: var(--color-main-dark);
        color: var(--color-base);
    }
    
    @media screen and (max-width: 525px) {
        margin: 0.5rem 0.2rem;
    }
`;