import MainPage from './components/MainPage'
import Bookmarked from './components/Bookmarked'
import Movies from './components/Movies'
import Series from './components/Series'

const routers = [
  {
    url: '/',
    component: <MainPage />
  },
  {
    url: '/bookmarked',
    component: <Bookmarked />
  },
  {
    url: '/movies',
    component: <Movies />
  },
  {
    url: '/series',
    component: <Series />
  },
]

export function getPage(url) {
  return routers.find(x => x.url === url)?.component || <h1>Not Found</h1>
}