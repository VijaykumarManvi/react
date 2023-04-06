const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
console.log(heading);

{/* <div id="parent">
  <div id="child"><h1>I am h1 tag</h1>
  </div>
</div> */}
const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);