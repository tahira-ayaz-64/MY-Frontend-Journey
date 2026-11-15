# JavaScript Day 03 — Conditions and Decision Making

## Lesson 01: Why Programs Need Conditions

### Introduction

Conditions are an essential part of programming. They allow programs to make decisions and execute different instructions based on specific situations.

Without conditions, a program would simply execute instructions in sequence without considering different scenarios.

### Real-World Example

Consider a simple weather situation:

- If it is raining, take an umbrella.
- If it is not raining, there is no need to take an umbrella.

Similarly, JavaScript uses conditional statements to make decisions based on whether a condition evaluates to `true` or `false`.

### JavaScript Example

```javascript
let weather = "rainy";

if (weather === "rainy") {
  console.log("Take an umbrella");
}
```

**Output:**

```text
Take an umbrella
```

### Code Explanation

- `let weather = "rainy";` — Declares a variable and assigns a string value.
- `if` — Defines a conditional statement.
- `weather === "rainy"` — Checks whether the weather variable strictly equals `"rainy"`.
- `{ }` — Defines the block of code executed when the condition is true.
- `console.log()` — Displays the output in the console.

### Important Concepts

| Concept          | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `if`             | Executes a block of code when a condition is true.             |
| `true`           | Represents a condition that is satisfied.                      |
| `false`          | Represents a condition that is not satisfied.                  |
| Condition        | An expression evaluated as true or false.                      |
| Code Block `{ }` | Contains the instructions executed when the condition is true. |

### Key Takeaways

- Conditions allow programs to make decisions.
- Conditional statements help handle different situations.
- JavaScript evaluates conditions as true or false.
- The `if` statement executes its code block only when its condition is true.

### Conclusion

Conditional statements make JavaScript programs more interactive and logical by allowing them to respond differently to different inputs and situations.
