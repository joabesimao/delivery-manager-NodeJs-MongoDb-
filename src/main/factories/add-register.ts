import { AddRegisterController } from "../../presentation/controllers/register-controllers/add-register/add-register";
import { DbAddRegister } from "../../data/usescases/register-usecases/add-register/db-add-register";
import { Controller } from "../../presentation/protocols/controller";
import { RegisterMongoRepository } from "../../infra/db/mongodb/register-repository/register";
import { LogMongoRepository } from "../../infra/db/mongodb/log-repository/log-mongo-repository";
import { LogControllerDecorator } from "../decorators/log";

export const makeAddRegisterController = (): Controller => {
  const registerRepository = new RegisterMongoRepository();
  const addRegister = new DbAddRegister(registerRepository);
  const registerController = new AddRegisterController(addRegister);
  const logError = new LogMongoRepository();
  return new LogControllerDecorator(registerController, logError);
};
