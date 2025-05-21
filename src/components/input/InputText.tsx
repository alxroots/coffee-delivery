import styled from "styled-components";
import { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullwidth?: boolean;
}
export function InputText({
  label = "Label here",
  fullwidth,
  ...rest
}: InputTextProps) {
  return (
    <InputWrapper $fullwidth={fullwidth}>
      <StyledInput type="text" placeholder={label} required={rest.required} />
      {!rest.required && <span>Opcional</span>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div<{ $fullwidth?: boolean }>`
  display: flex;
  gap: 4px;
  padding: 12px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.base.input};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.textXS};
  font-style: italic;
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "auto")};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.product.yellowDark};
  }
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border: none;
  background: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
