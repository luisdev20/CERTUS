function id(str){
    return document.getElementById(str);
}

function obtener_random( num_min, num_max){
    return Math.floor( Math.random() * (num_max - num_min)) + num_min; /* 5 - 15 = 10 + 5 */
}