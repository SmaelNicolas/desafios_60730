import React from "react";

export const Button = (props) => {
	console.log(props);

	return (
		<div
			style={{ backgroundColor: props.background, color: props.color }}
			onClick={props.callback}>
			{props.label}
		</div>
	);
};

// PARA UTILIZAR ESTE COMPONENTE :
// IMPORTARLO EN APP
// ENVIARLE LAS PROPS : background , color , callback , label
// <Button background="red" color="yellow" label="Click Me" callback={() => alert("Hola")} />;

// PARA APLICAR CHILDREN , "ENCERRAR" ENTRE LAS ETIQUETAS DEL COMPONENTE LO QUE DESEAMOS PASAR COMO CHILDREN
{
	/* <Button>
    "HOLA"
</Button> */
}

// EL TEXTO "HOLA" ES CHILDREN DEL COMPONENTE BUTTON
// export const Button = (props) => {
// 	console.log(props);

// 	return (
// 		<div
// 			style={{ backgroundColor: props.background, color: props.color }}
// 			onClick={props.callback}>
// 			{props.children}
// 		</div>
// 	);
// };
