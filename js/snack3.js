// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
// Stampare in console la bici con peso minore utilizzando il destructuring

const bikeList = [
    {
        name: 'bike 1',
        weight: 70
    },
    {
        name: 'bike 2',
        weight: 60
    },
    {
        name: 'bike 3',
        weight: 30
    },
    {
        name: 'bike 4',
        weight: 90
    }
];


const getLighestBike = bikeList => {

    let lighestBike = bikeList[0];
    
    for (let i = 0; i < bikeList.length; i++){
        
        const currentBike = bikeList[i];    
        
        if (currentBike.weight < lighestBike.weight){
            lighestBike = currentBike;
        }
    }
    return lighestBike;
}

    
let lighestBike = getLighestBike(bikeList);

console.log(lighestBike);