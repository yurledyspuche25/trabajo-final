

//pintar card//
const cargarFood = async() =>{
    try{
        const respuesta = await fetch('http://localhost:3000/Food');
        console.log(respuesta)

        if(respuesta.status === 200){
            const datos = await respuesta.json();
        console.log(datos)
            let Food = '';
            datos.forEach(Food => {
                Food += `
                <div class ="Food">
                <img class=foto1" src ="./imagen/almendra.webp"${Food.cargarFood}>
                </div>
                <h1>${Food.title}</h1>`;
                
            }); 
            document.getElementById('contenedor').innerHTML= Food
        
        } else if (respuesta.status===401){
            console.log('pusisten la llave mal');

        } else if (respuesta.status === 404){console.log ('la pelicula no exite');
    } else {
        console.log('hubo un erro y nose');
    }}   catch(error){
        console.log(error);
    }
} 
cargarFood();


         