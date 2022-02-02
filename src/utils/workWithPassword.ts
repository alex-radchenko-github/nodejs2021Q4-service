import { hashSync, compareSync } from 'bcryptjs';

export function hashPassword(password) {
  return hashSync(password, 7);
}

export function validationPassword(password, passwordInDb) {
  return compareSync(password, passwordInDb);
}
