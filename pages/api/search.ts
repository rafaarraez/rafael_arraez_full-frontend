import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { customGet } from "../../utils/customGet";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query, offset } = req.query;

    const session = await getSession({ req });
    console.log({ query, offset });

    if (!session ||
        Math.floor(Date.now()) >= (session as any).accessTokenExpires * 1000) {
        res.status(401).json('unauthorized');
    }
    try {
        const searchResults = await customGet(
            `https://api.spotify.com/v1/search?q=${query}&market=from_token&&saved=from_token&offset=${offset}&type=album&limit=8`,
            session!
        );
        //console.log(searchResults);

        res.status(200).json(searchResults);
    } catch (error) {
        res.status(404).json({ error: 'error' })

    }

}