import React, { useContext, useState } from 'react'
import Card from './Card';
import { DataContext, Bookmarks } from "../App"

export default function Bookmarked() {

  const { data } = useContext(DataContext)
  const { bookmarks } = useContext(Bookmarks)
  const [searchedText, setSearchedText] = useState('');

  const filteredData = data.filter((x) => bookmarks.includes(x.title));
  const filteredMovies = filteredData
    .filter((x) => x.type === "movie" && x.title.toLowerCase().includes(searchedText.toLowerCase()));

  const filteredSeries = filteredData
    .filter((x) => x.type === "series" && x.title.toLowerCase().includes(searchedText.toLowerCase()));

  return (
    <main>
      <section className="search-section">
        <img src="/img/search-icon.svg" alt="" />
        <input
          type="text"
          value={searchedText}
          placeholder="Search for bookmarked shows"
          onChange={(e) => setSearchedText(e.target.value)}
        />
      </section>

      {filteredMovies.length > 0 && (
        <div className='bookmarked-movies-container'>
          <h2 className='bookmarked-movies-header'>Bookmarked Movies</h2>

          <div className="bookmarked-movies-area">
            {filteredMovies.map((x, i) => (
              <Card className="bookmarked-movie-item" key={i} {...x} />
            ))}
          </div>
        </div>
      )}

      {filteredSeries.length > 0 && (
        <div className='bookmarked-series-container'>
          <h2 className='bookmarked-series-header'>Bookmarked Series</h2>
          <div className="bookmarked-series-area">
            {filteredSeries.map((x, i) => (
              <Card key={i} {...x} />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
