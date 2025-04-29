import React from "react";
import './home.css'
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p class="heall">
        HealthHive offers various products, including the Hive Patient Portal, Hive Care, Hive Transition, and Hive Hub, which help manage medical and legal documents, provide virtual care plans, and keep families updated on patient car
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
