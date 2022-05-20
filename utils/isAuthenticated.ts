import { useSession, signIn } from 'next-auth/react';
import { MySession } from "../types/types";

export const isAuthenticated = async (session: MySession | null) => {
    if (
        !session ||
        Math.floor(Date.now()) >= (session as any).accessTokenExpires * 1000
    ) {
        signIn();
    }
    return true;
};
