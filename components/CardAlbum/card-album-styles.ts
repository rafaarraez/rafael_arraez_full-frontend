import styled from "styled-components";

export const CardAlbumContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  // JUst for today
  color: var(--white);
  // end
  img {
    width: 100%;
  }
  .card-info__wrapper {
    padding-top: 25px;
    .card__title {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .card__date-pub {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.5rem;
      margin-bottom: 15px;
    }
  }
`;