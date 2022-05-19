import type { NextPage } from 'next'
import React, { useEffect, useContext } from 'react';

import { MainSearch } from '../styles/layout';

import HeroAlbum from '../components/HeroAlbum';

import ListOfAlbumCards from '../components/ListOfAlbumCards';


const ASAlbumDetail: NextPage = () => {

  return (
    <>
      <MainSearch>
        <HeroAlbum isAdded={true}>
        </HeroAlbum>

          <ListOfAlbumCards isAdded={true} />
      </MainSearch>
    </>
  )
}

export default ASAlbumDetail;