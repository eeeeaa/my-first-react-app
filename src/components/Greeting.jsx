/*Note: component functions must be capitalize */

/*, React uses the capitalization to tell the difference 
between an HTML tag and an instance of a React component */

function Greeting() {
  return <h1>&quot;hello&quot;</h1>;
}

function Farewell() {
  return <h1>&quot;Goodbye&quot;</h1>;
}
export { Greeting, Farewell };
