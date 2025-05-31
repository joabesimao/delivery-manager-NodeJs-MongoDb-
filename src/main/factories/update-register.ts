import { DbUpdateRegister } from "../../data/usescases/register-usecases/update-register/db-update-register";
import { LogMongoRepository } from "../../infra/db/mongodb/log-repository/log-mongo-repository";
import { RegisterMongoRepository } from "../../infra/db/mongodb/register-repository/register";
import { UpdateRegisterController } from "../../presentation/controllers/register-controllers/update-register/update-register";
import { Controller } from "../../presentation/protocols/controller";
import { LogControllerDecorator } from "../decorators/log";

export const makeUpdateRegisterController = (): Controller => {
  const updateRepository = new RegisterMongoRepository();
  const updateRegister = new DbUpdateRegister(updateRepository);
  const registerController = new UpdateRegisterController(updateRegister);
  const logError = new LogMongoRepository();
  return new LogControllerDecorator(registerController, logError);
};
