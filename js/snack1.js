const guestList = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

placeCard = [];
for ( let i=0; i < guestList.length; i++){
    placeCard = [
        {
            table: 'Tavolo Vip',
            name: guestList[i],
            place: guestList.length
        }
    ]
} 
console.log(placeCard);
