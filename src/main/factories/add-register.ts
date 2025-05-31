import { AddRegisterController } from "../../presentation/controllers/register-controllers/add-register/add-register";
import { DbAddRegister } from "../../data/usescases/register-usecases/add-register/db-add-register";
import { Controller } from "../../presentation/protocols/controller";
import { makeAddRegisterValidation } from "./add-register-validation";
import { RegisterMongoRepository } from "../../infra/db/mongodb/register-repository/register";

export const makeAddRegisterController = (): Controller => {
  const registerRepository = new RegisterMongoRepository();
  const addRegister = new DbAddRegister(registerRepository);
  const validation = makeAddRegisterValidation();
  const registerController = new AddRegisterController(addRegister);
  return registerController;
};
