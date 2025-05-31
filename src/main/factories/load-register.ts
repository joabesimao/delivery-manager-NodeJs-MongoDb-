import { Controller } from "../../presentation/protocols/controller";
import { LoadRegistersController } from "../../presentation/controllers/register-controllers/load-register/load-register";
import { DbLoadRegisters } from "../../data/usescases/register-usecases/load-register/db-load-register";
import { RegisterMongoRepository } from "../../infra/db/mongodb/register-repository/register";
import { LogMongoRepository } from "../../infra/db/mongodb/log-repository/log-mongo-repository";
import { LogControllerDecorator } from "../decorators/log";

export const makeLoadRegisterController = (): Controller => {
  const loadRegisterRepository = new RegisterMongoRepository();
  const listRegister = new DbLoadRegisters(loadRegisterRepository);
  const loadRegisterController = new LoadRegistersController(listRegister);
  const logError = new LogMongoRepository();
  return new LogControllerDecorator(loadRegisterController, logError);
};
