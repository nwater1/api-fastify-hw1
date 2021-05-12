import { FastifyReply, FastifyRequest, RequestGenericInterface } from 'fastify';
import { Controller, GET, POST, PUT, DELETE, getInstanceByToken } from 'fastify-decorators';
import zoomRoomsSchema from './zoom.rooms.schema';
import zoomRoomSchema from './zoom.room.schema';
import zoomPostSchema from './zoom.post.schema';
import zoomPutSchema from './zoom.put.schema';
import zoomDeleteSchema from './zoom.delete.schema';
import roomData from '../data/roomData'


@Controller({ route: '/api' })
export default class ZoomController {

  // private zoomService = getInstanceByToken<ZoomService>(ZoomService);


  ///////////GET/////////////
  @GET({
    url: '/rooms',
     options: {
       schema: {
           response: zoomRoomsSchema.response
       }
     }
  })

  async roomsHandler(req: FastifyRequest, reply: FastifyReply): Promise<object> {
    return reply.send(roomData)
  }
  @GET({
    url: '/rooms/:id',
     options: {
       schema: {
           params: zoomRoomSchema.params,
           response: zoomRoomSchema.response
       }
     }
  })

  async roomGETHandler(req: FastifyRequest, reply: FastifyReply): Promise<object> {
      let roomId: any = req.params
      if (roomId.id == 0) roomId.id = 1
      let room : object= roomData[roomId.id - 1]
      if (room !== undefined) {
        return reply.status(200).send(room)
      } else {
          return reply.status(404).send("Not found")
      }
  }
  ///////////POST/////////////
  @POST({
    url: '/rooms',
     options: {
       schema: {
           body: zoomPostSchema.body,
           response: zoomPostSchema.response
       }
    
     }
  })

  async roomPOSTHandler(req: FastifyRequest, reply: FastifyReply): Promise<object> {
      let newRoom: any = req.body
      newRoom.status = 'inactive'
      let addRoom = roomData.push(newRoom)
    return reply.status(201).send(newRoom)
  }
  ///////////PUT/////////////
  @PUT({
    url: '/rooms/:id',
     options: {
       schema: {
           body: zoomPutSchema.body,
           params: zoomPutSchema.params,
           response: zoomPutSchema.response
       }
     }
  })

  async roomPUTHandler(req: FastifyRequest, reply: FastifyReply): Promise<object> {
    let roomId: any = req.params
    if (roomId.id == 0) roomId.id = 1
    let room = roomData[roomId.id - 1]
    if (room !== undefined) {
        let newName: any = req.body
        room.roomName = newName.roomName
        return reply.status(200).send(room)
      } else {
          return reply.status(404).send("Not found")
      }
  }
  ///////////DELETE/////////////
  @DELETE({
    url: '/rooms/:id',
     options: {
       schema: {
           params: zoomDeleteSchema.params,
           response: zoomDeleteSchema.response
       }
     }
  })

  async roomDELETEHandler(req: FastifyRequest, reply: FastifyReply): Promise<object> {
    let roomId: any = req.params
    if (roomId.id == 0) roomId.id = 1
    let room = roomData[roomId.id - 1]
    if (room !== undefined) {
        let deleteRoom = roomData.splice(roomId.id - 1, 1)
        return reply.status(200).send(deleteRoom[0])
    } else {
          return reply.status(404).send("Not found")
      }
  }
}
