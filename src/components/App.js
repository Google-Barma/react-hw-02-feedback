import React from "react";
import Layout from "./components/Layout/Layout";
import Counter from "./components/Counter";

export default function App() {
  return (
    <Layout>
      <Counter />
      <button onClick={(event) => console.log(event)}>Click me!</button>
    </Layout>
  );
}
