
// ------------------------------------------------------
// This page is rendered if a route match is not found

import Head from "next/head"
import HeroAlbum from "../components/HeroAlbum"
import { HeroContainer } from "../components/HeroAlbum/hero-album-styles"
import SearchInput from "../components/SearchInput"
import { MainSearch } from "../styles/layout"

// ------------------------------------------------------
export default function Page404() {
    const statusCode = 404
    const title = "This page could not be found"
    return (
        <>
            <Head>
                <title>
                    {statusCode}: {title}
                </title>
            </Head>
            <HeroContainer>
                <div className="hero-info__wrapper">
                    <p className="hero__title">
                        404
                        <br />
                        <span>Not Found</span>
                    </p>

                    <p className="hero__subtitle">
                        This page could not be found
                    </p>
                </div>
            </HeroContainer>
        </>
    )
}
