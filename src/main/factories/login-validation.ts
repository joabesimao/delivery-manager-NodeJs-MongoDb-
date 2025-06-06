import {
  ValidationComposite,
  EmailValidation,
  RequireFieldsValidation,
} from "../../presentation/helpers/validators";
import { Validation } from "../../presentation/protocols/validation";
import { EmailValidatorAdapter } from "../../utils/email-validator-adapter";

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["email", "password"]) {
    validations.push(new RequireFieldsValidation(field));
  }
  validations.push(new EmailValidation("email", new EmailValidatorAdapter()));
  return new ValidationComposite(validations);
};
