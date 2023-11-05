'use client'
import { styled } from "styled-components";
import { HiMenuAlt3 } from 'react-icons/hi';
import {RxCross2} from 'react-icons/rx';

export const NavContainer = styled.nav`
    background: var(--color-main);
    color: var(--color-base);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 2;

    p {
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            opacity: 0.6;
        }
    }

    .username {
        color: var(--color-accent);
    }
`;
export const FirstDiv = styled.div`
    p {
        font-weight: bold;
    }
`;
export const SecondDiv = styled.div`
    display: flex;
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
    background: var(--color-main);
    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: .5s ease;


    ul {
        list-style: none;

        li {
            margin: 2rem;
            font-size: 1.2rem;
            text-align: center;
        }
    }
    
`;

export const MenuIcon = styled(HiMenuAlt3)`
    font-size: 1.6rem;
`;

export const CloseIcon = styled(RxCross2)`
    font-size: 1.6rem;

    position: absolute;
    top: 1rem;
    right: 1.2rem;
`;