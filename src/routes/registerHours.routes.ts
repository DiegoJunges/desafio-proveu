import { Router } from "express";
import { parseISO } from "date-fns";

const registerHoursRouter = Router();

interface IRegister {
  initialHour: Date;
  finalHour: Date;
}

const registeredHours: IRegister[] = [];

registerHoursRouter.post("/", (request, response) => {
  const { initialHour, finalHour } = request.body;

  const register = { initialHour, finalHour };

  parseISO(register.initialHour);
  parseISO(register.finalHour);

  if (
    register.initialHour === register.finalHour ||
    register.initialHour >= register.finalHour
  ) {
    return response.status(400).json({ message: "Invalid hours to calculate" });
  }

  registeredHours.push(register);

  return response.json(register);
});

export default registerHoursRouter;
