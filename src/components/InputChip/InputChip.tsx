import { useState, useRef, KeyboardEvent, ChangeEvent } from "react";
import './InputChip.css'
const InputChip = () => {
  const [chips, setChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addChip(inputValue);
    }
  };

  const addChip = (value: string) => {
    let trimmedValue = value.trim();
    if (
      trimmedValue != "" &&
      !chips.some(
        (chip: string) => chip.toLowerCase() === trimmedValue.toLowerCase()
      )
    ) {
      setChips((prev) => [...prev, trimmedValue]);
      setInputValue("");
    }
  };

  const removeChip = (i: number) => {
    setChips((prev) => prev.filter((_,index) => i !== index));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h1>Chips Input</h1>
      <input
        ref={inputRef}
        type="text"
        className="chip-input"
        value={inputValue}
        aria-label="Add tag"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={(e:ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="chips" role="list" aria-label="Tag list">
        {chips.map((chip, id) => (
          <div className="chip" key={id} role="listitem" tabIndex={0}>
            <span>{chip}</span>
            <button
              aria-label={`Remove ${chip}`}
              className="chip-button"
              onClick={() => removeChip(id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputChip;
