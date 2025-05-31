import { Controller } from "../../presentation/protocols/controller";
import { DbdeleteOrderDelivery } from "../../data/usescases/order-delivery/delete-order-delivery/db-delete-order-delivery";
import { DeleteOrderDeliveryController } from "../../presentation/controllers/order-delivery-controllers/delete-order-delivery/delete-order-delivery";
import { OrderDeliveryMongoRepository } from "../../infra/db/mongodb/order-delivery-repository/order-delivery-repository";
import { LogMongoRepository } from "../../infra/db/mongodb/log-repository/log-mongo-repository";
import { LogControllerDecorator } from "../decorators/log";

export const makeDeleteOrderDeliveryController = (): Controller => {
  const deleteOrderDeliveryRepository = new OrderDeliveryMongoRepository();
  const deleteOrderDelivery = new DbdeleteOrderDelivery(
    deleteOrderDeliveryRepository
  );
  const deleteOrderDeliveryController = new DeleteOrderDeliveryController(
    deleteOrderDelivery
  );

  const logError = new LogMongoRepository();
  return new LogControllerDecorator(deleteOrderDeliveryController, logError);
};
