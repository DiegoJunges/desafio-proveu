import Register from "../models/Register";

class RegisterRepository {
  private registeredHours: Register[];

  constructor() {
    this.registeredHours = [];
  }

  public timeConvert(n: number) {
    const num = n;
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${num} minutes = ${rhours} hour(s) and ${rminutes} minute(s).`;
  }
}

export default RegisterRepository;
