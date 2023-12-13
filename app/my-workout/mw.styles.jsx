'use client'
import styled, { keyframes } from "styled-components";
import { HiArrowCircleLeft,  HiArrowCircleRight} from "react-icons/hi";

const BMIAnimation = keyframes`
    0% {
        transform : rotate(-45deg);
    }
    50% {
        transform: rotate(135deg);
    }
`;

const MessageAnimation = keyframes`
    0% {
        display: block;
    }
    100% {
        display: none;
    }
`;

export const WorkoutContainer = styled.div`
    color: var(--color-base);
    margin: 2rem 1.5rem;

    h2 {
        color: var(--color-accent);
        margin-bottom: 1.2rem;
        text-align: center;
        font-size: clamp(1rem, 2vw + 1.4rem, 2.3rem);
    }

    h3 {
        color: var(--color-accent);
        text-align: center;
        font-size: clamp(1rem, 2vw + 1.2rem, 1.7rem);
        margin-bottom: 1rem;
    }

    p {
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        line-height: 1.6rem;
        text-align: justify;
    }

    .message {
        margin-top: 0.5rem;
        font-weight: bold;
        color: var(--color-accent);
        animation: ${MessageAnimation} 2s ease-out forwards;
    }
`;


export const FirstDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    margin: 2.5rem 0;

    .bmi {
        text-align: start;
    }

    .category {
        font-weight: bolder;
    }

    @media screen and (max-width: 850px) {
        display: flex;
        flex-direction: column;
    }
`;

export const EquipmentDiv = styled.div`
    width: 32rem;
    min-width: 21rem;
    background: var(--color-secondary);
    padding: 1.3rem 1rem;
    border-radius: 0.7rem;
    transition: 0.2s ease-in-out;

    h3 {
        margin-bottom: 1rem;
    }

    ul {
        list-style-position: inside;

        li {
            color: var(--color-base);
            font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
            line-height: 1.4rem;
        }
    }

    &:hover {
        background: var(--color-main-dark);
    }

    @media screen and (max-width: 850px) {
        min-width: auto;
        max-width: 100%;
    }
`;
export const LevelIndicator = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const BMICircle = styled.div`
    font-family: var(--font-main);
    font-weight: bold;
    font-size: clamp(0.5rem, 2vw + 1rem, 1.5rem);
    min-width: 13rem;
    aspect-ratio: 2/1;
    color: #fff;
    position: relative;
    overflow: hidden;
    color: var(--color-accent);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-sizing : border-box;

    &::after {
        content: '';
        width: 100%;
        aspect-ratio: 1/1;
        border: 1.9rem solid;
        border-color : var(--color-main-dark) var(--color-main-dark) var(--color-accent) var(--color-accent);
        position: absolute;
        border-radius: 50%;
        left: 0;
        top: 0;
        box-sizing : border-box;
        transform: rotate( calc( 1deg * ( -45 + ${(props) => (props.$level*2.5)} * 1.8 ) ) );
        animation : ${BMIAnimation} 1.3s ease-in-out;
    }

    @media screen and (max-width: 600px) {
        min-width: 10rem;
    }
`;

export const WorkoutRoutineDiv = styled.div`
    background: linear-gradient(90deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
    display: grid;
    grid-template-columns: repeat(7, minmax(11rem, 1fr));
    margin-bottom: 2rem;
    gap: 0.5rem;
    padding: 0.3rem;
    border-radius: 0.5rem;
    overflow-x: hidden;
    scroll-behavior: smooth;

    .oneDay {
        padding: 0.5rem;
        border-radius: 0.3rem;
        transition: 0.2s ease;

        h4 {
            font-size: clamp(0.8rem, 2vw + 1.1rem, 1.3rem);
            text-align: center;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 0.1rem solid var(--color-secondary-light);
        }

        p {
            text-align: justify;
            line-height: 1.2rem;
            margin-bottom: 1.4rem;
        }

        &:hover {
            background: var(--color-main-dark);
        }
    }

    .exercise {
        text-align: center;
        margin-bottom: 0.3rem;
    }

    @media screen and (max-width: 450px) {
        grid-template-columns: repeat(7, minmax(85%, 1fr));
    }

    @media screen and (max-width: 1320px) {
        padding: 0.3rem 2rem;
    }
`;

export const RoutineContainer = styled.div`
    position: relative;
    overflow-x: hidden;
`

export const LeftButton = styled(HiArrowCircleLeft)`
    display: none;
    position: absolute;
    cursor: pointer;
    top: 45%;
    left: 0.2rem;
    font-size: 2rem;
    color: var(--color-accent);
    background-color: rgba(0,0,0,0.7);
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;

    @media screen and (max-width: 1320px) {
        display: block;
    }
`;

export const RightButton = styled(HiArrowCircleRight)`
    display: none;
    position: absolute;
    cursor: pointer;
    top: 45%;
    right: 0.2rem;
    font-size: 2rem;
    color: var(--color-accent);
    background-color: rgba(0,0,0,0.7);
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;

    @media screen and (max-width: 1320px) {
        display: block;
    }
`;

export const DefaultContainer = styled.div`
    text-align: center;
    padding: 7rem 1rem 1rem 1rem;
    h2 {
        color: var(--color-base);
        font-size: clamp(1rem, 2vw + 1.3rem, 2.3rem);
    }
    p {
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        margin-top: 1.5rem;
        color: rgba(255,255,255,0.8);
    }
    span {
        color: var(--color-accent-light);
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            color: var(--color-accent);
        }
    }
`;

export const LoaderDiv = styled.div`
    padding: 0!important;
    margin: 1rem 0;
`;

export const FetchingContainer = styled.div`
    width: 100%;
    height: 90dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2.5rem 1rem 1rem 1rem;

    h2 {
        color: var(--color-base);
        font-size: clamp(1rem, 2vw + 1.3rem, 2.3rem);
    }

    p {
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        margin-top: 1.5rem;
        color: rgba(255,255,255,0.8);
    }

    div {
        position: absolute;
        top: 45%;
    }
`