// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const getUniqueRandomNumbers = (min, max, tot) => {
    const numbers = [];
    while (numbers. length < tot) {
    let randomNumber;
    do {
    randomNumber = Math. floor (Math. random() * (max + 1 - min)) + min;
    } while (numbers. includes(randomNumber));
    numbers.push(randomNumber);
    }
    return numbers;
};


const teamList = [
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juve',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
];

