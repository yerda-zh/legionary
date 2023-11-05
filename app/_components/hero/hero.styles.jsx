'use client'
import styled from "styled-components";

export const HeroContainer = styled.div`
    color: var(--color-base);
    height: 85vh;
    position: relative;
    display: flex;
`;

export const Block = styled.div`
  z-index: -1;
  background: #000;
  position: absolute;
  object-fit: contain;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 60% 0, 30% 100%, 0 100%);
`;

export const ContentDiv = styled.div`
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        font-size: 4em;
        background: linear-gradient(90deg, #F3A26D 0%, #B45C23 100%);
        margin-bottom: 0.3rem;
        font-weight: 700;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        font-size: 1.2em;
        margin-bottom: 4rem;
        font-weight: 400;
    }

    h3 {
        font-size: 1.2em;
        margin-bottom: 1rem;
    }

    div {
        width: 19rem;
        height: 3rem;
        border-radius: 1rem;
        overflow: hidden;
        border: none;
        position: relative;
        z-index: 1;
    }

    button {
        border: 1.2px solid var(--color-base);
        color: var(--color-base);
        font-weight: 700;
        font-size: 1.1em;
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        background-color: transparent;
	    transition: 0.25s ease-in-out;
        cursor: pointer;
    }
    span {
        z-index: 1;
    }

    button::before {
        content: "";
        width: 0%;
        height: 100%;
        position: absolute;
        background: var(--color-accent);
        left: 0;
        top: 0;
        z-index: -1;
        transition: 0.25s ease-in-out;
    }
    button:hover {
        color: var(--color-main);
        border-color: var(--color-main);
    }
    button:hover::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
    }
`