import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";


export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    addUser(user: User): void {
        if (this.users.some(rUser => { return rUser.email === user.email })) {
            throw new Error('User with same email already registered.')
        }
        this.users.push(user)
    }

    findUser(email: string): User | undefined{
        return this.users.find(user => { return user.email === email})
    }

    registraBike(bike: Bike): void{
        if(this.bikes.some(rBike => {return rBike.id === bike.id})){
            throw new Error('Bike already registered')
        }
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

}