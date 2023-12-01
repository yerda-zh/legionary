'use client'
import styled, { keyframes } from "styled-components";

const ModalAnimation = keyframes`
    0% {
        width: 16rem;
        display: none;
    }
`;

export const ProfileContainer = styled.div`
    color: var(--color-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 1rem 0 1rem;

    h2 {
        color: var(--color-accent);
        font-size: clamp(1rem, 2vw + 1.4rem, 2.3rem);
        margin-bottom: 3rem;
    }

    h4 {
        font-size: clamp(0.8rem, 2vw + 1.1rem, 1.3rem);
    }

    p {
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        margin: 1rem 0;
    }

    span {
        font-weight: bolder;
    }
`

export const ProfileDiv = styled.div`
    background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 42rem;
    max-width: 100%;
    height: 15rem;
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

        &:hover {
            background: var(--color-main-dark);
        }

        &:active {
            transform: scale(0.95);
            transition: 0.2s ease;
        }
    }

    @media screen and (max-width: 525px) {
        flex-direction: column;
        height: auto;
        button {
            margin: 0.5rem 0.2rem;
        }
    }
`

export const Block = styled.div`
    width: 0.1rem;
    height: 100%;
    background: var(--color-base);
`;



export const Modal = styled.div`
    display: ${props => (props.$clicked === true ? 'block' : 'none')};
    background: var(--color-base);
    box-shadow: 0 0 1.5rem 0.6rem rgba(0, 0, 0, 0.8);
    border-radius: 1rem;
    text-align: center;
    position: absolute;
    top: 40dvh;
    width: 35rem;
    max-width: 90%;
    aspect-ratio: 4/1;
    animation: ${ModalAnimation} 0.4s ease-out forwards;

    h4 {
        font-size: clamp(0.8rem, 2vw + 1.1rem, 1.3rem);
        color: var(--color-main-dark);
        margin-top: 2rem;
    }

    button {
        margin: 1rem 0rem 1.5rem 0rem;
        background: var(--color-main);
        color: var(--color-base);
        border: none;
        padding: 0.5rem 1.7rem;
        font-weight: 700;
        font-size: clamp(0.7rem, 2vw + 0.5rem, 1.1rem);
        border-radius: 0.4rem;
        transition: 0.3s ease;
        cursor: pointer;

        &:hover {
            background: var(--color-secondary);
        }

        &:active {
            transform: scale(0.95);
            transition: 0.2s ease;
        }
    }

    .close {
        color: var(--color-main-dark);
        font-size: 1.8rem;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        transition: 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            color: var(--color-accent);
        }
    }

    p {
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        margin: 0 0 1rem 0;
        color: var(--color-secondary);
    }
`;

export const LoaderDiv = styled.div`
    padding: 0!important;
    margin-bottom: 1rem;
`;
