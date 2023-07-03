import { useState, forwardRef } from "react";
import styled from "styled-components";

function Profile(props, ref) {
  const [isFlip, setFlip] = useState(true);

  const handleFlip = () => {
    setFlip(!isFlip);
  };

  return (
    <>
      <Container ref={(profileRef) => (ref.current[1] = profileRef)}>
        <Title>Profile</Title>
        <ProfileGroup>
          <ImgBox>
            <ProfileImg
              alt="profile photo"
              src={
                isFlip
                  ? "/images/nayoungPhoto.jpg"
                  : "/images/nayoungIDPhoto.jpg"
              }
              style={{ borderColor: isFlip ? "#8400FF" : "#000" }}
            />
            <Toggle
              onClick={handleFlip}
              style={{ backgroundColor: isFlip ? "#8400FF" : "#C9C9C9" }}
            >
              <ToggleCircle
                style={{ left: isFlip ? "14px" : "2px" }}
              ></ToggleCircle>
            </Toggle>
          </ImgBox>
          <UlBox>
            <UlBoxH3>
              <span>FRONT-END </span>DEV.
            </UlBoxH3>
            <InfoUl>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                <span>황나영</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-calendar-event"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <span>1996.12.8</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <span> hnaa0@naver.com</span>
              </li>
            </InfoUl>
            <LinkUl>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/hnaa0"
                ></a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <Tooltip>Github</Tooltip>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://cerulean-avocado-b54.notion.site/FE-Developer-bb13e403fa49496aac917eb3b59a0550"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-file-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </a>
                <Tooltip>Resume</Tooltip>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://velog.io/@hnaa0"
                ></a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-archive"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <Tooltip>Velog</Tooltip>
              </li>
            </LinkUl>
          </UlBox>
        </ProfileGroup>
      </Container>
    </>
  );
}

const ProfileWithRef = forwardRef(Profile);
export default ProfileWithRef;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 152px 16px;
`;

const Title = styled.h2`
  font-size: 56px;
  font-style: italic;
  margin-bottom: 52px;
`;

const ProfileGroup = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  margin-right: 24px;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 260px;
  object-fit: cover;
  border: 1px solid var(--color-black);
`;

const Toggle = styled.div`
  position: relative;
  margin-top: 8px;
  width: 32px;
  height: 20px;
  border-radius: 12px;
  cursor: pointer;
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  transform: translate(0, -50%);
  border-radius: 50%;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const UlBox = styled.div`
  padding: 8px 0px;
  font-size: 20px;
`;

const UlBoxH3 = styled.h3`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1.2px;

  & > span {
    color: var(--color-magenta);
  }
`;

const InfoUl = styled.ul`
  margin-top: 20px;
  margin-bottom: 52px;

  & > li {
    display: block;
    margin-bottom: 16px;
  }

  & > li > svg {
    vertical-align: middle;
    margin-right: 16px;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: 32px;
  left: 12px;
  visibility: hidden;
  width: fit-content;
  text-align: center;
  color: var(--color-white);
  font-size: 12px;
  padding: 4px;
  border-radius: 4px;
  background-color: var(--color-magenta);
`;

const LinkUl = styled.ul`
  display: flex;

  & > li {
    position: relative;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      & span {
        visibility: visible;
      }
    }
  }
`;
