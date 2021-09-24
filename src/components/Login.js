import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Cta>
        <Ctaimg src="\images\cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          oisgnon noin oignioe noign ionioewn-jev[fewef] ekf k- qwj oidvjso iejj
          jvsc ejw hbjspj eujoivh ioehoip hv;oniuweb fcooewn-jev[fewef] ekf k-
          qwj oidvjso iejj jvsc ejw hbjspj eujoivh ioehoip hv;on
        </Description>
        <Ctaimg2 src="\images\cta-logo-two.png" />
      </Cta>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw+5px);
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;
    background-image: url("/images/login-background.jpg");
  }
`;
const Cta = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
const Ctaimg = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  letter-spacing: 1.3px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
    letter-spacing: 1.8px;
  }
`;
const Description = styled.p`
letter-spacing: 1.5px;
text-align: center;'
font-size: 11px;
line-height:1.5;
`;
const Ctaimg2 = styled.img``;
