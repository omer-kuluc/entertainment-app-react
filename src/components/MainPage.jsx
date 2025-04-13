import { useContext, useState } from "react"
import { DataContext } from "../App"
import { BookmarkSvg, DotSvg, MovieSvg, SeriesSvg, BookmarkAddedSvg } from "../Svg";
import Card from "./Card";

export default function MainPage() {

  const { data, setData } = useContext(DataContext);
  const [searchedText, setSearchedText] = useState('');
  console.log(searchedText)
  const filteredTrending = data.filter(x => x.trending)
  // console.log(data)
  return (
    <main>
      <section className="search-section">
        <img src="/img/search-icon.svg" alt="" />
        <input type="text" value={searchedText} placeholder="Search for movies or TV series"
          onChange={(e) => setSearchedText(e.target.value)} />
      </section>

      <div className="">
        <h2>Trending</h2>
        <div className="trending-card-items">
          {filteredTrending.map((x, i) => (
            <div key={i} className="trending-card-item">
              <button><BookmarkSvg /></button>

              <div className="trending-card-data" onClick={() => window.open(x.trailer, '_blank')}>
                <img src={x.image} alt="" />
                <div className="trending-card-text">
                  <p className="trending-card-item-content">
                    {new Date(x.release_date).getFullYear()}
                    <DotSvg />
                    {x.type === "movie" ? <MovieSvg /> : <SeriesSvg />}
                    {x.type}
                    <DotSvg />
                    {x.age_rating}
                  </p>
                  <p>{x.title}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="recommended-area">
        <h2>Recommended for you</h2>
        <div className="recommended-card-items">
          {data.filter((x) => x.title.toLowerCase().includes(searchedText.toLowerCase()))
            .map((x, i) => (
              <Card key={i} {...x} />
            ))}
        </div>
      </div>
    </main>
  )


}



