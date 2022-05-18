// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { DatamuseWord } from '../../../common/types/Word'

const meansLikeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<DatamuseWord[]>
) => {
  const queryWord = req.query.word
  const words: DatamuseWord[] = (await axios(`https://api.datamuse.com/words?ml=${queryWord}`)).data
  res.status(200).json(words)
}

export default meansLikeHandler
