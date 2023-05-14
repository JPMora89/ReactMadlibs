# Conceptual Exercise

Answer the following questions below:

## - What is React? When and why would you use it?
React is an open source JS library for building user interfaces. It allows developers to build complex web apps with reusable UI components that can be easily managed and updated.
It also provides efficient ways of rendering and updating views, allowing for seamless user experiences. React can be used in a variety of scenarios, but it's particularly useful for building single-page applications, progressive web apps, and mobile applications. Its popularity is due in part to its ability to handle large-scale, complex applications with ease.


## - What is Babel?
Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser. It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and multiline strings. We can also optionally use it to transpile TypeScript into regular JavaScript that will run in a browser.

## - What is JSX?
JSX stands for JavaScript XML and it allows us to write HTML in React. Babel is used to conpile the JSX code into javascript that can run on any browser.

## - How is a Component created in React?
A component is created by defining a JS class or function that extends or returns "React.Component" class. We can then export the component to be used on different aspects as needed. 

## - What are some difference between state and props?
Props or properties are passed to a component by its parent component, where 'state' is managed within the component itself. Props are read only and cannot be modified, but state can be modified
using the hook "useState". Props are used to pass data from a parent component to its children where state is unique within each component and can be changed as needed. Props are accessible throughout a 
components render method whereas state is only accessible from its own component that is using it.

## - What does "downward data flow" refer to in React?
It is a programming pattern that emphasized that data should flow only in one direction within a component hierarchy. In react, data should be passed from parent components down to their child components 
by using props. 

## - What is a controlled component?
A component where the value of its form element (such as an input, textarea, or select) is controlled by React's state rather than the element's own internal state. This means that when the user interacts with the form element, React's state is updated, which in turn updates the value of the form element.

## - What is an uncontrolled component?
A form element (such as an input, textarea, or select) that maintains its own internal state, rather than relying on React's state to manage its value. This means that when the user interacts with the form element, the element's own internal state is updated, and the value of the form element is not directly managed by React.

## - What is the purpose of the `key` prop when rendering a list of components?
The key prop is used by React to identify each component in the list and to determine which components need to be updated when the list changes. When a component is added, removed, or moved within a list, React can use the key prop to determine which component needs to be added, removed, or moved. Without a key prop, React may not be able to properly identify which component has changed, resulting in unexpected behavior such as duplicate components or incorrect rendering.

## - Why is using an array index a poor choice for a `key` prop when rendering a list of components?
The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.

## - Describe useEffect.  What use cases is it used for in React components?
useEffect is a React Hook that allows you to manage side effects in functional components. Side effects are actions that affect things outside of the component, such as fetching data from an API, updating the browser history, or setting up and tearing down event listeners. useEffect takes two arguments: a function that performs the side effect, and an optional array of dependencies. The function will be called after every render of the component, including the initial render, and can perform any necessary side effects. If the dependencies array is provided, the function will only be called when one of the dependencies has changed since the last render.

## - What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a React Hook that allows you to create a mutable reference to a value that persists between renders of a component. Unlike state, changes to a ref value do not trigger a re-render of the component.
You can use useRef to access the underlying DOM node of a React element, to store a value that should not trigger a re-render, or to create a reference to an object that will persist between renders.

## - When would you use a ref? When wouldn't you use one?
It is a general rule of thumb to avoid using refs unless you absolutely have to. The official React documentation outlined only three possible use cases where refs are entirely considered useful for lack of better alternatives: Managing focus, text selection, or media playback. Triggering imperative animations.

## - What is a custom hook in React? When would you want to write one?
A custom hook in React is a function that uses one or more built-in hooks to provide a specific piece of functionality that can be reused across multiple components. Custom hooks allow you to abstract away complex logic and state management from your components, making them easier to read and maintain. You might want to write a custom hook in React when you find yourself repeating the same code or pattern across multiple components. For example, if you have several components that all need to manage a similar piece of state, you could create a custom hook to abstract away the state management logic and make the components more concise.