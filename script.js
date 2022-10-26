console.log('Desafio 1');

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function imprimirNombres(arr){
    for (let i=0 ; i < arr.length ; i++){
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort)
    }
}

imprimirNombres(students);


console.log('Desafio 2');

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function imprimirNroCaracteres(arr){
    console.log("EMPLOYEES");
    for (let i=0 ; i < arr.employees.length ; i++){
        console.log((i+1) + " - " + arr.employees[i].last_name.toUpperCase() + ", "+  arr.employees[i].first_name.toUpperCase() + " - " + (arr.employees[i].last_name.length + arr.employees[i].first_name.length))
    }

    console.log("MANAGERS");
    for (let k=0 ; k < arr.managers.length ; k++){
        console.log((k+1) + " - " + arr.managers[k].last_name.toUpperCase() + ", "+  arr.managers[k].first_name.toUpperCase() + " - " + (arr.managers[k].last_name.length + arr.managers[k].first_name.length))
    }
 }

 imprimirNroCaracteres(users);