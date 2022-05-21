import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { customFetch } from "../../utils/customFetch";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query, offset } = req.query;

    const session = await getSession({ req });

    if (!session ||
        Math.floor(Date.now()) >= (session as any).accessTokenExpires * 1000) {
        res.status(401).json('unauthorized');
    }
    if (req.method == 'GET') {
        try {
            const searchResults = await customFetch(
                `https://api.spotify.com/v1/search?q=${query}&market=from_token&&saved=from_token&offset=${offset}&type=album&limit=8`,
                session!,
                req.method
            );
            if (searchResults.error) res.status(searchResults.error.status).json({ error: searchResults.error.message })

            res.status(200).json(searchResults);
        } catch (error) {
            console.log(error);
            res.status(401).json({ error: 'error' })
        }
    }
}