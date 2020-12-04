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
    adult : 0,
    child : {
        number : 0,
        age : [Number]
    }
}

//let rooms = [];
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
    //console.log(`Información sobre las habitaciones: ${hotel.room}`);
}