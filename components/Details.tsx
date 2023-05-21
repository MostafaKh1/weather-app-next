import { MainData, WeatherData } from "../typing";

interface DetailsInterface {
  mainData: MainData;
  weatherData: WeatherData;
  name: string;
  speed: number;
}

export default function Details({
  mainData,
  weatherData,
  name,
  speed,
}: DetailsInterface) {
  console.log(weatherData);
  return (
    <div className=" max-w-[1240px] py-8  mx-auto md:py-12">
      <h5 className="text-white px-5 text-2xl">{name}</h5>
      <div className="flex px-4 gap-x-20 justify-between items-center pb-20 lg:pb-24">
        <div className="text-6xl lg:text-8xl text-white  font-semibold">{`${Math.round(
          mainData.temp
        )}℃`}</div>
        <h3 className="text-white  text-3xl   lg:text-6xl font-semibold text-center">
          {weatherData.main}
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between w-[600px]  border py-2 items-center rounded-xl px-4 ">
          <div className="border items-center flex flex-col gap-y-2 p-1  rounded-md">
            <span className="text-white text-center text-xl font-semibold">
              {`${Math.round(mainData.feels_like)}℃`}
            </span>
            <p className="text-lg text-slate-100 ">Feels Likes</p>
          </div>
          <div className="border items-center flex flex-col gap-y-2 p-1  rounded-md">
            <span className="text-white text-center text-xl font-semibold">
              {`${Math.round(mainData.humidity)}%`}
            </span>
            <p className="text-white text-lg ">humidity</p>
          </div>
          <div className="border items-center flex flex-col gap-y-2 p-1  rounded-md">
            <span className="text-white text-center text-xl font-semibold">
              {Math.round(speed)}
            </span>
            <p className="text-white text-lg ">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
