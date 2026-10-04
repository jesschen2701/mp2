import { useEffect, useState } from 'react';
import FoxPic from "../components/FoxPic.tsx";
import type {Fox} from "../interfaces/Fox.ts";

export default function App() {
  const [data, setData] = useState<Fox[]>([]);

  useEffect(() => {
    async function fetchData(){
      const foxes: Fox[] = [];
      for (let i=0; i<6; i++){
        const rawData = await fetch("https://randomfox.ca/floof/");
        if (rawData.status > 399) {
          console.log("There was an error.");
        }else{
          const actualData = await rawData.json();
          foxes.push({
            id: i + 1,
            image: actualData.image,
            link: actualData.link
          });
        }
      }
      setData(foxes);
    }
    fetchData()
        .then(()=>console.log("It worked!"))
        .catch((err)=>{console.log("This error occurred: " + err)})
  }, []);

  return (
    <>
      <FoxPic data={data} />
    </>
  )
}

