let objetivo;
let cant_errores = 0; 
let cant_aciertos = 0;

const palabras = [
    'CERTUS',
    'JOVEN',
    'VICENTENARIO',
    'FLUTTER',
    'DART',
    'PROGRAMA',
    'APLICACION',
    'JAVASCRIPT'
];
const btn = document.getElementById('jugar');
const imagen = document.getElementById( 'imagen' );
const btn_letras = document.querySelectorAll( "#letras button" );

/* click en iniciar juego */
btn.addEventListener('click', iniciar );

function iniciar(event){
    document.getElementById('resultado').innerHTML = '';
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = document.getElementById( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );

    objetivo = palabras[ valor_al_azar ];
    console.log( objetivo );
    const cant_letras = objetivo.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = objetivo.toLowerCase( ); // .toUpperCase( )

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        cant_errores++;
        const source = `img/img${cant_errores}.png` ;
        imagen.src = source;
    }

    if( cant_errores == 9 ){
        document.getElementById('resultado').innerHTML ="Perdiste, la palabra era " + objetivo;
        game_over( );
        alert("Fin del juego")
    }else if( cant_aciertos == objetivo.length ){
        document.getElementById('resultado').innerHTML = "¡Ganaste, Felicidades!";
        game_over( );
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
}


/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    btn.disabled = false;
}

function obtener_random( num_min, num_max){
    return Math.floor( Math.random() * (num_max - num_min)) + num_min;
}

game_over( );