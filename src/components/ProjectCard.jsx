import { useState } from "react";
import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";

export default function ProjectCard({ project }) {
  const { title, desc, image, source, preview } = project;
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    if (modal === false) {
      setModal(true);
      document.body.style.overflow = "hidden";
    } else {
      setModal(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <ProjectBox
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 35%), rgba(255, 255, 255, 70%)), url(${image})`,
        }}
      >
        <InnerBox>
          <ProjectTitle>{title}</ProjectTitle>
          <BtnGroup>
            <Btn href={source} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Btn>
            <Btn href={preview} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000"
                className="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </Btn>
            <InfoBtn onClick={handleModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000"
                className="bi bi-info-circle project-info-btn"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              {modal && (
                <ProjectInfo
                  title={title}
                  desc={desc}
                  modalClose={handleModal}
                />
              )}
            </InfoBtn>
          </BtnGroup>
        </InnerBox>
      </ProjectBox>
    </>
  );
}

const ProjectBox = styled.div`
  border: 1px solid var(--color-purple);
  transition: 0.1s;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    border-color: var(--color-magenta);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-purple);
  letter-spacing: -0.3px;
  margin-bottom: 24px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
`;

const Btn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;

  & > svg:hover {
    fill: var(--color-magenta);
    width: 22px;
    height: 22px;
  }
`;

const InfoBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;

  & > svg:hover {
    fill: var(--color-magenta);
    width: 22px;
    height: 22px;
  }
`;
