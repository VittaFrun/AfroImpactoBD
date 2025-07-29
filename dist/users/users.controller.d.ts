import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addRolToUser(userId: number, rolId: number): Promise<import("./user.entity").Usuario>;
}
