import { myLib } from "@node-org/my-lib";
import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: 'Hello API', myLib: myLib() };
  });
}
