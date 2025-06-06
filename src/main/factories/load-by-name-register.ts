import { DbLoadRegistersByName } from "../../data/usescases/register-usecases/load-register/db-load-register-by-name";
import { LogMongoRepository } from "../../infra/db/mongodb/log-repository/log-mongo-repository";
import { RegisterMongoRepository } from "../../infra/db/mongodb/register-repository/register";
import { LoadRegisterByNameController } from "../../presentation/controllers/register-controllers/load-register/load-register-by-name";
import { Controller } from "../../presentation/protocols/controller";
import { LogControllerDecorator } from "../decorators/log";

export const makeLoadRegisterByNameController = (): Controller => {
  const loadRegisterByNameRepository = new RegisterMongoRepository();
  const dbRegisterByName = new DbLoadRegistersByName(
    loadRegisterByNameRepository
  );
  const controllerRegisterByName = new LoadRegisterByNameController(
    dbRegisterByName
  );
  const logError = new LogMongoRepository();
  return new LogControllerDecorator(controllerRegisterByName, logError);
};
