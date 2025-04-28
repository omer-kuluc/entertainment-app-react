import { BookmarkSvg, DotSvg, MovieSvg, SeriesSvg, BookmarkAddedSvg } from "../Svg";
import { DataContext } from "../App"
import { useContext, useState } from "react"
import { Bookmarks } from "../App";


export default function Card({ title, release_date, type, age_rating, image, trailer }) {

  const { bookmarks, setBookmarks } = useContext(Bookmarks);

  function handleBookmark() {
    if (bookmarks.includes(title)) {
      setBookmarks(bookmarks.filter((item) => item !== title))
    }
    else {
      setBookmarks([...bookmarks, title])
    }
  }


  return (
    <div className="recommended-card-item">
      <button onClick={handleBookmark}>{bookmarks.find((item) => item === title) ? <BookmarkAddedSvg /> : <BookmarkSvg />}</button>

      <div className="recommended-card-data" onClick={() => window.open(trailer, '_blank')}>
        <div className="recommended-card-data-image"><img src={image} alt="" /></div>

        <div className="recommended-card-content">
          <p className="recommended-card-info">{new Date(release_date).getFullYear()}
            <DotSvg />
            {type === "movie" ? <MovieSvg /> : <SeriesSvg />}
            <DotSvg />
            {type}
            {age_rating}
          </p>
          <p>{title}</p>
        </div>

      </div>

    </div>
  )
}