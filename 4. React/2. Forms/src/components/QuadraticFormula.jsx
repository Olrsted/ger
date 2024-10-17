import './QuadraticFormula.css';
import { useState } from 'react';

function QuadraticFormula() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [roots, setRoots] = useState("Press Calulate");

  function quadraticFormula(e) {
    e.preventDefault();
    const discriminat = b * b - 4 * a * c;

    if (discriminat > 0) {
      setRoots(`x1 = ${(-b + Math.sqrt(discriminat)) / (2 * a)}, x2 = ${(-b - Math.sqrt(discriminat)) / (2 * a)}`);
    } else if (discriminat == 0) {
      setRoots(`x1 = x2 = ${(-b + Math.sqrt(discriminat)) / (2 * a)}`);
    } else {
      setRoots("No Real Roots!");
    }
  }

  return (
    <form onSubmit={(e) => quadraticFormula(e)}>
      <h1>Quadratic Formula</h1>
      <label>a Value:</label>
      <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />
      <label>b Value:</label>
      <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required />
      <label>c Value:</label>
      <input type="number" value={c} onChange={(event) => { setC(event.target.value) }} required />
      <label>Roots (Result):</label>
      <input type="text" value={roots} readOnly />
      <input type="submit" value="Calculate" />
    </form>
  )
}

export default QuadraticFormula;