//  What is React JS?
// React JS is a JavaScript library developed by Facebook for building fast, interactive user interfaces.
// It is especially useful for single-page applications (SPAs) where dynamic content updates are frequent.

//  Why use React?
// - Enables reusable UI components
// - Efficient rendering using Virtual DOM
// - Strong community and ecosystem
// - Great for building scalable front-end applications

//  Features of React JS:

// 1. Component-Based Architecture
// Components are independent, reusable pieces of UI logic.
// Each component manages its own state and can be composed to build complex interfaces.

// 2. Virtual DOM
// React creates a virtual copy of the actual DOM in memory.
// When changes occur, React compares the new virtual DOM with the previous one (reconciliation)
// and updates only the necessary parts of the real DOM—boosting performance.

//  Difference Between DOM and Virtual DOM:
// - DOM: Actual structure of the webpage manipulated by JavaScript.
// - Virtual DOM: Lightweight in-memory representation used by React to optimize updates.

//  JSX Syntax
// JSX (JavaScript XML) allows writing HTML-like code inside JavaScript.
// It improves readability and makes component structure easier to visualize.

//  Unidirectional Data Flow
// Data flows from parent to child components only.
// This makes debugging and state tracking simpler and more predictable.

//  State Management
// React provides `useState` (for functional components) and `setState` (for class components)
// to manage dynamic data within components.

//  Lifecycle Methods
// React components go through phases: mounting, updating, and unmounting.
// Lifecycle methods (like componentDidMount, useEffect) allow you to run code at specific stages.

// Ecosystem and Community
// Rich ecosystem of tools (React Router, Redux, etc.) and strong community support
// make development faster and more reliable.

//  Example: Simple React Class Component
// class HelloWorld extends React.Component {
//     render() {
//         return <h1>Hello, World!</h1>; // JSX used here
//     }
// }

// 📁 Why use .js or .jsx files in React?
// - .js: Standard JavaScript file. JSX can still be used if Babel is configured.
// - .jsx: Preferred when writing React components with JSX syntax.
// Choice depends on project setup and developer preference.

// Example without JSX:
const heading = React.createElement(
  'h1',
  {
    className: 'heading',
    id: 'heading1',
    title: 'heading'
  },
  'Hello World from React JS'
);

const para = React.createElement(
  'p',
  {
    className: 'para',
    id: 'para1',
    title: 'para'
  },
  'Hello World from React JS'
);

const wrapper = React.createElement(
  'div',
  {

  },
  [heading, para]
);


const ele = document.getElementById('root');
const root = ReactDOM.createRoot(ele);
root.render(wrapper);

// What happens behind the scenes:

// 1. React.createElement:
//    Creates virtual DOM nodes for each element with attributes and content.

// 2. Virtual DOM:
//    Stores these nodes in memory as a tree structure.

// 3. Reconciliation:
//    Compares new virtual DOM with previous one to find minimal changes.

// 4. Real DOM Update:
//    Applies only the necessary updates to the actual DOM—efficient and fast.
