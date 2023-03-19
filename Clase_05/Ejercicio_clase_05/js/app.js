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

let mySuperArrayToString = ["Login", "SignUp", "Reset", "Cancel"]
// Recorro el array con un forEach
// Por cada uno de los elementos yo puedo aplicar algun tipo de funcion
function RenderButton(text){
    let myButton =  new Button("app",text)
    myButton.render();
};
// Por cada uno de los paremetros que tengo dentro de mySuperArrayToString-->llamame a esta funcion RenderButton()
mySuperArrayToString.forEach(element => RenderButton(element));

class Input{
    constructor(parentID, type){
        this.parentID = parentID;
        this.type = type;
    }
    render(){
        let myApp = document.getElementById(this.parentID);
        const myInputHtml = myApp.innerHTML + "<input type=" + this.type + ">";
        myApp.innerHTML = myInputHtml;
    }
};

let myArrayToCreateMyInput = ["checkbox", "password", "text","date"];

function RenderInput(type){
    let myInput = new Input("app", type)
    myInput.render();
};

let myInputArray = myArrayToCreateMyInput.filter(myArrayToCreateMyInput=> myArrayToCreateMyInput ==="password");
myInputArray.forEach(e => RenderInput(e));

