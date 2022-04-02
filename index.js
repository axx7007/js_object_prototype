// // // console.log(message);
// // // var message;
// // // message = 'The variable Has been hoisted';


// // class Bike{
// //     constructor(model, color){
// //         this.model=model;
// //         this.color=color
// //     }
// // }
// // getBike(){
// //    return this.model+"has "+this.color
// // }
// // let birds= ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
// // var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// // birds.filter((value, index)=>console.log(geese.includes(value)))

// var x=['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'];
// function well(x){
//     let filtered=x.filter((x)=>x==='good');
//     var str=''
//     if(filtered.length>2){
//       str='I smell a series'
//     }
//     else if(filtered.length<=0){
//       str='Fail'
//     }
//     else{
      
//       str='Publish';
//     }
    
//     return str
//   }
//   console.log(well(x))
// var n=10;
// function buildFun(n){

// 	var res = []

// 	for (var i = 0; i< n; i++){
// 		res.push(i)
// 	}
// 	return res
// }
// console.log(buildFun(n))

// var arr=[1,2,3,12];
// var newarr=[];
// for(let i=arr[0]; i<=arr[arr.length-1]; i++){
//    console.log(i)
// }


// var ball1 = new Ball();
// console.log(ball1)
// var language='english'
// var languages={
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// }
// console.log(languages[language])

// function Person(name){
//     this.name=name;
// }

// Person.prototype.getName=function(){
//     return this.name
// }
// var John = new Person("John Doe")
// console.log(John.getName())


// let person={
//     name:"Palonchiyev",
//     surname:"Pistonchiyev"
// }
// person.greet=function(){
//     console.log(`Hello ${this.name}`)
// }
// person.greet()

// function Greet(){
    // console.log(`Hello ${this.name}`)
// }
// person.greet=Greet;
// console.log(person.greet)

// let person = {
//     name:"Xojiakbar",
//     surname: "Abduvaxobov",
//     greet: function(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// person.greet()

// let person={
//     name:"Xojiakbar",
//     surname:"Abduvaxobov",
//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// person.greet()
// let person1={
//     name:"Leo",
//     surname:"Messi",
//     greet: function(){
//         console.log(`Hello ${this.name} ${this.surname}`)
//     }
// }
// person1.greet()


// let person={
//     name: "Xojiakbar",
//     surname:"Abduvaxobov",
// }
// person.greet=function(){
//     console.log(`Hello ${this.name} ${this.surname}`)
// }
// person.greet()

// let person = {
//     name: "Leonel",
//     surname:"Messi",
// }
// function Greet(){
//     console.log(`Hello ${this.name} ${this.surname}`)
// }
// person.greet=Greet;
// person.greet()

// let person ={
//     name: "Leonel",
//     surname:"Messi",
//     greet: function(){
//         console.log(`Hello ${this.name} ${this.surname}`)
//     }
// }
// person.greet()

// let person = {
//     name: 'Leonel',
//     surname:"Messi",
//     greet(){
//         console.log(`Hello ${this.name} ${this.surname}`)
//     }
// }
// person.greet()

// let person = {
//     name:"Leonel",
//     surname:'Messi',
//     greet:function(){
//         console.log(`Hello`)
//     },
//     getFullName:function(){
//         return this.name+this.surname
//     }

// }
// console.log(person.getFullName())

// function Person(name, surname){
//     this.name=name,
//     this.surname=surname
// }
// var person1 = new Person("Leonel", "Messi")
// var person2= new Person("Cristiano", "Ronaldo")
// console.log(person1, person2)

// function Person(firstName, lastName) {
//     console.log(new.target);

//     this.firstName = firstName;
//     this.lastName  = lastName;

//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     };
// }
// let person=new Person("WebBrain", "Academy")

// function Person(firstName, lastName){
//     if(!new.target){
//         throw Error("Cannot be called without the new keyword");
//     }
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // let person=Person("WebBrain", "Academy")
// console.log(Person())

// var arr=[1, 2, 3, 4, 5];
// arr.length=2;
// console.log(arr)
// console.log(Object.prototype.constructor===Object)

// var student1={
//     name:"Xojiakbar",
//     surname:"Abduvaxobov",
    
// }
// var student2={
//     name:"Asadbek",
//     surname:'Abduvoitov',
    
// }
// var student3={
//     name:"WebBrain",
//     surname:'Academy',
    

// }
// Object.prototype.getFullName=function(){
//     return this.name+this.surname
// }
// console.log(student2.getFullName())

// var arr=[1, 2, 3, 4, 5, 6];
// var arr1=[2, 3, 4, 5, 6, 7];
// var arr2=[3, 4, 5, 6, 7, 8, 9];
// Array.prototype.kvadrat=function(){
//    return this.map((value)=>{
//         return value**2;
//     })
// }
// console.log(arr2.kvadrat())

// function Car(model, color, ManufacturedDate){
//     this.model=model,
//     this.color=color,
//     this.ManufacturedDate=ManufacturedDate
// }
// Car.prototype.Model=function(){
//     return this.model
// }
// Car.prototype.Color=function(){
//     return this.color
// }
// Car.prototype.Date=function(){
//     return this.ManufacturedDate
// }
// let car = new Car("Nexia3", 'oq', 2018);
// console.log(car)

// const person={
//     name: "Xojiakbar",
//     surname:"Abduvaxobov",
//     age: 24

// }
// Object.prototype.SayHello=function(){
//     console.log(`Hello`)
// }
// const web = Object.create(person)
// // web.name="WebBrain Academy"
// web.SayHello()

// var obj={
//     name:"xojiakbar",
//      surname:'Abduvaxobov'
// }
// console.log(Object.prototype)
// let sum=0;
// for(let i=0; i<100; i++){
//     if(i%2==1){
//         sum+=i;
//     }
// }
// console.log(sum)


// var str = "10:60";
// function Sum(str){
//     var sekund=parseInt(str.slice(3, 5));
//     let sum = 0;
//     if(sekund == 60){
//         return false
//     }
//     else{
//         return sum = parseInt(str.slice(0, 2))*60 + sekund
//     }
//     return sum

// }
// console.log(Sum(str))
// console.log(str.slice(3, 5))
// console.log(sum) 

// var arr=[1, 2, 3, 4, 5, 6, 7, 8];
// const Sum=(arr)=>{
//     for(let i=0; i<arr.length; i++){
//             sum+=arr[i]
//         }
//     return sum 
// }

// var sum=arr.reduce((a,b)=>a+b)

// var sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum)

// let person = {
//     name: 'Xojiakbar',
//     lastName: "Abduvaxobov",
//     greet(){
//         console.log("Hello $")
//     }
// }
// person.greet()
// function Greet(){
//     console.log("Hello Greeting")
// }

// person.greet = Greet
// person.greet()

// let person = {
//     name: "Xojiakbar",
//     surname: "Abduvaxobov",
//     greet: function(){
//         console.log("Hello person");
//     }
// }

// person.greet()

// let person1 = {
//     name: "Xojiakbar",
//     surname: "Abduvaxobov",
//     greet(){
//         console.log("Hello person1")
//     }

// }
// person1.greet()


let person = {
    name: "Xojiakbar",
    
}