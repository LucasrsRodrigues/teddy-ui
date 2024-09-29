import { colors } from "@teddy-ui/tokens";
import { getContrast } from "polished";


export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", color: getContrast(color, "#FFFF") < 3.5 ? "#000" : "#fff" }}>
          <strong>
            ${key}
          </strong>
          <span style={{ textTransform: "uppercase", fontWeight: "bold" }}>{color}</span>
        </div>
      </div>
    )
  })
}