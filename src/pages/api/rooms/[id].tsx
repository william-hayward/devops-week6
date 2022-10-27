import Room from "../../../../models/Room";
import dbConnect from "../../../../lib/dbConnect";

export default async function handler(req, res) {
  const {
    query: {id},
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "PUT":
      try {
        const room = await Room.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!room) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: room});
      } catch (e) {
        res.status(400).json({success: false});
      }
      break;

    case "DELETE":
      try {
        const room = Room.findByIdAndDelete(id);
        if (!room) {
          return res.status(400).json({success: false});
        }
      } catch (e) {
        res.status(400).json({success: false});
      }
  }
}
