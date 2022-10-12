import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container my-5 text-start'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of react router?</Accordion.Header>
                    <Accordion.Body>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does context api works?</Accordion.Header>
                    <Accordion.Body>
                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>useRef Hook Overall idea</Accordion.Header>
                    <Accordion.Body>
                        The useRef Hook allows users to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        <p><strong>Use of useRef</strong></p>
                        <p><strong>Does Not Cause Re-renders</strong></p>
                        If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook. useRef() only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0).
                        <p><strong>Accessing DOM Elements</strong></p>
                        In general, we want to let React handle all DOM manipulation.But there are some instances where useRef can be used without causing issues. In React, we can add a ref attribute to an element to access it directly in the DOM.
                        <p><strong>Tracking State Changes</strong></p>
                        The useRef Hook can also be used to keep track of previous state values.This is because we are able to persist useRef values between renders.This time we use a combination of useState, useEffect, and useRef to keep track of the previous state. In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;