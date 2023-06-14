const names = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const guests = names.map((name , i) => {
    const guest = {
        table: 'Tavolo Vip',
        name: name,
        place: i + 1
    } 
    console.log(guest);
});
