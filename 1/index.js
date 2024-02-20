const createComponent = () => {
	const container = document.querySelector("#root");
	const nodeButton = document.createElement("button");
	nodeButton.innerHTML = "Comision 60730";
	container.appendChild(nodeButton);
};
createComponent();

const createComponentCustom = (textValue, classValue) => {
	const container = document.querySelector("#root");
	const nodeButton = document.createElement("button");
	nodeButton.innerHTML = textValue;
	nodeButton.classList.add(classValue);
	container.appendChild(nodeButton);
};

createComponentCustom("Comision 60730", "myButton");
