const mongoose = require("mongoose");
const Artist = require("./models/artist.music.model");
const Genre = require("./models/genre.music.model");

const GENRE_ORDER = [
  "Pop",
  "Rock",
  "Hip-Hop",
  "Rap",
  "Reggaeton",
  "Trap",
  "Latin",
  "Afrobeats",
  "EDM",
  "K-Pop",
];

const ARTISTS = [
  // --- POP ---
  {
    name: "Taylor Swift",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/500px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png",
    description: "Cantante y compositora estadounidense de pop",
  },
  {
    name: "Ariana Grande",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ariana_Grande_promoting_Wicked_%282024%29.jpg/500px-Ariana_Grande_promoting_Wicked_%282024%29.jpg",
    description: "Cantante estadounidense de pop y R&B",
  },
  {
    name: "Justin Bieber",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/500px-Justin_Bieber_in_2015.jpg",
    description: "Cantante canadiense de pop",
  },
  {
    name: "Ed Sheeran",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ed_Sheeran-6886_%28cropped_2%29.jpg/500px-Ed_Sheeran-6886_%28cropped_2%29.jpg",
    description: "Cantautor britanico de pop",
  },
  {
    name: "Dua Lipa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Dua_Lipa-69798_%28cropped%29.jpg/500px-Dua_Lipa-69798_%28cropped%29.jpg",
    description: "Cantante britanico-albanesa de pop",
  },
  {
    name: "Harry Styles",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/HarryStylesWembley170623_%2865_of_93%29_%2852982678051%29_%28cropped_2%29.jpg/500px-HarryStylesWembley170623_%2865_of_93%29_%2852982678051%29_%28cropped_2%29.jpg",
    description: "Cantante britanico de pop",
  },
  {
    name: "Billie Eilish",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg/500px-BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg",
    description: "Cantante y compositora estadounidense de pop",
  },
  {
    name: "Shawn Mendes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/191125_Shawn_Mendes_at_the_2019_American_Music_Awards.png/500px-191125_Shawn_Mendes_at_the_2019_American_Music_Awards.png",
    description: "Cantante canadiense de pop",
  },
  {
    name: "Katy Perry",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/KatyPerryWestminst111224_%2881_of_95%29_%2854206733094%29_%28cropped_2%29.jpg/500px-KatyPerryWestminst111224_%2881_of_95%29_%2854206733094%29_%28cropped_2%29.jpg",
    description: "Cantante estadounidense de pop",
  },
  {
    name: "Bruno Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/BrunoMars24KMagicWorldTourLive_%28cropped%29.jpg/500px-BrunoMars24KMagicWorldTourLive_%28cropped%29.jpg",
    description: "Cantante y productor estadounidense de pop",
  },

  // --- ROCK ---
  {
    name: "The Beatles",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Beatles_I_Want_To_Hold_Your_Hand_replica_artwork_photograph.jpg/500px-The_Beatles_I_Want_To_Hold_Your_Hand_replica_artwork_photograph.jpg",
    description: "Iconica banda britanica de rock",
  },
  {
    name: "Queen",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg/500px-Queen_A_Night_At_The_Opera_%281975_Elektra_publicity_photo_02%29.jpg",
    description: "Banda britanica de rock clasico",
  },
  {
    name: "Led Zeppelin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Led_Zeppelin_-_promotional_image_%281971%29.jpg/500px-Led_Zeppelin_-_promotional_image_%281971%29.jpg",
    description: "Banda britanica de hard rock",
  },
  {
    name: "Pink Floyd",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pink_Floyd_Laser_Light_Show_%285165498577%29.jpg/500px-Pink_Floyd_Laser_Light_Show_%285165498577%29.jpg",
    description: "Banda britanica de rock progresivo",
  },
  {
    name: "Nirvana",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Nirvana_around_1992.jpg",
    description: "Banda estadounidense de grunge",
  },
  {
    name: "AC/DC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/AC_DC_Black_Ice_Tour_2009_Buenos_Aires_4_de_Diciembre_%284238680962%29.jpg/500px-AC_DC_Black_Ice_Tour_2009_Buenos_Aires_4_de_Diciembre_%284238680962%29.jpg",
    description: "Banda australiana de hard rock",
  },
  {
    name: "Foo Fighters",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Glasto2023.jpg/500px-Glasto2023.jpg",
    description: "Banda estadounidense de rock alternativo",
  },
  {
    name: "Red Hot Chili Peppers",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/RHCP_Live_in_London_26_June_2022.jpg/500px-RHCP_Live_in_London_26_June_2022.jpg",
    description: "Banda estadounidense de funk rock",
  },
  {
    name: "Guns N' Roses",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/GNR_Belgrade_2025_05_%28cropped%29.jpg/500px-GNR_Belgrade_2025_05_%28cropped%29.jpg",
    description: "Banda estadounidense de hard rock",
  },
  {
    name: "The Rolling Stones",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg/500px-The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg",
    description: "Banda britanica de rock clasico",
  },

  // --- HIP-HOP ---
  {
    name: "Kendrick Lamar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/KendrickSZASPurs230725-144_%28cropped%29_desaturated.jpg/500px-KendrickSZASPurs230725-144_%28cropped%29_desaturated.jpg",
    description: "Rapero estadounidense de hip-hop",
  },
  {
    name: "Kanye West",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/500px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg",
    description: "Productor y rapero estadounidense de hip-hop",
  },
  {
    name: "J. Cole",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/HOTSPOTATL_-_21_Savage_%26_J.Cole_Light_Birthday_Bash_ATL_2023_On_FIRE_%28xu6HKf40MX0_-_2m38s%29_%28cropped%29.jpg/500px-HOTSPOTATL_-_21_Savage_%26_J.Cole_Light_Birthday_Bash_ATL_2023_On_FIRE_%28xu6HKf40MX0_-_2m38s%29_%28cropped%29.jpg",
    description: "Rapero y productor estadounidense de hip-hop",
  },
  {
    name: "Jay-Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Jay-Z_meets_with_New_York_Senate_Majority_Leader_in_Albany_%28cropped%29.webp",
    description: "Rapero y empresario estadounidense de hip-hop",
  },
  {
    name: "Nas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Nas_%2852380600682%29_%28cropped%29.jpg/500px-Nas_%2852380600682%29_%28cropped%29.jpg",
    description: "Rapero estadounidense de hip-hop",
  },
  {
    name: "A$AP Rocky",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/A%24AP_Rocky_at_the_2025_Cannes_Film_Festival_%28cropped_3x4%29.jpg/500px-A%24AP_Rocky_at_the_2025_Cannes_Film_Festival_%28cropped_3x4%29.jpg",
    description: "Rapero estadounidense de hip-hop",
  },
  {
    name: "Tyler, the Creator",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Tyler_The_Creator_Toronto_2025_%28cropped%29.jpg/500px-Tyler_The_Creator_Toronto_2025_%28cropped%29.jpg",
    description: "Rapero y productor estadounidense de hip-hop",
  },
  {
    name: "Outkast",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2014227235242_2014-08-15_Rock%27n%27Heim_-_Sven_-_5D_MK_II_-_250_-_IMG_0063_mod.jpg/500px-2014227235242_2014-08-15_Rock%27n%27Heim_-_Sven_-_5D_MK_II_-_250_-_IMG_0063_mod.jpg",
    description: "Duo estadounidense de hip-hop",
  },
  {
    name: "Wu-Tang Clan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wu-Tang_Clan_at_Exit_festival_2023.jpg/500px-Wu-Tang_Clan_at_Exit_festival_2023.jpg",
    description: "Colectivo estadounidense de hip-hop",
  },
  {
    name: "Common",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Common-byPhilipRomano.jpg/500px-Common-byPhilipRomano.jpg",
    description: "Rapero y actor estadounidense de hip-hop",
  },

  // --- RAP ---
  {
    name: "Eminem",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eminem_2021_Color_Corrected.jpg/500px-Eminem_2021_Color_Corrected.jpg",
    description: "Rapero estadounidense de rap",
  },
  {
    name: "Tupac Shakur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tupac_Shakur_in_1995.jpg/500px-Tupac_Shakur_in_1995.jpg",
    description: "Rapero y actor estadounidense de rap",
  },
  {
    name: "The Notorious B.I.G.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Notorious_B.I.G._MetroCards_%2852089373269%29.jpg/500px-Notorious_B.I.G._MetroCards_%2852089373269%29.jpg",
    description: "Rapero estadounidense de rap",
  },
  {
    name: "Snoop Dogg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Snoop_Dogg%2C_WrestleMania_XL_%28cropped%29_%28cropped%29.jpg/500px-Snoop_Dogg%2C_WrestleMania_XL_%28cropped%29_%28cropped%29.jpg",
    description: "Rapero estadounidense de rap",
  },
  {
    name: "50 Cent",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Curtis_%2250_Cent%22_Jackson_visits_Barksdale_AFB_%285%29_%28cropped%29.jpg/500px-Curtis_%2250_Cent%22_Jackson_visits_Barksdale_AFB_%285%29_%28cropped%29.jpg",
    description: "Rapero estadounidense de rap",
  },
  {
    name: "Dr. Dre",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Dr._Dre_in_2011.jpg",
    description: "Rapero y productor estadounidense de rap",
  },
  {
    name: "Ice Cube",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ice_Cube_September_2025.png/500px-Ice_Cube_September_2025.png",
    description: "Rapero y actor estadounidense de rap",
  },
  {
    name: "Lil Wayne",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Lil_Wayne_Feb._2020.jpg/500px-Lil_Wayne_Feb._2020.jpg",
    description: "Rapero estadounidense de rap",
  },
  {
    name: "Nicki Minaj",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nicki_Minaj_2025_%283x4_cropped%29.jpg/500px-Nicki_Minaj_2025_%283x4_cropped%29.jpg",
    description: "Rapera estadounidense de rap",
  },
  {
    name: "Cardi B",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cardi_B_March_2024.png/500px-Cardi_B_March_2024.png",
    description: "Rapera estadounidense de rap",
  },

  // --- REGGAETON ---
  {
    name: "Bad Bunny",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg/500px-Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg",
    description: "Cantante puertorriqueno de reggaeton",
  },
  {
    name: "J Balvin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/J_Balvin%2C_Noisey_Meets%3B_Oct_2018.jpg/500px-J_Balvin%2C_Noisey_Meets%3B_Oct_2018.jpg",
    description: "Cantante colombiano de reggaeton",
  },
  {
    name: "Karol G",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2023-11-16_Gala_de_los_Latin_Grammy%2C_15.jpg/500px-2023-11-16_Gala_de_los_Latin_Grammy%2C_15.jpg",
    description: "Cantante colombiana de reggaeton",
  },
  {
    name: "Daddy Yankee",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Daddy_Yankee_-_The_Kingdom_%28Official_Q_%26_A%29.png",
    description: "Rey del reggaeton, puertorriqueno",
  },
  {
    name: "Don Omar",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Don_Omar_-_The_Kingdom_%28Official_Q_%26_A%29.png/500px-Don_Omar_-_The_Kingdom_%28Official_Q_%26_A%29.png",
    description: "Cantante puertorriqueno de reggaeton",
  },
  {
    name: "Ozuna",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Ozuna-2019.jpg",
    description: "Cantante puertorriqueno de reggaeton",
  },
  {
    name: "Maluma",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/2023-11-16_Gala_de_los_Latin_Grammy%2C_20_%28Maluma%29.jpg/500px-2023-11-16_Gala_de_los_Latin_Grammy%2C_20_%28Maluma%29.jpg",
    description: "Cantante colombiano de reggaeton",
  },
  {
    name: "Anuel AA",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Anuel_AA_in_2022.png/500px-Anuel_AA_in_2022.png",
    description: "Cantante puertorriqueno de reggaeton y trap",
  },
  {
    name: "Jhayco",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jhayco_imagen.jpg/500px-Jhayco_imagen.jpg",
    description: "Cantante puertorriqueno de reggaeton",
  },
  {
    name: "Rauw Alejandro",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2023-11-16_Gala_de_los_Latin_Grammy%2C_13_%28cropped%29_%282%29.jpg/500px-2023-11-16_Gala_de_los_Latin_Grammy%2C_13_%28cropped%29_%282%29.jpg",
    description: "Cantante puertorriqueno de reggaeton",
  },

  // --- TRAP ---
  {
    name: "Future",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Future_-_Openair_Frauenfeld_2019_01_%28cropped2%29.jpg/500px-Future_-_Openair_Frauenfeld_2019_01_%28cropped2%29.jpg",
    description: "Rapero estadounidense de trap",
  },
  {
    name: "Young Thug",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Young_Thug_in_2021.png/500px-Young_Thug_in_2021.png",
    description: "Rapero estadounidense de trap",
  },
  {
    name: "Playboi Carti",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Playboi_Carti%2C_Clout_Festival_2024_05_%28cropped%29.jpg/500px-Playboi_Carti%2C_Clout_Festival_2024_05_%28cropped%29.jpg",
    description: "Rapero estadounidense de trap",
  },
  {
    name: "Lil Uzi Vert",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lil_Uzi_Vert_%282018%29.png/500px-Lil_Uzi_Vert_%282018%29.png",
    description: "Rapero estadounidense de trap",
  },
  {
    name: "21 Savage",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/21_Savage_2018.jpg/500px-21_Savage_2018.jpg",
    description: "Rapero britanico-estadounidense de trap",
  },
  {
    name: "Migos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Migos_Veld_festival_2017.jpg/500px-Migos_Veld_festival_2017.jpg",
    description: "Trio estadounidense de trap",
  },
  {
    name: "Gunna",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Gunna_June_2025.png/500px-Gunna_June_2025.png",
    description: "Rapero estadounidense de trap",
  },
  {
    name: "Lil Baby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Lil_Baby_2023.png",
    description: "Rapero estadounidense de trap",
  },
  {
    name: "Post Malone",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Post_Malone_July_2021_%28cropped%29.jpg/500px-Post_Malone_July_2021_%28cropped%29.jpg",
    description: "Cantante y rapero estadounidense de trap",
  },
  {
    name: "Travis Scott",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg/500px-Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg",
    description: "Rapero estadounidense de trap",
  },

  // --- LATIN ---
  {
    name: "Shakira",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg/500px-2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg",
    description: "Cantante colombiana de musica latina",
  },
  {
    name: "Ricky Martin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ricky_Martin_Golden_Globe_Awards_2018.jpg/500px-Ricky_Martin_Golden_Globe_Awards_2018.jpg",
    description: "Cantante puertorriqueno de musica latina",
  },
  {
    name: "Enrique Iglesias",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Enrique_Iglesias_2011%2C_2_%28cropped%29.jpg/500px-Enrique_Iglesias_2011%2C_2_%28cropped%29.jpg",
    description: "Cantante espanol de musica latina",
  },
  {
    name: "Luis Fonsi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Luis_Fonsi_2015_%28cropped%29.JPG/500px-Luis_Fonsi_2015_%28cropped%29.JPG",
    description: "Cantante puertorriqueno de musica latina",
  },
  {
    name: "Marc Anthony",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Interview_with_Marc_Anthony_%28cropped%29.png/500px-Interview_with_Marc_Anthony_%28cropped%29.png",
    description: "Cantante estadounidense de salsa y latin",
  },
  {
    name: "Romeo Santos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Romeo_Santos_y_Juan_Luis_Guerra_%28cropped%29.jpg/500px-Romeo_Santos_y_Juan_Luis_Guerra_%28cropped%29.jpg",
    description: "Rey de la bachata, dominicano",
  },
  {
    name: "Gloria Estefan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gloria_Estefan_in_2017.jpg/500px-Gloria_Estefan_in_2017.jpg",
    description: "Cantante cubana de musica latina",
  },
  {
    name: "Jennifer Lopez",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Jennifer_Lopez_at_the_2025_Sundance_Film_Festival_%28cropped_3%29.jpg/500px-Jennifer_Lopez_at_the_2025_Sundance_Film_Festival_%28cropped_3%29.jpg",
    description: "Cantante y actriz estadounidense de latin pop",
  },
  {
    name: "Juanes",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2023-11-16_Gala_de_los_Latin_Grammy%2C_14_%28cropped%29.jpg/500px-2023-11-16_Gala_de_los_Latin_Grammy%2C_14_%28cropped%29.jpg",
    description: "Cantante colombiano de pop latino",
  },
  {
    name: "Carlos Vives",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Carlos_Vives_-_World_Economic_Forum_on_Latin_America_2010.jpg/500px-Carlos_Vives_-_World_Economic_Forum_on_Latin_America_2010.jpg",
    description: "Cantante colombiano de vallenato y latin",
  },

  // --- AFROBEATS ---
  {
    name: "Burna Boy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Untold_2024_-Burna_Boy_%2853926047977%29_%28cropped%29.jpg/500px-Untold_2024_-Burna_Boy_%2853926047977%29_%28cropped%29.jpg",
    description: "Cantante nigeriano de afrobeats",
  },
  {
    name: "Wizkid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Wizkid_at_Iyanya%27s_album_launch_concert%2C_2013_%28cropped%29.jpg",
    description: "Cantante nigeriano de afrobeats",
  },
  {
    name: "Davido",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Davido_2024_%28cropped%29.jpg/500px-Davido_2024_%28cropped%29.jpg",
    description: "Cantante nigeriano de afrobeats",
  },
  {
    name: "Tems",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tems_on_NdaniTV_Sessions_-cropped.png/500px-Tems_on_NdaniTV_Sessions_-cropped.png",
    description: "Cantante nigeriana de afrobeats",
  },
  {
    name: "Rema",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Rema_at_2019_LFW_%28cropped%29.png",
    description: "Cantante nigeriano de afrobeats",
  },
  {
    name: "Ayra Starr",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ayra_Starr_performing_in_2023_at_Shoke_Shoke_Festival.jpg/500px-Ayra_Starr_performing_in_2023_at_Shoke_Shoke_Festival.jpg",
    description: "Cantante nigeriana de afrobeats",
  },
  {
    name: "Asake",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Asake_performing_in_a_Toronto_concert_%282024%29_%28cropped%29.png/500px-Asake_performing_in_a_Toronto_concert_%282024%29_%28cropped%29.png",
    description: "Cantante nigeriano de afrobeats",
  },
  {
    name: "Omah Lay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Omah_Lay_in_2023.jpg/500px-Omah_Lay_in_2023.jpg",
    description: "Cantante nigeriano de afrobeats",
  },
  {
    name: "Fireboy DML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Fireboy_DML.png",
    description: "Cantante nigeriano de afrobeats",
  },
  {
    name: "CKay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/CKay_during_an_interview_in_March_2022.png/500px-CKay_during_an_interview_in_March_2022.png",
    description: "Cantante nigeriano de afrobeats",
  },

  // --- EDM ---
  {
    name: "Calvin Harris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Calvin_Harris_-_Press_Image_1.tif/lossy-page1-500px-Calvin_Harris_-_Press_Image_1.tif.jpg",
    description: "DJ y productor escoces de EDM",
  },
  {
    name: "Marshmello",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/2016_Open_Beatz_-_Marshmello_-_by_2eight_-DSC_4448.jpg/500px-2016_Open_Beatz_-_Marshmello_-_by_2eight_-DSC_4448.jpg",
    description: "DJ y productor estadounidense de EDM",
  },
  {
    name: "David Guetta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2023-11-16_Gala_de_los_Latin_Grammy%2C_22_%28David_Guetta%29.jpg/500px-2023-11-16_Gala_de_los_Latin_Grammy%2C_22_%28David_Guetta%29.jpg",
    description: "DJ y productor frances de EDM",
  },
  {
    name: "Martin Garrix",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Martin_Garrix_-_Superbloom_Festival_2023_-_DSC2689_%28cropped%29.jpg/500px-Martin_Garrix_-_Superbloom_Festival_2023_-_DSC2689_%28cropped%29.jpg",
    description: "DJ y productor neerlandes de EDM",
  },
  {
    name: "Avicii",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Avicii_2014_003cr.jpg/500px-Avicii_2014_003cr.jpg",
    description: "DJ y productor sueco de EDM",
  },
  {
    name: "The Chainsmokers",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/The_Chainsmokers_2024_%28cropped%29_3.jpg/500px-The_Chainsmokers_2024_%28cropped%29_3.jpg",
    description: "Duo estadounidense de EDM",
  },
  {
    name: "Skrillex",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/From_First_To_Last_-_Emo_Nite_2_-_PH_Carl_Pocket_%28cropped%29.jpg/500px-From_First_To_Last_-_Emo_Nite_2_-_PH_Carl_Pocket_%28cropped%29.jpg",
    description: "DJ y productor estadounidense de EDM",
  },
  {
    name: "Deadmau5",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Deadmau5_Belknap_Park_2023_%28cropped%29.jpg/500px-Deadmau5_Belknap_Park_2023_%28cropped%29.jpg",
    description: "DJ y productor canadiense de EDM",
  },
  {
    name: "Tiesto",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Tiesto_LIV_Las_Vegas.png",
    description: "DJ y productor neerlandes de EDM",
  },
  {
    name: "Afrojack",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Afrojack_2015.jpg",
    description: "DJ y productor neerlandes de EDM",
  },

  // --- K-POP ---
  {
    name: "BTS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BTS_during_a_White_House_press_conference_May_31%2C_2022_%28cropped%29.jpg/500px-BTS_during_a_White_House_press_conference_May_31%2C_2022_%28cropped%29.jpg",
    description: "Grupo surcoreano de K-Pop",
  },
  {
    name: "BLACKPINK",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/20240809_Blackpink_Pink_Carpet_09.png/500px-20240809_Blackpink_Pink_Carpet_09.png",
    description: "Grupo femenino surcoreano de K-Pop",
  },
  {
    name: "EXO",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Exo_monster_160618_suwon.png/500px-Exo_monster_160618_suwon.png",
    description: "Grupo surcoreano de K-Pop",
  },
  {
    name: "TWICE",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Twice_260618.jpg/500px-Twice_260618.jpg",
    description: "Grupo femenino surcoreano de K-Pop",
  },
  {
    name: "Stray Kids",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Stray_Kids_at_the_40th_Golden_Disc_Awards%2C_January_10%2C_2026_%281%29.png/500px-Stray_Kids_at_the_40th_Golden_Disc_Awards%2C_January_10%2C_2026_%281%29.png",
    description: "Grupo surcoreano de K-Pop",
  },
  {
    name: "SEVENTEEN",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Seventeen_Carat_Land_24.jpg/500px-Seventeen_Carat_Land_24.jpg",
    description: "Grupo surcoreano de K-Pop",
  },
  {
    name: "NewJeans",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/NewJeans_2023_MelonMusicAwards_composite.jpg/500px-NewJeans_2023_MelonMusicAwards_composite.jpg",
    description: "Grupo femenino surcoreano de K-Pop",
  },
  {
    name: "Red Velvet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3%28Red_Velvet%29_%EC%BC%80%EC%9D%B4%EC%BD%98_%EC%9E%AC%ED%8C%AC_2024_%EB%A0%88%EB%93%9C%EC%B9%B4%ED%8E%AB_KCON_JAPAN_2024_%281%29.jpg/500px-%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3%28Red_Velvet%29_%EC%BC%80%EC%9D%B4%EC%BD%98_%EC%9E%AC%ED%8C%AC_2024_%EB%A0%88%EB%93%9C%EC%B9%B4%ED%8E%AB_KCON_JAPAN_2024_%281%29.jpg",
    description: "Grupo femenino surcoreano de K-Pop",
  },
  {
    name: "NCT 127",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/NCT127_-_Fact_Check_press_conference_Oct_6_2023.jpg/500px-NCT127_-_Fact_Check_press_conference_Oct_6_2023.jpg",
    description: "Grupo surcoreano de K-Pop",
  },
  {
    name: "ENHYPEN",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Enhypen_at_Golden_disc_awards.png/500px-Enhypen_at_Golden_disc_awards.png",
    description: "Grupo surcoreano de K-Pop",
  },
];
//Hola Antonio, mira aqui evidentemente use IA para obtener la informacion de los artistas y poner tanto su referencia como su descripcion, nombre e imagen
const seed = async () => {
  //Para esta funcion tambien necesita ayuda para poder referenciar los ids de cada uno de los elementos y no tener que ponerlos manualmente dentro del json porque seria un rollo gigante, entonces lo unico que hago es generarlos y los mapeo, para luego poder referenciarlos con un foreach para cada uno de los artistas y generos
  try {
    await mongoose.connect("mongodb://localhost:27017/MusicGenres");
    await Artist.deleteMany();
    const genres = await Genre.find();
    const genreById = Object.fromEntries(
      genres.map((genre) => [genre.title, genre._id]),
    );
    ARTISTS.forEach((artist, index) => {
      artist.genre = genreById[GENRE_ORDER[Math.floor(index / 10)]];
    });
    const inserted = await Artist.insertMany(ARTISTS);
    console.log(`Insertando ${inserted.length} artistas en la base de datos`);
  } catch (error) {
    console.log("Error creando los artistas:", error.message);
  } finally {
    await mongoose.disconnect();
  }
  //Y el resto de elementos son los mismos que hemos visto en clase contigo, entonces por el momento normal
};

seed();
