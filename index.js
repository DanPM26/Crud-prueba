console.log("hola mundo")

let array = JSON.parse(localStorage.getItem("datos")) ? JSON.parse(localStorage.getItem("datos")) : []

function guardar(){
    let casillas = {
       "nombre": document.getElementById("nombre").value,
       "correo": document.getElementById("correo").value,
       "edad": document.getElementById("edad").value,
       "nacionalidad": document.getElementById("nacionalidad").value,
    }

    array.push(casillas)
    console.log(array)

    localStorage.setItem("datos", JSON.stringify(array))

    renderizado()
}

function renderizado(){
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = "";
    array.forEach(function(element,index){
        mostrar.innerHTML += `
        <table> 
        <thead> 
        <tr>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Edad</th>
        <th>Nacionalidad</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${element.nombre}</td>
        <td>${element.correo}</td>
        <td>${element.edad}</td>
        <td>${element.nacionalidad}</td>
        <td><button onclick="editar(${index})">Editar</button></td>
        <td><button onclick="borrar(${index})">Borrar</button></td>
        </tr>
        </tbody>
        </table>
        
        `
    })
}

function borrar(index){
    console.log(array.splice(index,1))
    console.log(localStorage.removeItem("datos", JSON.stringify(array)))

    
    renderizado()
}

function editar(index){
for(i = 0; i < array.length; i++){
    if(i == index ){
        document.getElementById("nombre").value = array[i].nombre
        document.getElementById("correo").value = array[i].correo
        document.getElementById("edad").value = array[i].edad
        document.getElementById("nacionalidad").value = array[i].nacionalidad

        let mostrar = document.getElementById("mostrar")
        mostrar.innerHTML = `
        <td><button onclick="guardar(${i})">Guardar</button></td>
        <td><button onclick="salir(${i})">Salir</button></td>
        `
        borrar(index)
    }
}
}