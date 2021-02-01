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

    // validating data

    if (
      registerHour.initialHour === registerHour.finalHour ||
      registerHour.initialHour >= registerHour.finalHour
    ) {
      throw Error("Invalid hours to calculate");
    }

    const parsedHour1 = new Date(registerHour.initialHour);
    const parsedHour2 = new Date(registerHour.finalHour);

    // converting data to humanized format

    function timeConvert(n: number) {
      const num = n;
      const hours = num / 60;
      const rhours = Math.floor(hours);
      const minutes = (hours - rhours) * 60;
      const rminutes = Math.round(minutes);
      return `${num} minutos = ${rhours} hora(s) and ${rminutes} minuto(s).`;
    }

    // getting the difference time

    const difference = differenceInMinutes(parsedHour2, parsedHour1);
    const convertedRegister = timeConvert(difference);

    return convertedRegister;
  }
}

export default CalculateRegisterService;
