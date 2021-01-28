import { Router } from "express";
import registerHoursRouter from "./registerHours.routes";

const routes = Router();

routes.use("/register", registerHoursRouter);

export default routes;
