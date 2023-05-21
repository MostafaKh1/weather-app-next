import Weather from "@/components/Weather";

export default function Home() {
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

  const randomIndex = Math.floor(Math.random() * images.length);
  const imgURL = images[randomIndex].img;

  return (
    <div
      className="h-screen w-full bg-no-repeat  bg-center bg-cover"
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <Weather />
    </div>
  );
}
