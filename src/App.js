import "./styles.css";
import { useState } from "react";
// const INITIAL_STEP = 0;
// const INITIAL_COUNT = 0;

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [step, setStep] = useState(INITIAL_STEP);
//   const [count, setCount] = useState(INITIAL_COUNT);
//   const prevCountRef = useRef(INITIAL_COUNT);
//   const prevStepRef = useRef(INITIAL_STEP);

//   useEffect(() => {
//     prevStepRef.current = step;
//   }, [step]);

//   useEffect(() => {
//     prevCountRef.current = count;
//   }, [count]);

//   function minusStep() {
//     setStep((s) => s.step - 1);
//   }
//   function addStep() {
//     setStep((s) => s.step + 1);
//   }

//   function addCount() {
//     setCount((c) => c.count + step);
//   }

//   function minusCount() {
//     setCount((c) => c.count - step);
//   }

//   return (
//     <div>
//       <Step s={step} miStep={minusStep} adStep={addStep} />
//       <Count c={count} adCount={addCount} miCount={minusCount} />
//       <GetDay c={count} />
//     </div>
//   );
// }

// function Step({ step, minusStep, addStep }) {
//   return (
//     <div style={{ display: "flex", gap: "30px" }}>
//       <button onClick={minusStep}>-</button>
//       <p> Step : {step}</p>
//       <button onClick={addStep}> +</button>
//     </div>
//   );
// }

// function Count({ count, addCount, minusCount }) {
//   return (
//     <div style={{ display: "flex", gap: "30px" }}>
//       <button onClick={minusCount}>-</button>
//       <p>Day : {count}</p>
//       <button onClick={addCount}>+</button>
//     </div>
//   );
// }

// function GetDay({ count }) {
//   const d = new Date();
//   const weekday = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];
//   const day = weekday[d.getDay()];
//   const date = d.getDate();
//   const monthArr = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec"
//   ];
//   const month = monthArr[d.getMonth()];
//   const year = d.getFullYear();
//   return (
//     <p>
//       {count > 0 ? `${count} days from` : ""}today is {day} {month} {date}{" "}
//       {year}
//     </p>
//   );
// }

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const day = weekday[d.getDay()];
  const date = d.getDate();
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const month = monthArr[d.getMonth()];
  const year = d.getFullYear();
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <button onClick={() => setStep((s) => s + count)}>+</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((s) => s - count)}>-</button>
        <p>
          {step > 0 ? `${step} days from` : ""} today is {day} {month} {date}{" "}
          {year}
        </p>
      </div>
    </div>
  );
}
