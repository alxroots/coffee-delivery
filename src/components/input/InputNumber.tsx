import styled from "styled-components";
import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";

interface InputNumberProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export function InputNumber({
  initialValue = 0,
  min = 0,
  max = Infinity,
  onChange,
}: InputNumberProps) {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };
  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <InputWrapper>
      <button type="button" onClick={handleDecrement}>
        <Minus />
      </button>

      <StyledInput
        type="text"
        value={value}
        pattern="[0-9]*"
        inputMode="numeric"
        readOnly
      />
      <button type="button" onClick={handleIncrement}>
        <Plus />
      </button>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.base.button};
  border-radius: 6px;
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  svg {
    color: ${({ theme }) => theme.colors.product.purple};
  }
`;
const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  text-align: center;
  user-select: none;

  &:focus {
    outline: none;
  }
`;
