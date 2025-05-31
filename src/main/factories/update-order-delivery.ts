import { DbUpdateOrderDelivery } from "../../data/usescases/order-delivery/update-order-delivery/db--update-order-delivery";
import { LogMongoRepository } from "../../infra/db/mongodb/log-repository/log-mongo-repository";
import { OrderDeliveryMongoRepository } from "../../infra/db/mongodb/order-delivery-repository/order-delivery-repository";
import { UpdateOrderDeliveryController } from "../../presentation/controllers/order-delivery-controllers/update-order-delivery/update-order-delivery";
import { Controller } from "../../presentation/protocols/controller";
import { LogControllerDecorator } from "../decorators/log";

export const makeUpdateOrderDeliveryController = (): Controller => {
  const updateRepository = new OrderDeliveryMongoRepository();
  const updateOrderDelivery = new DbUpdateOrderDelivery(updateRepository);
  const orderDeliveryController = new UpdateOrderDeliveryController(
    updateOrderDelivery
  );
  const logError = new LogMongoRepository();
  return new LogControllerDecorator(orderDeliveryController, logError);
};
