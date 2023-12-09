'use client'
import styled, { keyframes } from "styled-components";

export const NavContainer = styled.nav`
    background: var(--color-main-dark);
    color: var(--color-base);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 5;

    p {
        cursor: pointer;
        transition: 0.2s ease;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -0.3rem;
            width: 100%;
            height: 0.11rem;
            border-radius: 0.2rem;
            background: var(--color-base);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.4s;
        }

        &:hover::after {
            transform: scaleX(1);
        }
    }

    .username {
        &::after {
            background: var(--color-accent);
        }
        
        color: var(--color-accent);
    }

    @media screen and (max-width: 576px) {
        padding: 0.3rem 1.2rem;
    }
`;
export const FirstDiv = styled.div`
    h4 {
        cursor: pointer;
    }
    p {
        font-weight: bold;
    }
`;
export const SecondDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 576px) {
        display: none;
    }
`;

export const SmallScreenContainer = styled.div`
    display: none;
    color: var(--color-white);
    
    @media screen and (max-width: 576px) {
        display: flex;
    }
`;

export const SmallScreen = styled.div`
    background: var(--color-main-dark);
    z-index: -1;
    position: fixed;
    display: ${(props) => (props.$toggle === true ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100dvh;
    transition: .5s ease;


    ul {
        list-style: none;

        li {
            margin: 2rem;
            font-size: 1.2rem;
            text-align: center;

            &:active {
                transform: scale(1.05);
            }
        }
    }
    
`;