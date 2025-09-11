# Styling, States, Rendering, Routes, and Hooks

This project is part of the **ALX Front-End ReactJS** curriculum.  
It builds upon the previous project (`alx-react-app`) and introduces more advanced React concepts like **styling, state, hooks, routing, and the Context API**.

---

## 📌 Learning Objectives
By the end of this project, you will be able to:
- Apply **inline CSS styling** to React components.
- Create a **counter application** using `useState` hook.
- Refactor prop drilling to use the **Context API**.
- Build a **simple company website** with React Router.

---

## 🗂️ Tasks

### ✅ Task 0: Apply Inline CSS Styling
**Repo:** `alx-fe-reactjs`  
**Directory:** `alx-react-app-new`  

- Enhanced components with inline CSS styling:
  - `Header`
  - `UserProfile`
  - `MainContent`
  - `Footer`
- Example (`Header.jsx`):
  ```jsx
  <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
    <h1>My Favorite Cities</h1>
  </header>
✅ Task 1: Create a Simple Counter Application
Repo: alx-fe-reactjs
Directory: alx-react-app-new

Built a counter app using the useState hook.

Features:

Increment

Decrement

Reset

Example (Counter.jsx):

jsx
Copy code
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
✅ Task 2: Refactor Prop Drilling to Use Context API
Repo: alx-fe-reactjs
Directory: alx-react-app-props

Eliminated prop drilling by introducing the Context API.

Created UserContext.js and used useContext in UserDetails.jsx.

Data now flows via context instead of being passed through every component.

✅ Task 3: Build a Simple Company Website with React
Repo: alx-fe-reactjs
Directory: my-company

Built a 4-page company website using React Router:

Home

About

Services

Contact

Added a Navbar with links to all pages.

Applied inline CSS styling.

Created a Contact form using state.

🚀 How to Run the Projects
For each project (alx-react-app-new, alx-react-app-props, my-company):

Clone the repository:

bash
Copy code
git clone <your-repo-url>
cd alx-fe-reactjs/<project-folder>
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
👨‍💻 Author
Name: ANDREW MUNGAI

Cohort: ALX Front-End C6

Date: September 2025