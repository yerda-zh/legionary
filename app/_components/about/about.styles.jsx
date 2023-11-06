import styled from "styled-components";

export const AboutContainer = styled.div`
    background: var(--color-secondary);
    color: var(--color-base);
`;

export const MainAboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    padding: 1rem;
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 120rem;
    aspect-ratio: 16/9;
`;

export const Block = styled.div`
    position: absolute;
    background: var(--color-main);
    height: 8rem;
    width: 30rem;
    bottom: 1rem;
    right: -2rem;
`;

export const FirstDiv = styled.div`
    h2 {
        font-size: 1.8rem;
        margin-bottom: 1.8rem;
        color: var(--color-accent);
    }

    p {
        line-height: 1.8rem;
    }
`;