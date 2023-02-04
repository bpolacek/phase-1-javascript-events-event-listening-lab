function addingEventListener() {
    document.getElementById('button').addEventListener('click', callback);
}
//event listener to a found element

//callback function
function callback(e){
    e.remove();
}
