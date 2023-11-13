import styled from "styled-components";


export const WorkoutContainer = styled.div`
    color: var(--color-base);
    margin: 2rem 1rem;

    h2 {
        color: var(--color-accent);
        margin-bottom: 1.2rem;
        text-align: center;
        font-size: clamp(1.5rem, 2vw + 1.5rem, 2rem);
    }

    h3 {
        color: var(--color-accent);
        text-align: center;
        font-size: clamp(1.2rem, 2vw + 1.3rem, 1.5rem);
    }

    h4 {
        font-size: clamp(1rem, 2vw + 1.1rem, 1.2rem);
    }

    p {
        font-size: clamp(0.5rem, 2vw + 0.5rem, 1rem);
        line-height: 1.5rem;
        text-align: justify;
    }
`;

export const FirstDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BMICircle = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: var(--color-main-dark);
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);

    &::before {
        background: var(--color-accent);
        transition: 0.3s ease-in-out;
        content: "";
        position: absolute;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        clip-path: polygon(100% 0, 100% 0, 100% 50%, 50% 50%, 0% 0%);
    }

`

export const WorkoutRoutineDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
`;

export const DefaultContainer = styled.div`
    text-align: center;
    padding: 2rem 1rem 1rem 1rem;
    h2 {
        color: var(--color-base);
        font-size: clamp(1rem, 2vw + 1rem, 1.7rem);
    }
    p {
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