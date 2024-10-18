// Import images at the top
import duelLogo from '../images/albums/duel_logo.png';
import enPaixLogo from '../images/albums/en_paix_logo.png';
import tfwLogo from '../images/albums/tfw_logo.png';
import qcLogo from '../images/albums/qc_logo.png';
import ziLogo from '../images/albums/zi_logo.png';
import limboLogo from '../images/albums/limbo_logo.png';
import fdLogo from '../images/albums/fd_logo.png';
import bsdLogo from '../images/albums/bsd_logo.png';
import lnLogo from '../images/albums/ln_logo.png';
import famdLogo from '../images/albums/famd_logo.png';
import wormLogo from '../images/albums/worm_logo.png';
import oblLogo from '../images/albums/obl_logo.png';
import LMLogo from '../images/albums/lm_logo.jpg'
import MattelLogo from '../images/albums/mattel_logo.png'
import SeaTexLogo from '../images/albums/st_logo.png'

import Brotherhood from '../music/Brotherhood_Demo.wav';
import BSD from '../music/BSD_Demo.wav';
import Duel from '../music/Duel_Demo.wav';
import EnPaix from '../music/EnPaix_Demo.wav';
import FDM from '../music/FDM_Demo.wav';
import FromDust from '../music/FromDust_Demo.wav';
import LastNight from '../music/LastNight_Demo.wav';
import Limbo from '../music/Limbo_Demo.wav';
import QC from '../music/QC_Demo.wav';
import TFW from '../music/TFW_Demo.wav';
import Worms from '../music/Worms_Demo.wav';
import Zagouri from '../music/Zagouri_Demo.wav';
import LikeMe from '../music/LikeMe_Demo.wav'
import Mattel from '../music/DreamSquad_Demo.wav'
import SeaTex from '../music/SeaTex_Demo.wav'


const projectsData = [
  {
    album: "The Duel",
    style: "Sci-Fi, Western, Japanese-style",
    image: duelLogo,
    tracks: [
      {
        title: "The Duel",
        url: Duel,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "En Paix",
    style: "Ambient, Eclectic",
    image: enPaixLogo,
    tracks: [
      {
        title: "En Paix",
        url: EnPaix,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "The Fisherman's Wife",
    style: "Ambient, Ethnic",
    image: tfwLogo,
    tracks: [
      {
        title: "The Fisherman's Wife",
        url: TFW,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Quality Control",
    style: "Upbeat, Energetic",
    image: qcLogo,
    tracks: [
      {
        title: "Quality Control",
        url: QC,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Zaguri Impreria",
    style: "Electronic, Psytrance",
    image: ziLogo,
    tracks: [
      {
        title: "Zaguri Impreria",
        url: Zagouri,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Limbo",
    style: "Ambient, Eclectic",
    image: limboLogo,
    tracks: [
      {
        title: "Limbo",
        url: Limbo,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "From Dust",
    style: "Upbeat, Energetic",
    image: fdLogo,
    tracks: [
      {
        title: "From Dust",
        url: FromDust,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Backseat Driver",
    style: "Upbeat, Energetic",
    image: bsdLogo,
    tracks: [
      {
        title: "Backseat Driver",
        url: BSD,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Last Night",
    style: "Drama, Orchestral",
    image: lnLogo,
    tracks: [
      {
        title: "Last Night",
        url: LastNight,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Family Distancing",
    style: "Upbeat, Energetic",
    image: famdLogo,
    tracks: [
      {
        title: "Family Distancing",
        url: FDM,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Worms",
    style: "Tensive, Energetic",
    image: wormLogo,
    tracks: [
      {
        title: "Worms",
        url: Worms,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Our Brotherly Love",
    style: "Upbeat, Hiphop",
    image: oblLogo,
    tracks: [
      {
        title: "Our Brotherly Love",
        url: Brotherhood,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "Like Me",
    style: "Upbeat, Hiphop",
    image: LMLogo,
    tracks: [
      {
        title: "Like Me",
        url: LikeMe,
        artist: "Yuval Lavi"
      }
    ]
  },  
  {
    album: "Mattel - Demo",
    style: "Upbeat, Energetic",
    image: MattelLogo,
    tracks: [
      {
        title: "Mattel",
        url: Mattel,
        artist: "Yuval Lavi"
      }
    ]
  },
  {
    album: "SeaTex",
    style: "Upbeat, Energetic",
    image: SeaTexLogo,
    tracks: [
      {
        title: "SeaTex",
        url: SeaTex,
        artist: "Yuval Lavi"
      }
    ]
  }
];




export default projectsData;