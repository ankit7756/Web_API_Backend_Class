import { CreateUserDTO } from "../dtos/user.dtos";
import { UserRepository } from "../repositories/user.repository";


let usersserRepository = new UserRepository();

export class UserService {
    async createUser(data: CreateUserDTO) {
        // business logic before creating user
        const emailcheck = await usersserRepository.getUserByEmail(data.email);
        if (emailcheck) {
            throw new Error("Email already exists");
        }
        const usernamecheck = await usersserRepository.getUserByUsername(data.username);
        if (usernamecheck) {
            throw new Error("Username already exists");
        }
        // create user
        const newUser = await usersserRepository.createUser(data);
        return newUser;
    }
} 
