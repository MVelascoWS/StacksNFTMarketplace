import React from "react";
import styled from "styled-components";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

function authenticate() {
    showConnect({
      appDetails: {
        name: "Nova Mininverse",
        icon: window.location.origin + "/logo512.png",
      },
      redirectTo: "/",
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  }

export const Homepage = ({}) => {
    
  const ConnectWallet = (e) => {
    alert(`was clicked`);
  };
  return (
    <HomepageRoot>
      <HEADER>
        <Element27>
          <PurpleHeartText>STX</PurpleHeartText>
          <Background35>
            <FlexRow>
              <NovaIcon
                src={`https://file.rendit.io/n/QNURrWgjc4H79t1OroKb.png`}
              />
              <Menu>
                {[
                  {
                    childText: `Home`,
                  },
                  {
                    childText: `Marketplace`,
                  },
                  {
                    childText: `NFT Staking`,
                  },
                  {
                    childText: `NFT Burn`,
                  },
                  {
                    childText: `PVP`,
                  },
                  {
                    childText: `Guilds`,
                  },
                ].map((data) => (
                  <Text13>{data.childText}</Text13>
                ))}
              </Menu>
              <Background36
                onClick={authenticate}
              >
                <Wallet1
                  src={`https://file.rendit.io/n/36uHbi2B2SnYP8jHgw6t.svg`}
                />
                <Text19>Wallet Connect</Text19>
              </Background36>
            </FlexRow>
            <Line src={`https://file.rendit.io/n/crAF6h2mANpxPdHIzKdh.svg`} />
          </Background35>
        </Element27>
        <FlexRow1>
          <Text12>
            <Text20 color={`#ffffff`}>Discover, find,</Text20>
            <Text20 color={`#fac710`}>Collect your favorite</Text20>
            <Text22>Nova Miningverse NFTs</Text22>
            <Paragraph>
              Marketplace for Nova Miningverse collections NFTs
            </Paragraph>
          </Text12>
          <Skin src={`https://file.rendit.io/n/ipes5qJPdRrwhd1ySzVv.png`} />
        </FlexRow1>
      </HEADER>
      <EXPLORE>
        <FlexRow2>
          <Text23>Recently Listed</Text23>
          <ViewAll>
            <Text24>Explore more</Text24>
            <Element28 />
          </ViewAll>
        </FlexRow2>
        <List2 margin={`0px 0px 35px 0px`}>
          <Background19>
            <Element29>
              <Text25>Heroe</Text25>
              <Text26>#00000</Text26>
            </Element29>
            <Img4>
              <Like9>
                <Background22 />
                <Element14>Lv. 2</Element14>
              </Like9>
              <Background21>
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
              </Background21>
            </Img4>
            <Element30>
              <Infomation4>
                <Text8>
                  <Text27>Owned By</Text27>
                  <Text28>SP1P....GD7R</Text28>
                </Text8>
                <FlexColumn>
                  <Background20>
                    <Text29>STX</Text29>
                  </Background20>
                  <Price9>
                    <Text30>4.89 NMV</Text30>
                    <Text31>Price</Text31>
                  </Price9>
                </FlexColumn>
              </Infomation4>
              <Text26>Ignar Brannson</Text26>
            </Element30>
          </Background19>
          <Background19>
            <Element29>
              <Text25>Heroe</Text25>
              <Text26>#00000</Text26>
            </Element29>
            <Img4>
              <Like9>
                <Background22 />
                <Element14>Lv. 2</Element14>
              </Like9>
              <Background21>
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
              </Background21>
            </Img4>
            <Element30>
              <Infomation4>
                <Text8>
                  <Text27>Owned By</Text27>
                  <Text28>SP1P....GD7R</Text28>
                </Text8>
                <FlexColumn>
                  <Background20>
                    <Text29>STX</Text29>
                  </Background20>
                  <Price9>
                    <Text30>4.89 NMV</Text30>
                    <Text31>Price</Text31>
                  </Price9>
                </FlexColumn>
              </Infomation4>
              <Text26>Ignar Brannson</Text26>
            </Element30>
          </Background19>
          <Background19>
            <Element29>
              <Text25>Heroe</Text25>
              <Text26>#00000</Text26>
            </Element29>
            <Img4>
              <Like9>
                <Background22 />
                <Element14>Lv. 2</Element14>
              </Like9>
              <Background21>
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
              </Background21>
            </Img4>
            <Element30>
              <Infomation4>
                <Text8>
                  <Text27>Owned By</Text27>
                  <Text28>SP1P....GD7R</Text28>
                </Text8>
                <FlexColumn>
                  <Background20>
                    <Text29>STX</Text29>
                  </Background20>
                  <Price9>
                    <Text30>4.89 NMV</Text30>
                    <Text31>Price</Text31>
                  </Price9>
                </FlexColumn>
              </Infomation4>
              <Text26>Ignar Brannson</Text26>
            </Element30>
          </Background19>
          <Background19>
            <Element29>
              <Text25>Heroe</Text25>
              <Text26>#00000</Text26>
            </Element29>
            <Img4>
              <Like9>
                <Background22 />
                <Element14>Lv. 2</Element14>
              </Like9>
              <Background21>
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
              </Background21>
            </Img4>
            <Element30>
              <Infomation4>
                <Text8>
                  <Text27>Owned By</Text27>
                  <Text28>SP1P....GD7R</Text28>
                </Text8>
                <FlexColumn>
                  <Background20>
                    <Text29>STX</Text29>
                  </Background20>
                  <Price9>
                    <Text30>4.89 NMV</Text30>
                    <Text31>Price</Text31>
                  </Price9>
                </FlexColumn>
              </Infomation4>
              <Text26>Ignar Brannson</Text26>
            </Element30>
          </Background19>
        </List2>
        <List2 margin={`0`}>
          <Background19>
            <Element29>
              <Text25>Heroe</Text25>
              <Text26>#00000</Text26>
            </Element29>
            <Img4>
              <Like9>
                <Background22 />
                <Element14>Lv. 2</Element14>
              </Like9>
              <Background21>
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
              </Background21>
            </Img4>
            <Element30>
              <Infomation4>
                <Text8>
                  <Text27>Owned By</Text27>
                  <Text28>SP1P....GD7R</Text28>
                </Text8>
                <FlexColumn>
                  <Background20>
                    <Text29>STX</Text29>
                  </Background20>
                  <Price9>
                    <Text30>4.89 NMV</Text30>
                    <Text31>Price</Text31>
                  </Price9>
                </FlexColumn>
              </Infomation4>
              <Text26>Ignar Brannson</Text26>
            </Element30>
          </Background19>
          <Background19>
            <Element29>
              <Text25>Heroe</Text25>
              <Text26>#00000</Text26>
            </Element29>
            <Img4>
              <Like9>
                <Background22 />
                <Element14>Lv. 2</Element14>
              </Like9>
              <Background21>
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
              </Background21>
            </Img4>
            <Element30>
              <Infomation4>
                <Text8>
                  <Text27>Owned By</Text27>
                  <Text28>SP1P....GD7R</Text28>
                </Text8>
                <FlexColumn>
                  <Background20>
                    <Text29>STX</Text29>
                  </Background20>
                  <Price9>
                    <Text30>4.89 NMV</Text30>
                    <Text31>Price</Text31>
                  </Price9>
                </FlexColumn>
              </Infomation4>
              <Text26>Ignar Brannson</Text26>
            </Element30>
          </Background19>
          <Background19>
            <Element29>
              <Text25>Heroe</Text25>
              <Text26>#00000</Text26>
            </Element29>
            <Img4>
              <Like9>
                <Background22 />
                <Element14>Lv. 2</Element14>
              </Like9>
              <Background21>
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
              </Background21>
            </Img4>
            <Element30>
              <Infomation4>
                <Text8>
                  <Text27>Owned By</Text27>
                  <Text28>SP1P....GD7R</Text28>
                </Text8>
                <FlexColumn>
                  <Background20>
                    <Text29>STX</Text29>
                  </Background20>
                  <Price9>
                    <Text30>4.89 NMV</Text30>
                    <Text31>Price</Text31>
                  </Price9>
                </FlexColumn>
              </Infomation4>
              <Text26>Ignar Brannson</Text26>
            </Element30>
          </Background19>
          <Background19>
            <Element29>
              <Text25>Heroe</Text25>
              <Text26>#00000</Text26>
            </Element29>
            <Img4>
              <Like9>
                <Background22 />
                <Element14>Lv. 2</Element14>
              </Like9>
              <Background21>
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
                <StarBoldPx23
                  src={`https://file.rendit.io/n/Nq0TdpD1wBfM24Kfl25m.svg`}
                />
                <StarBoldPx24
                  src={`https://file.rendit.io/n/SlFSD9dM0HcmW8bIxda4.svg`}
                />
              </Background21>
            </Img4>
            <Element30>
              <Infomation4>
                <Text8>
                  <Text27>Owned By</Text27>
                  <Text28>SP1P....GD7R</Text28>
                </Text8>
                <FlexColumn>
                  <Background20>
                    <Text29>STX</Text29>
                  </Background20>
                  <Price9>
                    <Text30>4.89 NMV</Text30>
                    <Text31>Price</Text31>
                  </Price9>
                </FlexColumn>
              </Infomation4>
              <Text26>Ignar Brannson</Text26>
            </Element30>
          </Background19>
        </List2>
      </EXPLORE>
      <List>
        <SetUpYourWallet1 gap={`24px`}>
          <Background>
            <Wallet>
              <Path src={`https://file.rendit.io/n/iYmp6ldC9eTF8LbwrdBB.svg`} />
              <Pathpath>
                <Pathpath1
                  src={`https://file.rendit.io/n/jVD67XKy9vbOmM9CcBX2.svg`}
                />
              </Pathpath>
            </Wallet>
          </Background>
          <SetUpYourWallet1 gap={`10px`}>
            <Text89>Set up your wallet</Text89>
            <Paragraph1>
              Wallet that is functional for NFT purchasing. You may have a
              Stacks wallet like Hero Wallet.
            </Paragraph1>
          </SetUpYourWallet1>
        </SetUpYourWallet1>
        <SetUpYourWallet1 gap={`24px`}>
          <Background1>
            <Fill>
              <Fill1
                src={`https://file.rendit.io/n/EsrBegrPGC0lbLesfDDx.svg`}
              />
            </Fill>
          </Background1>
          <SetUpYourWallet1 gap={`10px`}>
            <Text90>Buy your NFTs</Text90>
            <Paragraph1>
              Sed ut perspiciatis un de omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </Paragraph1>
          </SetUpYourWallet1>
        </SetUpYourWallet1>
        <SetUpYourWallet1 gap={`24px`}>
          <Background2>
            <Bookmark1>
              <WhiteRectangle />
              <Bookmark
                src={`https://file.rendit.io/n/UfwpH17t8HaTpDeGMHz5.svg`}
              />
            </Bookmark1>
          </Background2>
          <SetUpYourWallet1 gap={`10px`}>
            <Text89>List them for sale</Text89>
            <Paragraph1>
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs!
            </Paragraph1>
          </SetUpYourWallet1>
        </SetUpYourWallet1>
      </List>
      <Background37>
        <AboutUs1>
          <NovaIcon1
            src={`https://file.rendit.io/n/rfFlJa8QUyjw2AG0vFnk.png`}
          />
          <Paragraph4>
            Lorem ipsum dolor sit amet,consectetur
            <br />
            adipisicing elit. Quis non, fugit totam vel
            <br />
            laboriosam vitae.
          </Paragraph4>
          <ListSocial>
            <Background39>
              <BrandFacebook
                src={`https://file.rendit.io/n/fuxt0JKvbtAMYby4xydG.svg`}
              />
            </Background39>
            <Background39>
              <BrandFacebook
                src={`https://file.rendit.io/n/7TZbeUACJvOqQ9H1cHqI.svg`}
              />
            </Background39>
          </ListSocial>
        </AboutUs1>
        <Community>
          <Text13>Project</Text13>
          <Text93>About Us</Text93>
          <Text93>Contact Us</Text93>
          <Text93>Discover</Text93>
        </Community>
      </Background37>
    </HomepageRoot>
  );
};
const Text13 = styled.div`
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
`;
const Text20 = styled.div`
  font-size: 56px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 68px;
  color: ${(props) => props.color};
`;
const List2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const Background19 = styled.div`
  height: 431.66px;
  background-color: #343444;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 9.17px 20px;
`;
const Element29 = styled.div`
  height: 28.18px;
  position: relative;
  min-width: 290px;
  margin: 0px 0px 2.82px 0px;
`;
const Text25 = styled.div`
  text-align: right;
  width: 216px;
  height: 28.18px;
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
  position: absolute;
  left: 74px;
`;
const Text26 = styled.div`
  width: 216px;
  height: 28.18px;
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
  position: absolute;
`;
const Img4 = styled.div`
  background-image: url("https://file.rendit.io/n/9JvCYrqaBBVJRN5N2tan.png");
  background-size: cover;
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 84.41px;
  align-items: center;
  padding: 13px 12px 261.82px 14px;
  margin: 0px 0px 10px 0px;
`;
const Like9 = styled.div`
  width: 70.59px;
  height: 28.18px;
  position: relative;
`;
const Background22 = styled.div`
  width: 63.5px;
  height: 25px;
  background-color: #13131e;
  position: absolute;
  border-radius: 10px;
`;
const Element14 = styled.div`
  width: 60.59px;
  height: 28.18px;
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
  position: absolute;
  left: 10px;
`;
const Background21 = styled.div`
  width: 109px;
  height: 15.15px;
  background-color: #13131e;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  align-items: flex-end;
  border-radius: 10px;
  padding: 4px 0px 5.85px 0px;
`;
const StarBoldPx24 = styled.img`
  width: 15px;
  height: 15px;
`;
const StarBoldPx23 = styled.img`
  width: 15px;
  height: 15px;
  align-self: flex-start;
`;
const Element30 = styled.div`
  height: 82.83px;
  position: relative;
  min-width: 290px;
`;
const Infomation4 = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  flex-direction: row;
  gap: 55px;
  justify-content: center;
  align-items: flex-end;
`;
const Text8 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.69px;
  align-items: center;
  margin: 0px 0px 3.84px 0px;
`;
const Text27 = styled.div`
  width: 60px;
  height: 21.67px;
  font-size: 13px;
  font-family: Urbanist;
  line-height: 20px;
  color: #8989a0;
  align-self: flex-start;
`;
const Text28 = styled.div`
  width: 150px;
  height: 24.34px;
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 22px;
  color: #ebebeb;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 85px;
  display: flex;
  flex-direction: column;
  gap: 0.28px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Background20 = styled.div`
  width: 49px;
  background-color: #5042fb;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 2.17px 0px;
`;
const Text29 = styled.div`
  text-align: center;
  width: 26px;
  height: 21.67px;
  font-size: 12px;
  font-family: Urbanist;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
`;
const Price9 = styled.div`
  width: 85px;
  height: 51.54px;
  position: relative;
`;
const Text30 = styled.div`
  width: 85px;
  height: 28.18px;
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
  position: absolute;
  top: 23.37px;
`;
const Text31 = styled.div`
  text-align: right;
  width: 28px;
  height: 21.67px;
  font-size: 13px;
  font-family: Urbanist;
  line-height: 20px;
  color: #8989a0;
  position: absolute;
  left: 52px;
`;
const SetUpYourWallet1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Text89 = styled.div`
  font-size: 24px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 30px;
  text-transform: capitalize;
  color: #ffffff;
`;
const Paragraph1 = styled.div`
  text-align: center;
  width: 321px;
  font-size: 14px;
  font-family: Urbanist;
  line-height: 22px;
  color: #ffffff;
`;
const Background39 = styled.div`
  height: 40px;
  background-color: #343444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 8px;
`;
const BrandFacebook = styled.img`
  width: 24px;
  height: 24px;
`;
const Text93 = styled.div`
  font-size: 14px;
  font-family: Urbanist;
  line-height: 22px;
  color: #ffffff;
`;
const HomepageRoot = styled.div`
  width: 1920px;
  height: 2730px;
  background-color: #3f2b46;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const HEADER = styled.div`
  height: 663px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 0px 48px 0px;
`;
const Element27 = styled.div`
  height: 80px;
  position: relative;
  min-width: 1920px;
`;
const PurpleHeartText = styled.div`
  text-align: center;
  display: flex;
  font-size: 12px;
  font-family: Urbanist;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #5042fb;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 26px;
  left: 1350px;
  border-radius: 10px;
  padding: 4px 30px;
`;
const Background35 = styled.div`
  height: 80px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 255px;
`;
const NovaIcon = styled.img`
  width: 113px;
  height: 64px;
  align-self: center;
  margin: 0px 259px 0px 0px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 44px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12px 199px 0px 0px;
`;
const Background36 = styled.button`
  border-color: #fac710;
  border-style: solid;
  width: 196px;
  display: flex;
  flex-direction: row;
  gap: 9.67px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  padding: 12px 0px;
  margin: 1px 0px 0px 0px;
  border-width: 1px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const Wallet1 = styled.img`
  width: 16.67px;
  height: 15px;
`;
const Text19 = styled.div`
  font-size: 15px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 22px;
  color: #ffffff;
`;
const Line = styled.img`
  width: 1920px;
  height: 1px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 220px;
  align-items: center;
  padding: 0px 255px;
`;
const Text12 = styled.div`
  height: 264px;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text22 = styled.div`
  font-size: 56px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 68px;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 30px 0px;
`;
const Paragraph = styled.div`
  font-size: 20px;
  font-family: Urbanist;
  line-height: 30px;
  text-transform: capitalize;
  color: #ebebeb;
`;
const Skin = styled.img`
  width: 362px;
  height: 450px;
`;
const EXPLORE = styled.div`
  height: 1018px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 226px 0px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1040px;
  align-items: center;
  margin: 0px 0px 39px 0px;
`;
const Text23 = styled.div`
  font-size: 36px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 44px;
  text-transform: capitalize;
  color: #ffffff;
`;
const ViewAll = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 9px 0px;
`;
const Text24 = styled.div`
  font-size: 14px;
  font-family: Urbanist;
  font-weight: 700;
  letter-spacing: 1.4px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
`;
const Element28 = styled.div`
  width: 118px;
  height: 1px;
  background-image: linear-gradient(217deg, #e24fe5 0%, #4b50e6 100%);
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 219px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin: 0px 0px 226px 244px;
`;
const Background = styled.div`
  height: 56px;
  background-color: #5042fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 0px 16px;
`;
const Wallet = styled.div`
  width: 24px;
  height: 21px;
  position: relative;
`;
const Path = styled.img`
  width: 7.53px;
  height: 4.65px;
  position: absolute;
  top: 8.02px;
  left: 16.47px;
`;
const Pathpath = styled.div`
  height: 11.92px;
  background-image: url("https://file.rendit.io/n/AM9HjEBUG9uGcU0nnwYI.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4.54px 10.62px 4.54px 4.77px;
`;
const Pathpath1 = styled.img`
  width: 8.61px;
  height: 1.74px;
`;
const Background1 = styled.div`
  height: 56px;
  background-color: #9734fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 0px 18px;
`;
const Fill = styled.div`
  height: 12px;
  background-image: url("https://file.rendit.io/n/MDgc9555eK7Ubo1nNjdb.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 11px 4px 4px;
`;
const Fill1 = styled.img`
  width: 5px;
  height: 5px;
`;
const Text90 = styled.div`
  font-size: 24px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 30px;
  text-transform: capitalize;
  color: #ffffff;
  align-self: flex-start;
  margin: 0px 0px 0px 80px;
`;
const Background2 = styled.div`
  width: 56px;
  background-color: #df4848;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 0px;
`;
const Bookmark1 = styled.div`
  width: 20px;
  height: 24px;
  position: relative;
`;
const WhiteRectangle = styled.div`
  width: 13px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 6px;
  left: 3px;
`;
const Bookmark = styled.img`
  width: 20px;
  height: 24px;
  position: absolute;
`;
const Background37 = styled.div`
  width: 1410px;
  background-image: url("https://file.rendit.io/n/H3pEUYV7qQ4vOZiUgDF2.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 123px;
  align-items: center;
  padding: 87px 255px 80px 255px;
`;
const AboutUs1 = styled.div`
  height: 195px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const NovaIcon1 = styled.img`
  width: 72px;
  height: 41px;
  margin: 0px 0px 20px 0px;
`;
const Paragraph4 = styled.div`
  font-size: 14px;
  font-family: Urbanist;
  line-height: 22px;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 28px 0px;
`;
const ListSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;
const Community = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin: 11px 0px 0px 0px;
`;