import { DbLoadOrderDelivery } from "../../data/usescases/order-delivery/load-order-delivery/db-load-order-delivery";
import { LoadOrderDeliveryController } from "../../presentation/controllers/order-delivery-controllers/load-order-delivery/load-order-delivery";
import { Controller } from "../../presentation/protocols/controller";
import { OrderDeliveryMongoRepository } from "../../infra/db/mongodb/order-delivery-repository/order-delivery-repository";
import { LogControllerDecorator } from "../decorators/log";
import { LogMongoRepository } from "../../infra/db/mongodb/log-repository/log-mongo-repository";

export const makeLoadOrdersDeliveryController = (): Controller => {
  const loadOrderDeliveryRepository = new OrderDeliveryMongoRepository();
  const listOrdersOfDelivery = new DbLoadOrderDelivery(
    loadOrderDeliveryRepository
  );
  const loadOrderDeliveryController = new LoadOrderDeliveryController(
    listOrdersOfDelivery
  );
  const logError = new LogMongoRepository();
  return new LogControllerDecorator(loadOrderDeliveryController, logError);
};
