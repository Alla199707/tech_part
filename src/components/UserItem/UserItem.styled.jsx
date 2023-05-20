import styled from 'styled-components';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 480px;
  width: 380px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: rgb(235, 216, 255);
  background-image: linear-gradient(
    114.99deg,
    rgb(71, 28, 169) -0.99%,
    rgb(87, 54, 163) 54.28%,
    rgb(75, 42, 153) 78.99%
  );
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 23%) -2.5777px 6.87386px 20.6216px;
`;

export const Button = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  border: aliceblue;
  background-color: #ebd8ff;
  color: black;
  margin-bottom: 10px;
  text-transform: uppercase;
  box-shadow: rgb(0 0 0 / 25%) 0px 3.43693px 3.43693px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0px;
  height: 8px;
  width: 380px;
  background: rgb(235, 216, 255);
  box-shadow: rgb(0 0 0 / 6%) 0px 3.43693px 3.43693px,
    rgb(174 123 227) 0px -1.71846px 3.43693px inset,
    rgb(251 248 255) 0px 3.43693px 2.5777px inset;
`;

export const Circle = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  height: 80px;
  width: 80px;
  background: rgb(235, 216, 255);
  border-radius: 50px;
  box-shadow: rgb(0 0 0 / 6%) 0px 4.39163px 4.39163px,
    rgb(174 123 227) 0px -2.19582px 4.39163px inset,
    rgb(251 248 255) 0px 4.39163px 3.29372px inset;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 187px;
  left: 159px;
  height: 62px;
  width: 62px;
  background-size: cover;
  border-radius: 50px;
`;

export const Followers = styled.h3`
  margin: 5px 0 35px;
`;

export const Tweets = styled.h3`
  margin-top: 65px;
`;

export const Logo = styled.img`
  align-self: flex-start;
  margin-top: 25px;
  margin-left: 25px;
`;
