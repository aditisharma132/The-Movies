import axios from "axios";
import "./Home.css"
import { useEffect, useState } from "react";
import { SingleContent } from "../SingleContent/SingleContent";

const Home = () => {
  const [content, setContent] = useState([]);
  const handleClick = async (e) => {
    e.preventDefault();
    const year = document.querySelector(".movie-form input").value;
    const api_url = `
    https://api.themoviedb.org/3/discover/movie?api_key=ea16eef1597267645dc3c0b5f97ceca8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_watch_monetization_types=flatrate`;
    const { data } = await axios.get(api_url);
    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    const fetchHome = async () => {
      const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
      const { data } = await axios.get(api_url);
      console.log(data);
      setContent(data.results);
    };
    fetchHome();
  }, []);

  return (
    <div>
      <span className="pageTitle">
        <form onSubmit={handleClick} className="movie-form">
          <input type="year" defaultValue="2020" />
          <button type="submit">Submit</button>
        </form>

        <div className="all-movies">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            ))}
        </div>
      </span>
    </div>
  );
};

export default Home;