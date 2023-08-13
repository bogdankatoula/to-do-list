const add$$ = document.querySelector(".btn-add");
const list$$ = document.querySelector(".li-container");
const ul$$ = document.querySelector("ul");
const empty$$ = document.querySelector(".empty");
const searchBar$$ = document.querySelector("input");


function handleAdd (event){
    event.preventDefault(); // Detener el comportamiento por defecto del botón donde reinicia la pagina
    const li$$ = document.createElement("li");
    const span$$ = document.createElement("span");
    const btnRemove$$ = document.createElement("button");
    
    ul$$.appendChild(li$$);
    li$$.appendChild(span$$);
    li$$.appendChild(btnRemove$$);

    span$$.textContent = searchBar$$.value; // Asignar el valor del input al texto del elemento de la lista
    
    btnRemove$$.classList = "btn-delete";
    btnRemove$$.textContent = "X"
    btnRemove$$.addEventListener("click", function() {
        li$$.remove();
        checkEmpty(); // verifica despues de cada elemento que se borra y si no queda ninguno, muestra el mensaje
    });
    checkEmpty(); // verifica si se añadio algo y se oculta
}
add$$.addEventListener("click", handleAdd);

function checkEmpty (){
    if (ul$$.children.length === 0){
        empty$$.style.display = "block"; // Mostrar el elemento .empty
    }
    else {
        empty$$.style.display = "none"; // Ocultar el elemento .empty
    }
}