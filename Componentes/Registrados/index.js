import React from "react";
import "./styles.css";

function Registrados({ arrayDeTodos }) {
  return (
    <div class="registrados">
      {arrayDeTodos.map((item) => {
        return (
          <div key={item.id}>
            - {item.value}
            <button class="green">Adicionado</button>
            <button class="red">Retirado</button>
          </div>
        );
      })}
    </div>
  );
}

export default Registrados;
