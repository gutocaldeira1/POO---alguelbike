import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import crypto from 'crypto'
import { appendFile } from "fs";

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []



    addUser(user: User): void {
        if (this.users.some(rUser => { return rUser.email === user.email })) {
            throw new Error('User with same email already registered.')
        }
        //user.password = User.criptografar(user.password)
        user.id = crypto.randomUUID()
        this.users.push(user)
    }

    findUser(email: string): User | undefined{
        return this.users.find(user => { return user.email === email})
    }

    registraBike(bike: Bike): void{
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }

    removeUser(user: User): void{
        this.users = this.users.filter((users) => user.email !== users.email)
    }

    rentBike(bike: Bike, user: User, startDate: Date, endDate: Date): void{
        const array = this.rents.filter((bikes) => bike === bikes.bike)
        
        const newrent = Rent.create(array, bike, user, startDate, endDate)
        this.rents.push(newrent)
        
    }

    returnBike(bike: Bike, user: User, startDate: Date, returnDate: Date): void{
        var i = 0
        for(i ; i < this.rents.length; i++){
            if(this.rents[i].bike === bike && this.rents[i].user === user && this.rents[i].dateFrom === startDate){
                this.rents[i].dateReturned = returnDate
            }
        }

    }

    listUsers(): User[]{
        var i = 0
        var users = []
        for(i; i < this.users.length; i++){
            users[i] = this.users[i]
        }

        return users
    }

    listBikes(): Bike[]{
        var i = 0
        var bikes = []
        for(i; i <= this.bikes.length; i++){
            bikes[i] = this.bikes[i]
        }

        return bikes
    }

    listRents(): Rent[]{
        var i = 0
        var rents = []
        for(i; i < this.rents.length; i++){
            rents[i] = this.rents[i]
        }

        return rents
    }

    autenticaUser(senha: string, email: string): void{
        const testUser = this.findUser(email)
        if(testUser?.password === senha){
            console.log('Login concluído')
        }else {
            console.log('Usuário ou senha incorretos')
        }
    }

}