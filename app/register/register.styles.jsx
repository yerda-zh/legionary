'use client'
import styled, {keyframes} from "styled-components";
import { IoMailOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

const Animation = keyframes`
    0% {
        width: 10rem;
    }
`;

export const RegisterContainer = styled.div`
    color: var(--color-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    div {
        background: var(--color-secondary);
        width: 30rem;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.2rem 2rem;
        border-radius: 1rem;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            animation: ${Animation} 0.4s ease-out forwards;
        }
    }

    h2 {
        color: var(--color-accent);
        font-size: clamp(1rem, 2vw + 1.3rem, 2.3rem);
    }

    p{
        font-size: clamp(0.5rem, 2vw + 1rem, 1.1rem);
        margin-top: 1.5rem;
    }

    .inputDiv {
        width: 100%;
        padding: 0;
        position: relative;
        margin-top: 0.5rem;
    }

    input {
        padding: 0.8rem 2rem 0.8rem 1.2rem;
        border-radius: 0.7rem;
        border: none;
        width: 100%;
        background: var(--color-main);
        color: var(--color-accent-light);
        transition: 0.2s ease-in-out;

        &:focus {
            background: var(--color-main-dark);
            color: var(--color-base);
        }
       &::-ms-reveal {
            filter: invert(100%);
        }
    }

    @media screen and (max-width: 484px) {
        div {
            background: transparent;
            padding: 1rem;
        }

        input {
            background: var(--color-main-dark);
        }
    }
`;

export const LoaderDiv = styled.div`
    padding: 0!important;
    margin-top: 1.5rem;
`;

export const EmailIcon = styled(IoMailOutline)`
    position: absolute;
    top: 30%;
    right: 3%;
    font-size: 1.15rem;
    color: var(--color-accent-light);
`;

export const PasswordIcon = styled(IoLockClosedOutline)`
    position: absolute;
    top: 30%;
    right: 3%;
    font-size: 1.15rem;
    color: var(--color-accent-light);
`;

export const NameIcon = styled(IoPersonSharp )`
    position: absolute;
    top: 30%;
    right: 3%;
    font-size: 1.05rem;
    color: var(--color-accent-light);
`;