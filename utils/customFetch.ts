import { MySession } from "../types/types";

export const customFetch = async (url: string, session: MySession, method: string) => {
    try {
        const res = await fetch(url, {
            method,
            headers: {
                'Authorization': `Bearer ${session.accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then((res) => {
            return res.json()
        });

        return res;
    } catch (error) {
        return error;
    }

};
