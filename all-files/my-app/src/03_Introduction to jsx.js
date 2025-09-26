/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React JSX Introduction</title>
    <!-- Load React and ReactDOM from CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <!-- Babel is required for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <h2>React JSX Introduction Examples</h2>

    <!-- Root div where React will render content -->
    <div id="root"></div>

    <!-- =============== Example 1: Pure HTML =============== -->
    <!-- Normally, you can directly write HTML like this: -->
    <!--
    <ul>
        <li>HTML</li>
        <li>JS</li>
    </ul>
    -->

    <!-- =============== Example 2: Vanilla JS =============== -->
    <script>
        // Create elements using pure JavaScript
        const ul = document.createElement('ul');
        const li1 = document.createElement('li');
        li1.textContent = "HTML";
        const li2 = document.createElement('li');
        li2.textContent = "JS";
        ul.append(li1, li2);

        // Append to root
        const rootDiv = document.getElementById('root');
        rootDiv.append(ul);
    </script>

    <hr />

    <!-- =============== Example 3: React without JSX =============== -->
    <div id="root2"></div>
    <script>
        // Using React.createElement() manually
        const liA = React.createElement('li', {}, "HTML");
        const liB = React.createElement('li', {}, "JS");
        const ulReact = React.createElement('ul', {}, [liA, liB]);

        const container2 = document.getElementById('root2');
        const root2 = ReactDOM.createRoot(container2);
        root2.render(ulReact);

        // Older way before React 18:
        // ReactDOM.render(ulReact, container2);
    </script>

    <hr />

    <!-- =============== Example 4: React with JSX =============== -->
    <div id="root3"></div>
    <script type="text/babel">
        // JSX looks like HTML but compiles to React.createElement()
        const jsx = (
            <ul>
                <li>HTML</li>
                <li>JS</li>
            </ul>
        );

        const container3 = document.getElementById('root3');
        const root3 = ReactDOM.createRoot(container3);
        root3.render(jsx);
    </script>

    <hr />

    // conversion of jsx to react.createElement in babel
    // =============== JSX Syntax Overview ===============
    const jsx = (
        <ul>
            <li>HTML</li>
            <li>JS</li>
        </ul>
    );
    // is converted to
    const jsx = React.createElement(
        "ul",
        null,
        React.createElement("li", null, "HTML"),
        React.createElement("li", null, "JS")
    );
    
    

    // =============== Example 5: JSX with JavaScript Expressions ===============
    <><div id="root4"></div><script type="text/babel">
        // You can embed JS expressions inside JSX using
            const name = "React";
            const jsxDynamic = (
            <div>
                <h1>Hello, {name}!</h1>  
                <p>This is a simple JSX example with dynamic content.</p>
            </div>
            );

            const container4 = document.getElementById('root4');
            const root4 = ReactDOM.createRoot(container4);
            root4.render(jsxDynamic);
        </script></>
</body>
</html>

*/
