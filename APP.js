// const refh1 = React.createElement("h1",{id:"heading"},"This Element Was Created Using ReactJS")
// const refdiv = ReactDOM.createRoot(document.getElementById("parent"))
// refdiv.render(refh1);


const refdiv = React.createElement(("div",{id:"parent"},""),
               React.createElement("div",{id:"child"},""),
               React.createElement("h1",{},"This is nested div"))