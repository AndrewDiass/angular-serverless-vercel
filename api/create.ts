import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  //const { email } = req.body

  res.json({ message: 'Deu certo '})
}
