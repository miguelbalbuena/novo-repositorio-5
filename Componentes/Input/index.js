import React from "react";
import "./styles.css";

function InputEntradaSaida({ setNewItem, addItemToList }) {
  return (
    <body class="body">
      <div class="input">
        <label class="label">Adicionar produtos</label>
        <br></br>
        <input
          onChange={(evento) => setNewItem(evento.target.value)}
          placeholder="Entrada de produtos"
          type="text"
        ></input>
        <button class="buttonvalue" onClick={addItemToList}>
          Adicionar
        </button>
      </div>
      <div class="input">
        <label class="label">Retirar produtos</label>
        <br></br>
        <input
          onChange={(evento) => setNewItem(evento.target.value)}
          placeholder="Saída de produtos"
          type="text"
        ></input>
        <button class="buttonvalue" onClick={addItemToList}>
          Retirar
        </button>
      </div>
      <div class="checklist">
        <h2 class="checklist1">Checklist</h2>
        <label class="sub">Encomendas de ingredientes já feitas:</label>
        <br></br>
        <textarea class="text"></textarea>
      </div>
    </body>
  );
}

export default InputEntradaSaida;
