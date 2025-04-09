import "../App.css";
import { CreditCard } from "react-kawaii";
import { useState } from "react";

function SuperBank() {
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState<string>("");
  const cardMood = balance >= 1000 ? "excited" : balance >= 0 ? "happy" : "sad";
  <CreditCard
    size={200}
    color="green" // Immer grün (oder wähle eine andere feste Farbe)
    mood={cardMood} // Dynamisch: excited/happy/sad
  />;

  const handleDeposit = () => {
    if (!amount) return; // Falls Input leer ist
    setBalance(balance + Number(amount));
    setAmount(""); // Input zurücksetzen
  };

  const handleWithdraw = () => {
    if (!amount) return;
    setBalance(balance - Number(amount));
    setAmount("");
  };
  return (
    <div>
      <CreditCard mood={cardMood}></CreditCard>
      <p>Kontostand: {balance} €</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="gib einen Betrag ein"
      />
      <button onClick={handleDeposit}>Einzahlen</button>
      <button onClick={handleWithdraw}>Auszahlen</button>
    </div>
  );
}

export default SuperBank;
