import { LogErrorRepository } from "../../data/protocols/db/register/log-error-repository";
import { Controller } from "../../presentation/protocols/controller";
import { HttpRequest, HttpResponse } from "../../presentation/protocols/http";

export class LogControllerDecorator implements Controller {
  constructor(
    private readonly controller: Controller,
    private readonly logErrorRepository: LogErrorRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const result = await this.controller.handle(httpRequest);
    if (result.statusCode === 500) {
      await this.logErrorRepository.log(result.body.stack);
    }
    return result;
  }
}
