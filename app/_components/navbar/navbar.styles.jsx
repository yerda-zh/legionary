'use client'
import { styled } from "styled-components";

export const NavContainer = styled.nav`
    background: var(--color-main);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    color: var(--color-base);
`;
export const FirstDiv = styled.div`
    p {
        font-weight: bold;
        cursor: pointer;
    }
`;
export const SecondDiv = styled.div`
    display: flex;
    p {
        margin-left: 2rem;
        cursor: pointer;
    }
    .username {
        color: var(--color-accent);
    }
`;