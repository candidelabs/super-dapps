import * as React from "react";
import styled from "styled-components";
import poolTrophy from "../assets/pooltogether-trophy--detailed.svg";
import optimismpgf from "../assets/op-star-base.986bffb6870a97d9fde23c4a5a732959.svg"

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SBanner = styled.div`
  width: 275px;
  height: 280px;
  background: url(${poolTrophy}), url(${optimismpgf});
  background-size: 80px, 200px;
  background-repeat: no-repeat;
  background-position: center;
`;

const Banner = () => (
  <SBannerWrapper>
    <SBanner />
  </SBannerWrapper>
);

export default Banner;
