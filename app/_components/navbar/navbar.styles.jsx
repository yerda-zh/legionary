import { styled } from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ul {
        display: flex;
        li {
            padding: 1rem;
            list-style: none;
            cursor: pointer;
        }
    }
`;