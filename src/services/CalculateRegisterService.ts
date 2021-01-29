import Register from "../models/Register";
import RegisterRepository from "../repositories/RegisterRepository";

interface IRequest {
  initialHour: Date;
  finalHour: Date;
}

class CalculateRegisterService {
  private registerRepository: RegisterRepository;

  constructor(registerRepository: RegisterRepository) {
    this.registerRepository = registerRepository;
  }

  public execute({ initialHour, finalHour }: IRequest): Register {
    const registerHour = { initialHour, finalHour };

    if (
      registerHour.initialHour === registerHour.finalHour ||
      registerHour.initialHour >= registerHour.finalHour
    ) {
      throw Error("Invalid hours to calculate");
    }

    const register = this.registerRepository.create({ initialHour, finalHour });

    return register;
  }
}

export default CalculateRegisterService;
