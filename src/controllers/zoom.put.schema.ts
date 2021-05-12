import { FastifySchema } from "fastify";

const zoomPutSchema: FastifySchema = {
  body: {
        type: 'object',
        required: ['roomName'],
        properties: {
            roomName: { type: 'string' }
        },
        additionalProperties: false
  },
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

export default zoomPutSchema