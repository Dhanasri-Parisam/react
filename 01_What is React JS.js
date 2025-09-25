// what is react js
// React JS is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components, manage the state of their applications, and efficiently update the user interface in response to data changes.
// React was developed by Facebook and is maintained by Facebook and a community of individual developers and companies. It is widely used in web development due to its performance, flexibility, and ease of use.
// React uses a virtual DOM (Document Object Model) to optimize rendering and improve performance. When the state of a component changes, React updates the virtual DOM first and then efficiently updates the actual DOM to reflect those changes.
// This approach minimizes the number of direct manipulations to the DOM, which can be slow and inefficient.

// features of react js
// 1. Component-Based Architecture: React allows developers to build encapsulated components that manage their own state and can be composed to create complex UIs.
// 2. Virtual DOM: React uses a virtual representation of the DOM to optimize updates and improve performance by minimizing direct manipulations to the actual DOM.

// Diffference between DOM and Virtual DOM
//  - DOM (Document Object Model) is a programming interface for web documents that represents the structure of a webpage as a tree of nodes. It allows developers to manipulate the content, structure, and style of a webpage using JavaScript.
//  - Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize rendering. Instead of directly manipulating the real DOM, React updates the virtual DOM first and then efficiently updates the real DOM based on the changes.


// 3. JSX Syntax: React uses JSX, a syntax extension that allows developers to write HTML-like code within JavaScript. This makes it easier to create and visualize the structure of components.
// 4. Unidirectional Data Flow: React follows a unidirectional data flow, meaning that data flows from parent components to child components. This makes it easier to understand and debug applications.
// 5. State Management: React provides a built-in way to manage the state of components using the useState hook (for functional components) or the setState method (for class components).
// 6. Lifecycle Methods: React provides lifecycle methods that allow developers to hook into different stages of a component's lifecycle, such as mounting, updating, and unmounting.
// 7. Ecosystem and Community: React has a large ecosystem of libraries, tools, and community support, making it easy to find resources and solutions for common problems.

// Example of a simple React component
// class HelloWorld extends React.Component {
//     render() {
//         return <h1>Hello, World!</h1>;
//     }
// }

// 01_What is React JS.js

const heading = React.createElement(
  'h1',
  {
    className: 'heading',
    id: 'heading1',
    title: 'heading'
  },
  'Hello World from React JS'
);

const ele = document.getElementById('root');
const root = ReactDOM.createRoot(ele);
root.render(heading);
