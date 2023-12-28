import { useState } from "react";
import styled from "styled-components";
import ProjectInfo from "./ProjectInfo";

export default function ProjectCard({ project }) {
  const { title, desc, image, source, preview } = project;
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    if (modal === false) {
      setModal(true);
      document.body.style.cssText = `
      width: 100%;
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      `;
    } else {
      setModal(false);
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
  };

  return (
    <>
      <ProjectBox
        onClick={handleModal}
        style={{
          backgroundImage: ` linear-gradient(rgba(255, 255, 255, 10%) , rgba(255, 255, 255, 10%)), url(${image})`,
        }}
      >
        {modal && (
          <ProjectInfo
            title={title}
            desc={desc}
            source={source}
            preview={preview}
            handleModal={handleModal}
          />
        )}
      </ProjectBox>
    </>
  );
}

const ProjectBox = styled.div`
  cursor: pointer;
  transition: 0.1s;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid var(--color-purple);

  &:hover {
    border: 1.8px solid var(--color-magenta);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  }
`;
