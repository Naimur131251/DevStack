# Dev Stack

Dev Stack is a responsive web application that helps developers explore and select technologies for building their ideal tech stack.

---

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Icons
- React Toastify
- Loading UI

---

## Features

- 🔍 Explore different technologies by category.
- ➕ Select technologies to build your own personalized tech stack.
- 📱 Fully responsive design for mobile, tablet, and desktop devices.


---


## Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX lets us write HTML like code inside JS. It makes React code easier to write and understand.

### 2. What is the difference between props and state?
Props are used to pass data from parent to child.
State are used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` is used to manage changing data in a component. I used it to manage the selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs code after the component renders. I need it to load the JSON data when needed.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps react identify each item and update the list correctly.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something based on a condition.
I used it to show a message when the selected stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. A child can send data back using a function passed through props.
