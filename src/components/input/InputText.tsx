import styled from "styled-components";
import { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export function InputText({ label = "Label here", ...props }: InputTextProps) {
  return (
    <InputWrapper>
      <StyledInput type="text" placeholder={label} required={props.required} />
      {!props.required && <span>Opcional</span>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 4px;
  padding: 12px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.base.input};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.textXS};
  font-style: italic;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.product.yellowDark};
  }
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;
