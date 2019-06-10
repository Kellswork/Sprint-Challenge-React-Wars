# Answers

1.  What is React JS and what problems does it try and solve?

--> React JS is a javascript library for building user interfaces.

--> Pages that have a high user interaction which requires data to change at a high rate therefore requiring the DOM to be updated as fast as possible, react solves this problem with a concept called Virtual DOM.

--> React makes building apps that require a lot of DoM manipulation easy as you don't have to write html and javascript seperately and then having to call the elements in your javascript. With react, you write your html and javascript in the same file therefore making DOM manipulation easy as you are passing the data directly in your html with the use of props.

--> React let's you build your UI in smaller components thefore making it easy for you to use in different places on your application. It follows the single responsibilty principle. 

1.  What does it mean to _think_ in react?

--> When building a web page or a mock UI design, you need to first break the UI design into smaller components starting from the outer component housing all the other components to the smallest component in the UI. To think in react is to create reuasable small components that can be used multiple times to build your UI.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

--> Functional Components are stateless, they can only be used to access props.

--> Class components are stateful and make use of es6 class syntax. to access props, the `this` keyword must be used. It makes use of `state` and `life cycle methods`.

1.  Describe state.

--> state are used in class components to store data that could be created, updated, read and deleted. state can only be used with class components. state is private

1.  Describe props.

--> props is short for property. props are used in functional components to render data to the dom.
