/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Live typed full-stack
 * API documentation for Fastify
 * OpenAPI spec version: 1.0.0
 */
export type DeleteUser404 = {
  message: string;
};

export type DeleteUser200 = { [key: string]: unknown };

export type EditUser404 = {
  message: string;
};

/**
 * @nullable
 */
export type EditUser201 = typeof EditUser201[keyof typeof EditUser201] | null;


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EditUser201 = {
  null: 'null',
} as const;

export type EditUserBody = {
  age: number;
  email: string;
  name: string;
};

export type GetUser404 = {
  message: string;
};

export type GetUser200 = {
  age: number;
  email: string;
  id: string;
  name: string;
};

export type GetUsers200Item = {
  age: number;
  email: string;
  id: string;
  name: string;
};

export type CreateUser201 = {
  age: number;
  email: string;
  id: string;
  name: string;
};

export type CreateUserBody = {
  age: number;
  email: string;
  name: string;
};

