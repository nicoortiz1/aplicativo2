import { check, ValidationChain } from "express-validator";

export const createProductValidators: Array<ValidationChain> = [
  check("nombre")
    .isString()
    .isLength({ min: 3, max: 20 })
    .isLowercase(),
  check("descripcion")
    .isString()
    .isLength({ min: 10 }),
  check("precio")
    .isFloat({ min: 0 })
    .toFloat(),
  check("imageUrl")
    .isURL(),
];

export const mongoIdValidator: ValidationChain = check("id")
  .isMongoId()
  .withMessage("El ID proporcionado no es válido para MongoDB.");
