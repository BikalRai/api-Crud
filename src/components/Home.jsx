import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Content from "./Content";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const APIKey = "OqfCO9S2aPyEaJeXnsjfdkOfI9MaPoerMfVsOcp9iqawu06NpTpqDfm9";

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.pexels.com/v1/curated?page=1&per_page=12",
        {
          headers: {
            Authorization: APIKey,
          },
        }
      );

      setData(response.data.photos);
    } catch (error) {
      console.log("Unable to fetch data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className='home'>
      <Header />
      <h1>Homepage</h1>
      <Content>
        {data.map((info) => (
          <Card img={info.src.medium} key={info.id} />
        ))}
      </Content>
      <Footer />
    </div>
  );
};

export default Home;
