import React from "react";
import styled from "styled-components";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}
// Styled button with some custom color and css
const StyledButton = styled.button`
    padding: 10px 16px;
    font-size: 16px;
    cursor:pointer;
    background-color: #007BFF;
    color: #FFF;
    border-radius: 4px;
    transitionL background-color 0.3s ease;
    border: none;
    &:hover {
        background-color: #0056b3;
    }
`;

const Button: React.FC<ButtonProps> = ({onClick, children}) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button;
