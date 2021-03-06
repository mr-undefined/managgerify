import User from '../models/User';

interface CreateUserDTO {
  name: string;
  email: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create(data: CreateUserDTO): User {
    const { name, email } = data;
    const user = new User(name, email);

    this.users.push(user);

    return user;
  }

  public index(): User[] {

    return this.users;
  }

  public indexById(id: string): User {
    const userId = this.users.findIndex(user => user.id === id);

    const userFound = this.users[userId];

    return userFound;
  }
}

export default UsersRepository;
