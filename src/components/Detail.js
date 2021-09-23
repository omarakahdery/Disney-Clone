import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" />
      </Background>
      <ImagTitle>
        <img src="https://upload.wikimedia.org/wikipedia/fr/1/1a/Bao_logo.png" />
      </ImagTitle>
      <Controls>
        <Play>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </Play>
        <Trailer>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </Trailer>
        <Add>
          <span>+</span>
        </Add>
        <GroupWatch>
          <img src="/images/group-icon.png" />
        </GroupWatch>
      </Controls>
      <SubTitle>2018 7m Famlily Fantasy kids animation</SubTitle>
      <Discription>
        oidfsnfoi osdf noin oinsfdiodsno oim[eomnfp vwepnv oiownvoin lks voiewo
        ooin klx bpiwnrv k ngoiwnev in oinsfdiodsno oim[eomnfp vwepnv oiownvoin
        lks voiewo ooin klx bpiwnrv k ngoiwne ngvoperbv oergbub
      </Discription>
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw+5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImagTitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 35vw;
  min-width: 200px;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const Play = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 20px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const Trailer = styled(Play)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const Add = styled.button`
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 20px;
  span {
    font-size: 32px;
    color: white;
  }
`;
const GroupWatch = styled(Add)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  margin-left: 30px;
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 20px;
`;
const Discription = styled.div`
  line-height: 1.4;

  margin-left: 30px;
  color: rgb(249, 249, 249);
  font-size: 20px;
  margin-top: 20px;
`;
