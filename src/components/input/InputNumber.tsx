import styled from "styled-components";
import { Minus, Plus } from "@phosphor-icons/react";

interface InputNumberProps {
  value: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
  isLocked?: boolean;
}

export function InputNumber({
  value,
  min = 0,
  max = Infinity,
  onChange,
  isLocked = false,
}: InputNumberProps) {
  const handleIncrement = () => {
    if (value < max) {
      onChange?.(value + 1);
    }
  };
  const handleDecrement = () => {
    if (value > min) {
      onChange?.(value - 1);
    }
  };

  return (
    <InputWrapper $islocked={isLocked}>
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

const InputWrapper = styled.div<{ $islocked: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.base.button};
  border-radius: 6px;
  opacity: ${({ $islocked }) => ($islocked ? 0.5 : 1)};
  cursor: ${({ $islocked }) => ($islocked ? "not-allowed" : "pointer")};
  pointer-events: ${({ $islocked }) => ($islocked ? "none" : "auto")};

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
  width: 3ch;
  &:focus {
    outline: none;
  }
`;
