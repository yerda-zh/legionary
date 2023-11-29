import styled, { keyframes } from "styled-components";
import { HiArrowCircleLeft,  HiArrowCircleRight} from "react-icons/hi";

const BMIAnimation1 = keyframes`
    0% {
        clip-path: polygon(0 50%, 50% 50%, 0 50%, 0 0, 0 0);
    }
`;
const BMIAnimation2 = keyframes`
    0% {
        clip-path: polygon(0 50%, 50% 50%, 0 50%, 0 0, 0 0);
        opacity: 0;
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

    button {
        margin: 1.2rem 0;
        background: var(--color-accent);
        color: var(--color-main);
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
        color: var(--color-accent);
    }
    button:active {
        transform: scale(0.95);
        transition: 0.2s ease;
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
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const BMICircle = styled.div`
    background: var(--color-main-dark);
    width: 10rem;
    min-width: 8rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 52%, 0 50%);

    &::before {
        background: var(--color-accent);
        content: "";
        position: absolute;
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        clip-path: ${(props) => {
            if(props.$level <= 25) {
                return `polygon(0 50%, 50% 50%, 0 ${-2*props.$level+50}%, 0 0, 0 0);`
            } else if (props.$level>25 && props.$level<=75) {
                return `polygon(0 50%, 50% 50%, ${2*props.$level-50}% 0, ${2*props.$level-50}% 0, 0 0);`
            } else {
                return `polygon(0 50%, 50% 50%, 100% ${2*props.$level-150}%, 100% 0, 0 0);`
            }
        }};
        animation: ${(props) => {
            if(props.$level <= 25) {
                return BMIAnimation1;
            } else if (props.$level>25 && props.$level<=75) {
                return BMIAnimation2;
            } else {
                return ``
            }
        }} 1s ease-out forwards;
    }

    &::after {
        background: var(--color-main);
        content: "";
        position: absolute;
        clip-path: circle(32% at 50% 50%);
        width: 100%;
        aspect-ratio: 1/1;
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
        grid-template-columns: repeat(7, minmax(100%, 1fr));
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