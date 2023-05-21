"use client";
import Details from "./Details";

import { useEffect, useState } from "react";
import { DataInterface } from "../typing";
import { BsSearch } from "react-icons/bs";

function Weather() {
  //  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const [dataDetails, setDataDetails] = useState<DataInterface>({
    main: [],
    weather: [],
    name: "",
    speed: 0,
  });

  const [randomImage, setRandomImage] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const API_KEY = "c72fe5b91456fd0807c278778e19d1b5";

  const images = [
    {
      img: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg",
    },
    {
      img: "https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg",
    },
  ];

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      setDataDetails({
        main: [data.main],
        weather: [data.weather[0]],
        name: data.name,
        speed: data.wind.speed,
      });
      console.log(data.weather[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex].img);
  }, []);

  const url =
    "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg";

  return (
    <section>
      <div className=" flex justify-center  py-16">
        <div className="flex items-center gap-x-6 ">
          <input
            type="text"
            className="  mx-auto   w-[300px] lg:w-[500px] h-[60px] rounded-xl  bg-transparent text-white text-lg px-2 placeholder-white border focus:outline-none"
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <BsSearch
            onClick={fetchData}
            className="  h-8 w-8 text-white  transition-all duration-200   hover:text-gray-400  "
          />
        </div>
      </div>
      {Object.keys(dataDetails.main).length &&
      Object.keys(dataDetails.weather).length > 0 ? (
        <Details
          mainData={dataDetails?.main[0]}
          weatherData={dataDetails?.weather[0]}
          name={dataDetails?.name}
          speed={dataDetails?.speed}
        />
      ) : null}
    </section>
  );
}

export default Weather;
