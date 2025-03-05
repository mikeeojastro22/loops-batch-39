const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
];

for(let index = 0; index < nightClubRegister.length; index++){
    let addressee = "";
    if(nightClubRegister[index].gender === "male"){
        addressee = "Mr.";
    } else if(nightClubRegister[index].gender === "female") {
        addressee = "Mrs./Ms.";
    }
    if(nightClubRegister[index].age >= 18){
        console.log(`Welcome, ${addressee} ${nightClubRegister[index].name} ${nightClubRegister[index].lastname} you are on the list!`);
    } else {
        console.log(`Sorry, ${addressee} ${nightClubRegister[index].name} ${nightClubRegister[index].lastname} you are not old enough to attend.`);
    }
}