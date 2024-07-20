import connectMongoDB from "@/libs/mongodb";
import { TeamModel } from "@/models/teamModel";

const Industry = ['E.V', 'Green Construction', 'Renewable Energy'];

export default async function handler(req, res) {
  
  connectMongoDB();
  const teams = await TeamModel.find({level:4});

  const products = [
    [
      "Electric Car",
      "Dc Charging Station"
    ],
    [
      "Solar Water Heating System",
      "Green Roof"
    ],
    [
      "Energy Storage System",
      "Solar CookStove"
    ]
    ]

  let i=0;

  for (let team of teams){
    sector = team.newspaperset

    if (sector===0){
        const ran = Math.floor(Math.random()*2)
        await Level4.findOneAndUpdate({teamName:team.teamName},{$set:{products:products[0][ran]}});
    }
  }

  return res.status(200).json({message:'sets lag gaye hai'})

}