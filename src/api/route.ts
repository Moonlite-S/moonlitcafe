import { NextApiRequest, NextApiResponse } from "next"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch('https://api.github.com/repos/vercel/next.js');
    const data =await response.json();

    if (response.ok){
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: 'Error' })
    }
}