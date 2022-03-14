import "./styles.css";
import Movie from "./Movie";
import data from "./data";

export default function App() {
  return (
    <>
      <h1 className="heading_style">Top Movie List</h1>
      {data.map((val) => {
        return (
          <Movie
            img={val.img}
            platform={val.platform}
            title={val.tile}
            link={val.link}
          />
        );
      })}
    </>
  );
}
