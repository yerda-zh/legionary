import styled from "styled-components";

export const AboutContainer = styled.div`
    background: linear-gradient(130deg, var(--color-secondary) 0%, var(--color-main) 100%);
    color: var(--color-base);
`;

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 3rem 1.5rem;

    @media screen and (max-width: 1064px){
        flex-direction: column;
        padding: 2rem 1rem;
        gap: 2rem;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 115rem;
    max-width: 100%;
    aspect-ratio: 16/9;
`;

export const Block1 = styled.div`
    position: absolute;
    background: var(--color-main);
    height: 40%;
    width: 90%;
    bottom: 5%;
    right: -7%;

    @media screen and (max-width: 1064px){
        right: 2%;
        width: 80%;
    }
`;

export const Block2 = styled.div`
    position: absolute;
    background: var(--color-main);
    height: 30%;
    width: 70%;
    top: -25%;
    left: -6%;

    @media screen and (max-width: 1064px){
        left: 2%;
    }
`;

export const ContentDiv = styled.div`
    z-index: 1;

    h2 {
        font-size: clamp(1rem, 2vw + 1.3rem, 2.3rem);
        margin-bottom: 1.5rem;
        color: var(--color-accent);
    }

    p {
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        text-align: justify;
        line-height: 1.9rem;
    }
`;