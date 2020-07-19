import React from "react";
import SearchForm from "../components/home/SearchForm";
import Divider from "../components/home/Divider";
import sectionContent from "../components/home/SectionContent";
import HomeSection from "../components/home/HomeSection";
const Home = () => {
  return (
    <React.Fragment>
      <SearchForm />
      <Divider />
      {sectionContent.map(item => {
        return <HomeSection content={item} key={item.img} />;
      })}
    </React.Fragment>
  );
};
export default Home;
