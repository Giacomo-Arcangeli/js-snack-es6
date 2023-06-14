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
        weight: 40
    },
    {
        name: 'bike 4',
        weight: 30
    }
];

const minorWeight = bikeList[3];

for (let i = 0; i < bikeList.length; i++){
    if (bikeList[i].weight < minorWeight.weight){
        minorWeight = bikeList[i];
    }
};

console.log(minorWeight);