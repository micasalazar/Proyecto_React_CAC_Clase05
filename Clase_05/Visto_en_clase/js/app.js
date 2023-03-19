class Button{
    constructor(parentID, text){
        this.parentID = parentID;
        this.text = text;
    }

    render(){
        let myApp = document.getElementById(this.parentID);

        const myButtonHtml = myApp.innerHTML + "<button>"+ this.text +  "</button>";
        myApp.innerHTML = myButtonHtml;
    }
}

class Input {
    constructor(parentID, type){
        this.parentID = parentID;
        this.type = type;
    }
    render(){
        let myApp = document.getElementById(this.parentID);
        const myInputHtml = myApp.innerHTML + "<input type=" + this.type + ">";
        myApp.innerHTML = myInputHtml;
    }
}

let mySuperArrayToString = ["Login", "SignUp", "Reset", "Cancel"]
// Recorro el array con un forEach
// Por cada uno de los elementos yo puedo aplicar algun tipo de funcion
function RenderButton(text){
    let myButton =  new Button("app",text)
    myButton.render();
}


// Por cada uno de los paremetros que tengo dentro de mySuperArrayToString-->llamame a esta funcion RenderButton()
mySuperArrayToString.forEach(element => RenderButton(element));


function MiSuperFuncion(){

}
MiSuperFuncion();//Invocamos...
//Puedo asignar una constante a una funcion que NO tiene nombre

const MiSuperFuncionDefinida= function(){//--->funcion anonima

}

MiSuperFuncionDefinida();

//Definir funciones asignando otras..
const MiSegundaSuperFuncion = MiSuperFuncion;

// Cualquier cosa que gusrademos en una variable puede ser una funcion o puede ser un objeto

///Otro tipo de funcion anonima-->conocida como ARROW FUNCTION/FUNCION FLECHA
const MiSuperFuncionSinNombre = () => {

}


////////////////
// Resolvemos el ejercicio del dia
let inputArray = ["Username", "Surname", "Password","email"];

function RenderInput(type){
    let input_type = "none"

    switch(type){
        case "Password":
            input_type = "password"
            break;
            case "E-mail":
                input_type = "email"
                break;
     default:
        input_type="text"
        break;
    }

    let myInput =  new Input("app",input_type)
    myInput.render();

}

inputArray.forEach(function(e){
    RenderInput(e);
})