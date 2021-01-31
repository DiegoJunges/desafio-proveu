import { differenceInMinutes } from "date-fns";
import Register from "../models/Register";
import RegisterRepository from "../repositories/RegisterRepository";

class CalculateRegisterService {
  private registerRepository: RegisterRepository;

  constructor(registerRepository: RegisterRepository) {
    this.registerRepository = registerRepository;
  }

  public execute({ initialHour, finalHour }: Register): string {
    const registerHour = { initialHour, finalHour };

    if (
      registerHour.initialHour === registerHour.finalHour ||
      registerHour.initialHour >= registerHour.finalHour
    ) {
      throw Error("Invalid hours to calculate");
    }

    const parsedHour1 = new Date(registerHour.initialHour);
    const parsedHour2 = new Date(registerHour.finalHour);

    const difference = differenceInMinutes(parsedHour2, parsedHour1);

    const convertedRegister = this.registerRepository.timeConvert(difference);

    return convertedRegister;
  }
}

export default CalculateRegisterService;
