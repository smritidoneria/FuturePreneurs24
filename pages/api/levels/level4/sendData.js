// send answers
// send end time
// page no increment\
// waiting page:true

import connectMongoDB from "@/libs/mongodb";
import { Level4 } from "@/models/level4";
export default async function handler(req, res) {

  const session = await getSession({req});
  let teamId = await getTokenDetails(session);

  try {
    if (req.method !== "POST") {
      res.status(405).json({ message: "Method not allowed" });
      return;
    } else {
      const data = req.body;
      console.log(data);
      await connectMongoDB();

      await Level4.updateOne({ teamId: teamId}, { answers: data });

      return res.status(200).json({ message: "Data saved successfully." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Some error occured" });
  }
}
