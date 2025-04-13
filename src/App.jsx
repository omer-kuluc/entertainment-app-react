import { createContext, useEffect, useState } from 'react'
import Header from './components/Header';
import { getPage } from './helper';

export const DataContext = createContext(null);
export const Bookmarks = createContext(null);

function App() {
  const [data, setData] = useState([]);
  const [route, setRoute] = useState(location.hash.substring(1) || '/');
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch('/data/data.json').then(x => x.json());
      setData(data);
    }
    getData();

    window.addEventListener('hashchange', (e) => setRoute(location.hash.substring(1) || '/'));

  }, []);


  return (
    <DataContext.Provider value={{ data, setData }}>
      <Header />
      <Bookmarks.Provider value={{ bookmarks, setBookmarks }}>
        {getPage(route)}
      </Bookmarks.Provider>
    </DataContext.Provider>
  )
}

export default App
