interface IRegisterConstructor {
  initialHour: Date;
  finalHour: Date;
}

class Register {
  initialHour: Date;

  finalHour: Date;

  constructor({ initialHour, finalHour }: IRegisterConstructor) {
    this.initialHour = initialHour;
    this.finalHour = finalHour;
  }
}

export default Register;
