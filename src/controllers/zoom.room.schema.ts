import { FastifySchema } from "fastify";

const zoomRoomSchema: FastifySchema = {

  params: {
    id: { type: 'number' },
  },
  response: {
    200: {
        type: 'object',
        properties: {
          roomName: { type: 'string' },
          status: { type: 'string' }
        },
        additionalProperties: false
      },
  },
}

export default zoomRoomSchema