import { useContext, useState } from "react"
import { DataContext } from "../App"
import Card from "./Card";

export default function Series() {
  const { data, setData } = useContext(DataContext);
  const [searchedText, setSearchedText] = useState('');


  const filteredData = data.filter(x => x.type === "series");
  return (
    <main>
      <section className="search-section">
        <img src="/img/search-icon.svg" alt="" />
        <input type="text" value={searchedText} placeholder="Search for movies or TV series"
          onChange={(e) => setSearchedText(e.target.value)} />
      </section>
      <div className="series-section">
        {filteredData.filter((x) => x.title.toLowerCase().includes(searchedText.toLowerCase()))
          .map((x, i) => (
            <Card key={i} {...x} />
          ))}
      </div>
    </main>
  )
}

