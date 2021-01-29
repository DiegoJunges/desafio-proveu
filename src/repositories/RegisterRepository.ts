import Register from "../models/Register";

interface ICreateRegisterDTO {
  initialHour: Date;
  finalHour: Date;
}

class RegisterRepository {
  private registeredHours: Register[];

  constructor() {
    this.registeredHours = [];
  }

  public all(): Register[] {
    return this.registeredHours;
  }

  public create({ initialHour, finalHour }: ICreateRegisterDTO): Register {
    const register = new Register({ initialHour, finalHour });

    this.registeredHours.push(register);

    return register;
  }
}

export default RegisterRepository;
