console.log("Hello World");

let user1 ={
    name:"Tuhin",
    age:23,
    phone:01432323,
    hobby:"Playing Cricket"
}
console.log(user1.name);

function test(a,b){
  
    let c = a+b;
    console.log(c);
}
test(33,3);

function showFriends(name,age){
    console.log("My Name is "+name + " & Age "+age);
}
showFriends("Tuhin",23);

// Template literaturs

let quote =`Hi,
How are you ?
I think you are going well.
But i'm not going so well those i thought when we start our relationship in 2015.
`;

console.log(quote + `${user1.name}`);