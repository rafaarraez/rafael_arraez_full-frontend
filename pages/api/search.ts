import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { customGet } from "../../utils/customGet";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = req.query?.q;
    const session = await getSession({ req });

    if (!session) {
        res.status(401).json('unauthorized');
    }

    const searchResults = await customGet(
        `https://api.spotify.com/v1/search?q=${query}&market=from_token&type=album&limit=2&page=2`,
        session!
    );
    res.status(200).json(searchResults);
}