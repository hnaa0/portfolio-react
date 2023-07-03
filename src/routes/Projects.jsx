import styled from "styled-components";
import { forwardRef } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects(props, ref) {
  const projects = [
    {
      title: "Coupang Markups",
      desc: "쿠팡 웹페이지를 피그마 디자인 가이드에 맞추어 웹표준과 웹접근성을 준수하면서 마크업한 작업물입니다.",
      image: `images/coupang.png`,
      source: "https://github.com/hnaa0/coupang-markups",
      preview: "https://hnaa0.github.io/coupang-markups/",
    },
    {
      title: "Painting Board",
      desc: "Javascript로 만든 그림판입니다.",
      image: "images/paintingboard.png",
      source: "https://github.com/hnaa0/painting-board",
      preview: "https://hnaa0.github.io/painting-board/",
    },
    {
      title: "Movie app",
      desc: "TMDB api를 활용해 구현한 영화 리스트앱입니다. 현재 한국에서 상영중인 영화와 개봉 예정인 영화를 확인할 수 있습니다. 영화 포스터 클릭 시 모달창으로 상세 정보를 제공합니다.",
      image: "images/movieapp.png",
      source: "https://github.com/hnaa0/movie-app",
      preview: "https://movie-app-hnaa0.vercel.app",
    },
    {
      title: "TODOList",
      desc: "리스트 생성, 체크, 삭제 기능을 구현한 투두리스트입니다.",
      image: "images/todolist.png",
      source: "https://github.com/hnaa0/react-todolist",
      preview: "https://hnaa0.github.io/react-todolist/",
    },
    {
      title: "React Shop",
      desc: "Fakestore api를 활용해 구현한 구현한 쇼핑몰입니다. 테마 변경, 아이템 검색, 장바구니 기능이 있습니다.",
      image: "images/reactshop.png",
      source: "https://github.com/hnaa0/react-shop",
      preview: "https://react-shop-hnaa0.vercel.app/",
    },
    {
      title: "Weather Wear",
      desc: "현재 서울의 날씨 정보와 권장 옷차림 정보를 제공합니다.",
      image: "images/weatherwear.png",
      source: "https://github.com/hnaa0/weather-wear",
      preview: "https://weather-wear.vercel.app/",
    },
  ];

  return (
    <>
      <Container ref={(projectsRef) => (ref.current[2] = projectsRef)}>
        <Title>Projects</Title>
        <ProjectsGroup>
          {projects.map((proj, index) => {
            return <ProjectCard key={`project${index}`} project={proj} />;
          })}
        </ProjectsGroup>
      </Container>
    </>
  );
}

const ProjectsWithRef = forwardRef(Projects);
export default ProjectsWithRef;

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

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 48px;
    margin-bottom: 36px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 40px;
    margin-bottom: 36px;
  }
`;

const ProjectsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 240px;
  grid-gap: 16px;
  width: 1000px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 700px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 350px;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
  }
`;
