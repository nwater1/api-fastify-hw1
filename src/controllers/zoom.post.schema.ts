import { FastifySchema } from "fastify";

const zoomPostSchema: FastifySchema = {
  body: {
        type: 'object',
        required: ['roomName'],
        properties: {
            roomName: { type: 'string' }
        },
        additionalProperties: false
  },
  
  response: {
    
      201: {
        type: 'object',
        properties: {
          roomName: { type: 'string' },
          status: { type: 'string' }
        },
        additionalProperties: false
      },
  },
}

export default zoomPostSchema