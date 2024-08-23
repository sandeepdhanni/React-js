import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
} 

function Readers(props){
  return  <h2>Hello, {props.fullname}</h2>
}

function Rule() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Readers fullname="sandeep dhanni" />
    </div>
  );
}

export default Rule;
