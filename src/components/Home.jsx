import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Content from "./Content";
import Card from "./Card";
import Footer from "./Footer";
import Pagination from "./Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  // const APIKey = Your API Key here of pexels api;

  const getData = async (page) => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/curated?page=${page}&per_page=${rowsPerPage}`
        // {
        //   headers: {
        //     Authorization: APIKey,
        //   },
        // }
      );

      setData(response.data.photos);
    } catch (error) {
      console.log("Unable to fetch data", error);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

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
      <Pagination
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setrowsPerPage={setRowsPerPage}
      />
      <Footer />
    </div>
  );
};

export default Home;
