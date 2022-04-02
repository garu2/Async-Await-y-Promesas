const url = 'https://randomuser.me/api/';

function getData(){
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadojson => {
            console.log(resultadojson.results[0]);
        })
        .catch(error => console.log(error));
}

//getData();

async function getDataAsync(){
    try {
        const user = await fetch(url);
        const userjson =  await user.json();
        console.log(userjson.results[0]);

    } catch (error) {
        console.log(error);
    }
}

//getDataAsync();

const getDataAsync2 = async () => {
    try {
        const user = await fetch(url);
        const userjson =  await user.json();
        console.log(userjson.results[0]);

    } catch (error) {
        console.log(error);
    }
}

getDataAsync2();