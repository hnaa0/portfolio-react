import styled from "styled-components";

export default function ProjectInfo({ modalClose, title, desc }) {
  return (
    <Container
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Modal>
        <CloseBtn onClick={modalClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </CloseBtn>
        <TextGroup>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </TextGroup>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(99, 99, 99, 0.1);
`;

const Modal = styled.section`
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 250px;
  cursor: default;
  border: 1px solid var(--color-purple);
  background-color: var(--color-white);
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin-left: auto;
  cursor: pointer;

  & > svg {
    fill: var(--color-purple);
  }
`;

const TextGroup = styled.div`
  width: 100%;
  padding: 0 20px 20px 20px;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  font-style: italic;
  letter-spacing: -1px;
  margin-bottom: 28px;
`;

const Desc = styled.p`
  line-height: 1.2;
`;
