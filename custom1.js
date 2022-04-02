function getClient(){
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if (!error) {
                resolve('Cliente enviado...');
            } else {
                reject('Error al obtener el cliente...');
            }
        }, 2000);
    })
}

//promesas 
function ejecutar(){
    getClient()
        .then(resultado => {
            console.log(resultado);
        })
        .catch(error => console.log(error));
}

//ejecutar();

async function ejecutarAsync(){
    try {
        const respuesta = await getClient();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutarAsync();