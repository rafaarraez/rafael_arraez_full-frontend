import { DefaultSession } from "next-auth";

interface MyUser {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

export interface MySession extends Omit<DefaultSession, "user"> {
    user?: MyUser;
    expires: string;
    accessToken?: string;
    refreshToken?: string;
    username?: string;
    accessTokenExpires?: number | undefined;
}

interface Image {
    height: number | null;
    url: string | null;
    width: number | null;
}

export interface Album {
    album?: Album[];
    album_type: string;
    artists: Artist[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: Date;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface Artist {
    id: string;
    name: string;
    images?: Image[];
    followers?: {
        total: number;
    };
    genres?: string[];
    external_urls: ExternalUrls;
    type?: string;
}

export interface ExternalUrls {
    spotify: string;
}



export interface SearchResults {
    albums: {
        items: Album[];
    };
}

export interface Paginate {
    contentPerPage: number;
    countStart: number;
    countEnd: number;
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

export interface UsePagination {
    totalCount: number;
    pageSize: number;
    siblingCount: number;
    currentPage: number;
}
