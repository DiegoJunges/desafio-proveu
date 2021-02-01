import Register from "../models/Register";

class RegisterRepository {
  private registeredHours: Register[];

  constructor() {
    this.registeredHours = [];
  }
}

export default RegisterRepository;
