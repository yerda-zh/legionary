'use client'
import styled from "styled-components";

export const ProfileContainer = styled.div`
    color: var(--color-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    h2 {
        color: var(--color-accent);
        font-size: clamp(1.5rem, 2vw + 1.5rem, 2rem);
        margin-bottom: 2rem;
    }

    h4 {
        font-size: clamp(1rem, 2vw + 1.1rem, 1.4rem);
    }

    p {
        font-size: clamp(0.5rem, 2vw + 0.5rem, 1rem);
        margin: 1rem 0;
    }

    span {
        font-weight: bolder;
    }
`

export const ProfileDiv = styled.div`
    background: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40rem;
    height: 14rem;
    padding: 1rem;
    border-radius: 0.7rem;

    button {
        margin: 1rem 0.3rem;
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

export const Block = styled.div`
    width: 0.1rem;
    height: 100%;
    background: var(--color-base);

`;