import { BookmarkSvg, DashboardSvg, MovieSvg, SeriesSvg } from "../Svg";

export default function Header() {

  return (
    <header>
      <img src="/img/logo.svg" alt="" />
      <ul>
        <li className={location.hash.substring(1) === "/" ? 'active' : ""}>
          <a href="#/"><DashboardSvg /></a>
        </li>
        <li className={location.hash.substring(1) === "/movies" ? 'active' : ""}>
          <a href="#/movies"><MovieSvg /></a>
        </li>
        <li className={location.hash.substring(1) === "/series" ? 'active' : ""}>
          <a href="#/series"><SeriesSvg /></a>
        </li>
        <li className={location.hash.substring(1) === "/bookmarked" ? 'active' : ""}>
          <a href="#/bookmarked"><BookmarkSvg /></a>
        </li>
      </ul>
      <img src="/img/avatar.svg" alt="" />

    </header>
  )
}
