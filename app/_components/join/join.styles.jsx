import styled from "styled-components";

export const JoinContainer = styled.div`
    background: var(--color-main);
    color: var(--color-base);
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
export const WhyContainer = styled.div`
    h2 {
        color: var(--color-accent);
        font-size: clamp(1rem, 2vw + 1rem, 2rem);
        margin-bottom: 2rem;
        text-align: center;
    }
`;

export const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 1064px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const FeatureDiv = styled.div`
    background: var(--color-secondary);
    padding: 2.5rem 1rem;
    border-radius: 1rem;
    transition: 0.25s ease-in-out;

    div {
        color: var(--color-accent-light);
        font-size: clamp(1rem, 2vw + 1.1rem, 1.4rem);
        border-bottom: 0.1rem solid var(--color-accent);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        line-height: 1.9rem;
        text-align: justify;
    }

    &:hover {
        transform: scale(1.03);
        background: var(--color-secondary-dark);
    }

`;
export const JoinDiv = styled.div`
    background: var(--color-accent-light);
    color: var(--color-main);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(0.985);
    }

    h2{
        font-size: clamp(1rem, 2vw + 1rem, 2rem);
        margin-bottom: 1rem;
    }

    p {
        color: var(--color-secondary);
        font-size: clamp(0.5rem, 2vw + 1rem, 1rem);
        margin-bottom: 1rem;
        text-align: center;
    }

    div {
        width: 18rem;
        height: 3rem;
        border-radius: 1rem;
        overflow: hidden;
        border: none;
        position: relative;
        z-index: 1;
        background: var(--color-main);
    }

    button {
        border: 1.5px solid var(--color-main);
        color: var(--color-base);
        font-weight: 700;
        font-size: clamp(0.7rem, 2vw + 0.5rem, 1.1rem);
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
        width: 100%;
        height: 0%;
        position: absolute;
        background: var(--color-accent-light);
        left: 0;
        bottom: 0;
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

    @media screen and (max-width: 575px) {
        div {
            width: 15rem;
            align-self: center;
        }
    }
`;