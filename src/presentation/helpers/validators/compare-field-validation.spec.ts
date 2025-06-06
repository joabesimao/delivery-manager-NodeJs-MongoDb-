import { InvalidParamError, MissingParamError } from "../../errors";
import { CompareFieldsValidation } from "./compare-fields-validation";

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation("field", "fieldToCompare");
};

describe("Compare fields validation", () => {
  test("Should return a InvalidParamError if validation fails ", async () => {
    const sut = makeSut();
    const error = sut.validate({
      field: "any_name",
      fieldToCompare: "any_value",
    });
    expect(error).toEqual(new InvalidParamError("fieldToCompare"));
  });

  test("Should not return if validation succeeds", async () => {
    const sut = makeSut();
    const error = sut.validate({
      field: "any_value",
      fieldToCompare: "any_value",
    });
    expect(error).toBeFalsy();
  });
});
