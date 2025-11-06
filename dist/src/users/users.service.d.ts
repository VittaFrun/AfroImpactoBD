import { Repository } from 'typeorm';
import { Usuario } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Rol } from '../rol/rol.entity';
export declare class UsersService {
    private usersRepository;
    private rolesRepository;
    constructor(usersRepository: Repository<Usuario>, rolesRepository: Repository<Rol>);
    create(createUserDto: CreateUserDto): Promise<Usuario>;
    findOneByEmail(email: string): Promise<Usuario | undefined>;
    findOneByEmailWithRol(email: string): Promise<Usuario | undefined>;
    findOne(id: number): Promise<Usuario | undefined>;
    addRolToUser(userId: number, rolId: number): Promise<Usuario>;
    remove(id: number): Promise<void>;
}
