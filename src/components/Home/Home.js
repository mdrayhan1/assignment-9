import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";import Hero from "../Hero/Hero";

const Home = () => {
  const quizInfo = useLoaderData();

  return (
    <div className="">
      
      <Hero></Hero>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mx-auto w-11/12">
        {quizInfo.data.map((item) => (
          <Card 
          key={item.id} item={item}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
