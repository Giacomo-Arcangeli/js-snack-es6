// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


function getRandomNumber(min , max) {
    return Math.floor(Math.random() * max + 1 - min) + min;
  };


const teamList = [
    {
        nome: 'Inter',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Juve',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli_subiti: 0
    },
];

teamList.forEach((team) => {
    team.punti = getRandomNumber(0, 100);
    team.falli_subiti = getRandomNumber(100, 300);
});
console.log(teamList);

const noPointsList = teamList.map((team) => {
    return {
        nome: team.nome,
        falli_subiti: team.falli_subiti
    }
});
console.log(noPointsList);
