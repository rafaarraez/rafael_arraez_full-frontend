import { DefaultSession } from "next-auth";

interface MyUser {
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    image?: string | null;
    accessToken?: string | null;
}

export interface MySession extends Omit<DefaultSession, "user"> {
    user?: MyUser;
    expires: string;
    accessToken?: string | null;
}

interface Image {
    height: number | null;
    url: string | null;
    width: number | null;
}

export interface Album {
    id: string;
    name: string;
    artists: [Artist];
    images?: [Image];
    album_type?: string;
    release_date?: string;
    total_tracks?: number;
    type: string;

}

export interface Artist {
    id: string;
    name: string;
    images?: [Image];
    followers?: {
        total: number;
    };
    genres?: [string];
}



export interface SearchResults {
    albums?: {
        items: Album[];
    };
}
