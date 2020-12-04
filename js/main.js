document.getElementById("search").addEventListener("click",dataHotel);
/*date*/
function todayDate(){
    //let today = new Date().toLocaleDateString(); devuelve la fecha en formato dd/mm/yyyy
    let today = new Date(),
        day = today.getDate(),
        month = today.getMonth() + 1,
        year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    today = year + '-' + month + '-' + day;
    document.getElementById("when").setAttribute("min",today);
    document.getElementById("when").setAttribute("value",today);
}
todayDate(); 
//set min date to today's date


let room = {
    adult : Number,
    children : [Number]
}


let hotel = {
    name : String,
    date : Date,
    nights : Number,
    rooms : [Object.create(room)]
}

function dataHotel(){
    let place = document.getElementById("where").value;
    let date = document.getElementById("when").value;
    let nights = document.getElementById("numbernights").value;
    if(place != "" && date != "" && nights != ""){
        hotel.name = place;
        hotel.date = date;
        hotel.nights = nights;
        printConsole();
    }

}
function printConsole(){
    console.log(hotel); //muestra el objeto por consola
    console.log(`Nombre del hotel: ${hotel.name}`);
    console.log(`Fecha: ${hotel.date}`);
    console.log(`Duración de la estancia: ${hotel.nights} noches`);
    hotel.rooms.forEach(room => console.log(`Adultos: ${room.adult}  Niños:${room.children.forEach(child => (child.toString()) + " ")}`))
    //console.log(`Información sobre las habitaciones: ${hotel.room}`);
}
function generateRoom(roomNumber) {
    let roomDiv = document.createElement('div');
    let numberBlock = document.createElement('p');
    let name = document.createTextNode(roomNumber + ' Habitación');
    numberBlock.appendChild(name);

    let numberAdults = crearOpcionesNum(4,"numberAdults");
    let adults = document.createElement('div');
    adults.id = "adults";
    let adultsText = document.createElement('p');
    let textA = document.createTextNode('Adultos');
    adultsText.appendChild(textA);
    adults.appendChild(adultsText);
    adults.appendChild(numberAdults);

    let numberChildren = crearOpcionesNum(4,"numberChildren");
    let children = document.createElement('div');
    children.id = "children";
    let childrenText = document.createElement('p');
    let textB = document.createTextNode('Niños');
    childrenText.appendChild(textB);
    children.appendChild(childrenText);
    children.appendChild(numberChildren);

    roomDiv.id="room";
    roomDiv.className = "col";
    roomDiv.appendChild(numberBlock);
    roomDiv.appendChild(adults);
    roomDiv.appendChild(children);
    return roomDiv;
}

function crearOpcionesNum(nOptions,stringClass) {
    let select = document.createElement('select');
    select.classList.add(stringClass);
    let option, optionTxt;
    for (let cont = 0; cont < nOptions; cont++) {
        option = document.createElement('option');
        optionTxt = document.createTextNode(cont);
        option.appendChild(optionTxt);
        option.setAttribute("value", cont);
        select.appendChild(option);
    }
    return select;
}
generateRoom();