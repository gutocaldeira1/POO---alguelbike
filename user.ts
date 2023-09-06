import bcrypt, { hash } from 'bcrypt'

export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public id?: string
    ) {}
    // bcrypt = require ('bcrypt')
    // static criptografar(senha: string): string{
    //     const hash2 = bcrypt.hash(senha, 10);
    //     return hash2
    // }
}