function getClient(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Cliente enviado...');
        }, 2000);
    })
}

function getProduct(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Producto enviado...');
        }, 2000);
    })
}

async function ejecutar(){
    try {
        const respuesta = await Promise.all([getClient(), getProduct()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);

        /* const cliente =  await getClient();
        console.log(cliente);

        const producto =  await getProduct();
        console.log(producto); */
    } catch (error) {
        console.log(error);
    }
}

ejecutar();