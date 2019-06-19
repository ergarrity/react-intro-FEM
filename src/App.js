const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { 
            name: "Callie", 
            animal: "Dog", 
            breed: "Walldog" 
        }),
        React.createElement(Pet, { 
            name: "Mona", 
            animal: "Dog", 
            breed: "Princess" 
        }),
        React.createElement(Pet, { 
            name: "Gus", 
            animal: "Dog", 
            breed: "Pitbull" 
        })
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);