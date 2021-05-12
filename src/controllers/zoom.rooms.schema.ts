import { FastifySchema } from "fastify";

const zoomRoomsSchema: FastifySchema = {

  response: {
    200: {
        type: 'array',
        additionalProperties: false
    },
  },
}

export default zoomRoomsSchema