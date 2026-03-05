# React Fundamentals – FAQ

---

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript code.

### Why is JSX used?

- Keeps UI structure and logic co-located, making components easier to understand.
- Can embed any JavaScript expression inside `{}` curly braces.
- Editors provide syntax highlighting, auto-completion, and error detection.
- React DOM escapes values embedded in JSX before rendering.

---

## 2. What is the Difference Between State and Props?

| Feature        | Props                                      | State                                         |
| -------------- | ------------------------------------------ | --------------------------------------------- |
| **Definition** | Data passed **into** a component           | Data managed **inside** a component           |
| **Mutability** | Immutable (read-only inside the component) | Mutable (updated via `setState` / `useState`) |
| **Owner**      | Controlled by the **parent**               | Controlled by the **component itself**        |
| **Purpose**    | Configure a component from outside         | Track dynamic data that changes over time     |
| **Re-render**  | Re-renders when parent passes new props    | Re-renders when state is updated              |

---

## 3. What is the `useState` Hook, and How Does It Work?

`useState` is a built-in React Hook that lets **functional components** hold and update local state.

### How it works

1. React stores the state value between renders.
2. When `setIsOn` is called, React schedules a re-render.
3. On the next render, `useState` returns the **updated** value.
4. React updates the DOM to reflect the new state.

---

## 4. How Can You Share State Between Components in React?

### Option 1 – Lift State Up

### Option 2 – React Context API

### Option 3 – External State Management

## 5. How is Event Handling Done in React?

React uses **synthetic events** a cross-browser wrapper around the browser's native events with a familiar, camelCase naming convention.
