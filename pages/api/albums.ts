import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { customFetch } from "../../utils/customFetch";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getSession({ req });

    const { id } = req.query;

    if (!session ||
        Math.floor(Date.now()) >= (session as any).accessTokenExpires * 1000) {
        res.status(401).json('unauthorized');
    }

    if (req.method == 'GET') {
        const searchResults = await customFetch(
            `https://api.spotify.com/v1/me/albums?limit=50`,
            session!,
            req.method
        );
        res.status(200).json(searchResults);
    }

    if (req.method == 'DELETE') {
        console.log(req.method, id);
        try {
            const searchResults = await customFetch(
                `https://api.spotify.com/v1/me/albums?ids=${id}`,
                session!,
                req.method
            );
            res.status(200).json({ success: true, message: 'the album was saved' });
        } catch (error) {
            res.status(400).json({ error })
        }
    }

    if (req.method == 'PUT') {
        console.log(req.method, id);
        try {
            const searchResults = await customFetch(
                `https://api.spotify.com/v1/me/albums?ids=${id}`,
                session!,
                req.method
            );
            res.status(200).json({ success: true, message: 'the album was saved' });
        } catch (error) {
            res.status(400).json({ error })
        }

    }

}