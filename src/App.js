import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import MobileMenu from "./components/home/menu/MobileMenu";
import NotFound from "./components/NotFound/NotFound";
import ContactUs from "./components/home/contactUs/ContactUs";
import Content from "./components/home/content/content";
import PlayList from "./components/home/playList/playList";
import Hiphop from "./components/home/playList/hiphop";
import Pop from "./components/home/playList/pop";
import LikedSongs from "./components/home/playList/likedSongs";

import { useTranslation } from "react-i18next";
import "./i18n";

import ApiContext from "./components/context/ApiContext";
import Player from "./components/home/content/player";

function App() {
  const [id, setId] = useState("1");
  const [playing, setPlaying] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [likedMusic, setLikedMusic] = useState(false);
  const { t, i18n } = useTranslation();

  const [Theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [songs, setSongs] = useState([
    {
      cover: require("./assets/picture/drippy.webp"),
      song_name: "Drippy",
      singer: "Sidhu Moosewala",
      musicSrc: require("./assets/musics/drippy.mp3"),
      musicId: "1",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/tum_se.jpg"),
      song_name: "Tum Se",
      singer: "Sachin Jigar, Raghav Chaitanya",
      musicSrc: require("./assets/musics/tumse.mp3"),
      musicId: "2",
      genre: "romance",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/o_mahi.webp"),
      song_name: "O Mahi",
      singer: "Arijit Singh",
      musicSrc: require("./assets/musics/omahi.mp3"),
      musicId: "3",
      genre: "romance",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/born_to_shine.webp"),
      song_name: "Born To Shine",
      singer: "Diljit Dosanjh",
      musicSrc: require("./assets/musics/born_to_shine.mp3"),
      musicId: "4",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/satranga.jpg"),
      song_name: "Satranga",
      singer: "Arijit Singh",
      musicSrc: require("./assets/musics/satranga.mp3"),
      musicId: "5",
      genre: "romance",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/king_shit.jpg"),
      song_name: "King Shit",
      singer: "Shubh",
      musicSrc: require("./assets/musics/king_shit.mp3"),
      musicId: "6",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/ve_haaniya.jpg"),
      song_name: "Ve Haaniya",
      singer: "Avvy Sra",
      musicSrc: require("./assets/musics/ve_haaniya.mp3"),
      musicId: "7",
      genre: "romance",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/3_peg.jpg"),
      song_name: "3 Peg",
      singer: "Sharry Mann",
      musicSrc: require("./assets/musics/3_peg.mp3"),
      musicId: "8",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/tum_se_hi.jpg"),
      song_name: "Tum Se Hi",
      singer: "Mohit Chauhan",
      musicSrc: require("./assets/musics/tum_se_hi.mp3"),
      musicId: "9",
      genre: "romance",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/saaiyaan.jpg"),
      song_name: "Saaiyaan",
      singer: "Rahat Fateh Ali Khan",
      musicSrc: require("./assets/musics/saaiyaan.mp3"),
      musicId: "10",
      genre: "romance",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/difference.jpg"),
      song_name: "Difference",
      singer: "Amrit Maan",
      musicSrc: require("./assets/musics/difference.mp3"),
      musicId: "11",
      genre: "HipHop",
      LikeMusic: "false",
    },
    {
      cover: require("./assets/picture/bapu_zimidar.jpg"),
      song_name: "Bapu Zimidar",
      singer: "Jassi Gill",
      musicSrc: require("./assets/musics/bapu_zimidar.mp3"),
      musicId: "12",
      genre: "HipHop",
      LikeMusic: "false",
    },
  ]);

  // useEffect(() => {

  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth < 800) {
  //       document.querySelector("#mobileMenu").style.display = "block";
  //       document.querySelector("#desktopMenu").style.display = "none";
  //       document.querySelector('.player_container').classList.add('mobileMode')
  //     } else {
  //       document.querySelector("#desktopMenu").style.display = "block";
  //       document.querySelector("#mobileMenu").style.display = "none";
  //       document.querySelector('.player_container').classList.remove('mobileMode')
  //     }
  //   });
  // });

  return (
    <>
      <ApiContext.Provider
        value={{
          id,
          setId,
          songs,
          setSongs,
          playing,
          setPlaying,
          setLikedMusic,
          likedMusic,
          toggleTheme,
          Theme,
          t,
          i18n,
          setSearchValue,
          searchValue,
        }}
      >
        <div className="main_container" id={Theme}>
          <HashRouter>
            <Navbar />
            <MobileMenu />
            <Player />
            <Routes>
              <Route path=" " element={<Navigate to="/" />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />

              {/* desktop routes */}
              <Route path="/home/ContactUs" element={<Home />} />
              <Route path="/home/hiphop" element={<Home />} />
              <Route path="/home/pop" element={<Home />} />
              <Route path="/home/likedSongs" element={<Home />} />
              {/* desktop routes */}

              {/* mobile routes */}
              <Route path="/content" element={<Content />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/playList" element={<PlayList />} />
              <Route path="/hiphop" element={<Hiphop />} />
              <Route path="/Pop" element={<Pop />} />
              <Route path="/likedSongs" element={<LikedSongs />} />
              {/* mobile routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </div>
      </ApiContext.Provider>
    </>
  );
}

export default App;
