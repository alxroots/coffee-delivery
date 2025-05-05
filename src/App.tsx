import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyles } from "./styles/global.ts";
import { IconButton } from "./components/button/IconButton.tsx";
import { Button } from "./components/button/Button.tsx";
import { Cart } from "./components/cart/Cart.tsx";
import { SelectPaymentType } from "./components/select/SelectPaymentType.tsx";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { InputText } from "./components/input/InputText.tsx";
import { InputNumber } from "./components/input/InputNumber.tsx";

function App() {
  const [count, setCount] = useState(0);

  const [selectedPaymentType, setSelectedPaymentType] = useState<string | null>(
    null,
  );
  const options = [
    { label: "Cartão de crédito", icon: CreditCard, type: "credit" },
    { label: "Cartão de débito", icon: Bank, type: "debit" },
    { label: "Dinheiro", icon: Money, type: "money" },
  ];

  function handlePaymentTypeSelect(type: string) {
    setSelectedPaymentType(type);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1> Meu icon button</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <IconButton />
        <Button label="Remover" variant="primary" hasIcon={false} />

        <Button label="Remover" variant="primary" hasIcon={true} />
        <Cart />
        <Cart count={1} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {options.map((option) => (
          <SelectPaymentType
            key={option.type}
            Icon={option.icon}
            label={option.label}
            isSelected={selectedPaymentType === option.type}
            onClick={() => handlePaymentTypeSelect(option.type)}
          />
        ))}
        <InputText />
        <InputText required={true} />
        <InputNumber />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
