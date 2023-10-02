import { useState } from "react";

export default function SearchHeader({ search }) {
  const [value, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // debugger;
    search(value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div
      style={{
        textAlign: "center",
        margin: "5px",
        borderRadius: "5px",
        border: "1px solid #cccce6",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        onSubmit={handleFormSubmit}
      >
        <label style={{ fontSize: "24px", fontWeight: "bold" }}>
          Ne Arıyorsunuz?
        </label>
        <input
          type="text"
          style={{ height: "20px" }}
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
