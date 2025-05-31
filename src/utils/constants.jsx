export const LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const AVATHAR_URL = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const BG_IMG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_medium.jpg';

export const API_OPTIONS =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  }
};

export const MOVIE_CARDS_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {identifier:"english", name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"telugu", name:"Telugu"},
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;