import React from "react";
import { images } from "../assets/images";
import { Card_Four, Card_One, Card_Three } from "../components/cards";
import Chapters from "../layouts/contents/chapters/Chapter";
import MainLayoutAuth from "../layouts/MainLayoutAuth";
import Card_Five from "../components/cards/Card_Five";

const Test = () => {
  let arr = [
    { title: "about us ", description: "Had denoting " },
    { title: "about us ", description: "Had denoting " },
    { title: "about us ", description: "Had denoting " },
  ];
  return (
    <>
      <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
          <span class="text-uppercase page-subtitle">Components</span>
          <h3 class="page-title">Blog Posts</h3>
        </div>
      </div>
      <div className="row">
        <Card_Five
          cardTitle={"Had denoting properly jointure which well books beyond"}
          CardBody={arr[0].description}
          cardFooter={""}
        />
        <Card_Five
          cardTitle={"Had denoting properly jointure which well books beyond"}
          cardFooter={"this is a footer"}
        />
      </div>
      <div className="row">
        <Card_One
          cardImageUrl={images.avatar}
          cardTitle={"The Future of Technology: Innovations and Impacts"}
          cardDesc={
            "r a broad range of topics, including breakthroughs in fields like artificial intelligence and biotechnology, the opportunities created by technological progress, and the potential consequences of this rapid change. The title suggests that the focus will be on looking forward, analyzing trends and predictions to try and anticipate what the future holds. Overall, the title promises a deep dive into the exciting, and sometimes concerning, world of technology and how it will shape our lives"
          }
          cardSpan={"25 February 1990"}
        />
        <Card_Four
          cardImageUrl={images.avatar}
          cardTitle={"The Future of Technology: Innovations and Impacts"}
          cardDesc={
            "The Future of Technology: Innovations and Impacts is a thought-provoking title that hints at an in-depth examination of how technological advancements are changing the world we live in. This exploration could cover a broad range of topics, including breakthroughs in fields like artificial intelligence and biotechnology, the opportunities created by technological progress, and the potential consequences of this rapid change. The title suggests that the focus will be on looking forward, analyzing trends and predictions to try and anticipate what the future holds. Overall, the title promises a deep dive into the exciting, and sometimes concerning, world of technology and how it will shape our lives"
          }
          cardSpan={"25 February 1990"}
        />
        <Card_Three
          cardImageUrl={images.avatar}
          cardTitle={"The Future of Technology: Innovations and Impacts"}
          cardDesc={
            "The Future of Technology: Innovations and Impacts is a thought-provoking title that hints at an in-depth examination of how technological advancements are changing the world we live in. This exploration could cover a broad range of topics, including breakthroughs in fields like artificial intelligence and biotechnology, the opportunities created by technological progress, and the potential consequences of this rapid change. The title suggests that the focus will be on looking forward, analyzing trends and predictions to try and anticipate what the future holds. Overall, the title promises a deep dive into the exciting, and sometimes concerning, world of technology and how it will shape our lives"
          }
          cardSpan={"25 February 1990"}
        />
      </div>
    </>
  );
};

export default MainLayoutAuth(Test);
