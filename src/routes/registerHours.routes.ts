import { Router } from "express";
import { parseISO } from "date-fns";

import RegisterRepository from "../repositories/RegisterRepository";
import CalculateRegisterService from "../services/CalculateRegisterService";

const registerHoursRouter = Router();
const registerRepository = new RegisterRepository();

registerHoursRouter.get("/", (request, response) => {
  const appointments = registerRepository.all();

  return response.json(appointments);
});

registerHoursRouter.post("/", (request, response) => {
  try {
    const { initialHour, finalHour } = request.body;

    parseISO(initialHour);
    parseISO(finalHour);

    const calculateRegister = new CalculateRegisterService(registerRepository);

    const register = calculateRegister.execute({ initialHour, finalHour });

    return response.json(register);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default registerHoursRouter;
