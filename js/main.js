/*date*/
function todayDate(){
    let today = new Date().toLocaleDateString();
    return today;
}
//set min date to today's date
document.getElementById("when").setAttribute("min",todayDate);
document.getElementById("when").setAttribute("placeholder",todayDate);
