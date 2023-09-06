import { getMaxListeners } from "events";
import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

const bike = new Bike('mountain bike', 'mountain', 
    123, 500, 100.5, 'desc', 5, [])
const user = new User('Maria', 'maria@mail.com', '1234')
const today = new Date()
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const sevenDaysFromToday = new Date()
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7)
const rent1 = Rent.create([], bike, user, today, twoDaysFromToday)
const user2 = new User('Maria Clara', 'maria@gmail.com', '3123')
const bike2 = new Bike('speed', 'road', 100, 250, 59, 'desc', 4, [])
const threeDaysFromToday = new Date()
threeDaysFromToday.setDate(threeDaysFromToday.getDate() + 3)

const app = new App()
app.registraBike(bike)
app.registraBike(bike2)
app.addUser(user)
app.addUser(user2)
app.rentBike(bike, user, today, twoDaysFromToday)
//app.rentBike(bike2, user2, threeDaysFromToday, sevenDaysFromToday)
//
//const listBikes
const listBikes = app.listBikes()
// console.log(app.findUser('maria@mail.com'))
//console.log(listBikes)
console.log(app.listUsers())
//app.listUsers()
app.autenticaUser('3123', 'maria@gmail.com')
//console.log(app)