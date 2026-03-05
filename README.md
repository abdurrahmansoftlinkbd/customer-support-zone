# React Fundamentals – FAQ

---

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript code.

```jsx
const element = <h1>Hello, World!</h1>;
```

Under the hood, JSX is transpiled by Babel into regular `React.createElement()` calls:

```js
const element = React.createElement("h1", null, "Hello, World!");
```

### Why is JSX used?

- **Readability** – Keeps UI structure and logic co-located, making components easier to understand.
- **Power of JS** – You can embed any JavaScript expression inside `{}` curly braces.
- **Tooling support** – Editors provide syntax highlighting, auto-completion, and error detection.
- **Prevents injection attacks** – React DOM escapes values embedded in JSX before rendering.

---

## 2. What is the Difference Between State and Props?

| Feature        | Props                                      | State                                         |
| -------------- | ------------------------------------------ | --------------------------------------------- |
| **Definition** | Data passed **into** a component           | Data managed **inside** a component           |
| **Mutability** | Immutable (read-only inside the component) | Mutable (updated via `setState` / `useState`) |
| **Owner**      | Controlled by the **parent**               | Controlled by the **component itself**        |
| **Purpose**    | Configure a component from outside         | Track dynamic data that changes over time     |
| **Re-render**  | Re-renders when parent passes new props    | Re-renders when state is updated              |

```jsx
// Props example – parent passes data down
function Greeting({ name }) {
  // `name` is a prop
  return <h1>Hello, {name}!</h1>;
}

// State example – component owns its own data
function Counter() {
  const [count, setCount] = useState(0); // `count` is state
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

---

## 3. What is the `useState` Hook, and How Does It Work?

`useState` is a built-in React Hook that lets **functional components** hold and update local state.

### Syntax

```js
const [stateVariable, setterFunction] = useState(initialValue);
```

- **`stateVariable`** – the current state value.
- **`setterFunction`** – a function that updates the state and triggers a re-render.
- **`initialValue`** – the value state starts with (runs only on the first render).

### Example

```jsx
import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn((prev) => !prev)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
```

### How it works (step-by-step)

1. React stores the state value between renders.
2. When `setIsOn` is called, React schedules a re-render.
3. On the next render, `useState` returns the **updated** value.
4. React updates the DOM to reflect the new state.

> **Tip:** Always use the functional updater form (`prev => !prev`) when new state depends on the previous value to avoid stale closures.

---

## 4. How Can You Share State Between Components in React?

### Option 1 – Lift State Up (most common)

Move shared state to the **closest common ancestor** and pass it down via props.

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <Controls setCount={setCount} />
    </>
  );
}

function Display({ count }) {
  return <p>Count: {count}</p>;
}

function Controls({ setCount }) {
  return <button onClick={() => setCount((c) => c + 1)}>Increment</button>;
}
```

### Option 2 – React Context API (avoids prop drilling)

Use `createContext` + `useContext` to broadcast state to deeply nested components without threading props through every level.

```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### Option 3 – External State Management

For large-scale apps, libraries like **Redux**, **Zustand**, or **Jotai** provide a global store accessible by any component.

---

## 5. How is Event Handling Done in React?

React uses **synthetic events** — a cross-browser wrapper around the browser's native events — with a familiar, camelCase naming convention.

### Basic Syntax

```jsx
<button onClick={handleClick}>Click me</button>
```

> Note: In React, event names are camelCase (`onClick`, `onChange`, `onSubmit`) and you pass a **function reference**, not a string.

### Inline Handler

```jsx
<button onClick={() => console.log("clicked!")}>Click me</button>
```

### Named Handler

```jsx
function Form() {
  function handleSubmit(event) {
    event.preventDefault(); // prevent default browser behavior
    console.log("Form submitted");
  }

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Passing Arguments to Handlers

```jsx
function List() {
  function handleDelete(id) {
    console.log(`Delete item ${id}`);
  }

  return <button onClick={() => handleDelete(42)}>Delete</button>;
}
```

### Common React Events

| Event         | Trigger                 |
| ------------- | ----------------------- |
| `onClick`     | Mouse click             |
| `onChange`    | Input value change      |
| `onSubmit`    | Form submission         |
| `onKeyDown`   | Key pressed             |
| `onMouseOver` | Mouse enters an element |
| `onFocus`     | Element receives focus  |
| `onBlur`      | Element loses focus     |

---

_Happy coding! 🚀_
