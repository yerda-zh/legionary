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
    p {
        cursor: pointer;
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
    
    .username {
        color: var(--color-accent);
    }

    @media screen and (max-width: 576px) {
        display: none;
    }
`;

export const SmallScreenContainer = styled.div`
    display: none;
    color: var(--color-white);

    .username {
        color: var(--color-accent);
    }
    
    @media screen and (max-width: 576px) {
        display: flex;
    }
`;

export const SmallScreen = styled.div`
    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--color-main);
    transition: .5s ease;
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
export const SmallScreenLinks = styled.ul`
    list-style: none;

    li {
        font-family: var(--font-base);
        margin: 2rem;
        cursor: pointer;
        color: var(--color-white);
        font-size: 1.2rem;
        text-align: center;
        
        &:hover {
            color: var(--color-l-blue);
        }
    }
`;