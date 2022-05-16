// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Word } from '../../../common/types/Word'

const meansLikeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Word[]>
) => {
  const queryWord = req.query.word
  const words: Word[] = (await axios(`https://api.datamuse.com/words?ml=${queryWord}`)).data
  res.status(200).json(words)
}

export default meansLikeHandler
