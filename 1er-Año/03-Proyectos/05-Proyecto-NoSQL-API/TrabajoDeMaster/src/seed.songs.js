const mongoose = require("mongoose");
const Song = require("./models/song.music.model");
const Artist = require("./models/artist.music.model");
const Genre = require("./models/genre.music.model");

const SONGS = [
  {
    title: "The Fate of Ophelia",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2d/46/e0/2d46e0bc-8ab9-85dd-4b56-ee6951351034/25UM1IM19577.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Taylor%20Swift%20The%20Fate%20of%20Ophelia",
    description: "Cancion de Taylor Swift del album The Life of a Showgirl",
    artistName: "Taylor Swift",
  },
  {
    title: "Cruel Summer",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Taylor%20Swift%20Cruel%20Summer",
    description: "Cancion de Taylor Swift del album Lover",
    artistName: "Taylor Swift",
  },
  {
    title: "You Belong With Me",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/59/dc/cb/59dccbb0-73f9-701e-7b5b-58c902ddfe68/09UMDIM00338.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Taylor%20Swift%20You%20Belong%20With%20Me",
    description: "Cancion de Taylor Swift del album Fearless (Platinum Edition)",
    artistName: "Taylor Swift",
  },
  {
    title: "hate that i made you love me",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/56/f4/96/56f49612-02dd-83f4-44fe-d2118cc70707/26UMGIM51129.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ariana%20Grande%20hate%20that%20i%20made%20you%20love%20me",
    description: "Cancion de Ariana Grande del album petal",
    artistName: "Ariana Grande",
  },
  {
    title: "Into You",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3f/70/0f/3f700f55-1c91-c890-8cb7-b8886f87b7f6/16UMGIM30042.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ariana%20Grande%20Into%20You",
    description: "Cancion de Ariana Grande del album Dangerous Woman (Video Album)",
    artistName: "Ariana Grande",
  },
  {
    title: "One Last Time",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a5/39/86/a5398609-ad90-50d3-57ad-0f87a4df5ac4/14UMGIM28138.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ariana%20Grande%20One%20Last%20Time",
    description: "Cancion de Ariana Grande del album My Everything (Bonus Tracks Edition)",
    artistName: "Ariana Grande",
  },
  {
    title: "Beauty and a Beat (feat. Nicki Minaj)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/73/08/1a/73081a96-0f7c-b5f8-2757-5c17fb714323/12UMGIM31899.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Justin%20Bieber%20Beauty%20and%20a%20Beat%20(feat.%20Nicki%20Minaj)",
    description: "Cancion de Justin Bieber del album Believe (Deluxe Edition)",
    artistName: "Justin Bieber",
  },
  {
    title: "DAISIES",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/09/36/f9093663-c05f-7f95-0a60-4e95d52fbb22/25UMGIM93915.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Justin%20Bieber%20DAISIES",
    description: "Cancion de Justin Bieber del album SWAG",
    artistName: "Justin Bieber",
  },
  {
    title: "Baby (feat. Ludacris)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b9/0a/b4/b90ab45a-07b1-0bcc-331c-c496a21d07e4/10UMGIM01134.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Justin%20Bieber%20Baby%20(feat.%20Ludacris)",
    description: "Cancion de Justin Bieber del album My World 2.0 (Bonus Track Version)",
    artistName: "Justin Bieber",
  },
  {
    title: "Perfect",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ed%20Sheeran%20Perfect",
    description: "Cancion de Ed Sheeran del album ÷ (Deluxe)",
    artistName: "Ed Sheeran",
  },
  {
    title: "Thinking Out Loud",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2d/36/f9/2d36f9a7-2c3e-ce0f-7fb6-036feecb221f/825646974450.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ed%20Sheeran%20Thinking%20Out%20Loud",
    description: "Cancion de Ed Sheeran del album x (Wembley Edition)",
    artistName: "Ed Sheeran",
  },
  {
    title: "Shape of You",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ed%20Sheeran%20Shape%20of%20You",
    description: "Cancion de Ed Sheeran del album ÷ (Deluxe)",
    artistName: "Ed Sheeran",
  },
  {
    title: "Levitating",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Dua%20Lipa%20Levitating",
    description: "Cancion de Dua Lipa del album Future Nostalgia",
    artistName: "Dua Lipa",
  },
  {
    title: "New Rules",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c1/54/2d/c1542d45-c6c2-12ca-7308-6eacd762c562/190295807870.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Dua%20Lipa%20New%20Rules",
    description: "Cancion de Dua Lipa del album Dua Lipa (Deluxe)",
    artistName: "Dua Lipa",
  },
  {
    title: "Dance The Night",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c0/54/97/c05497aa-c19f-bf4f-de29-71edf30fbefb/075679688767.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Dua%20Lipa%20Dance%20The%20Night",
    description: "Cancion de Dua Lipa del album Barbie The Album",
    artistName: "Dua Lipa",
  },
  {
    title: "Sign of the Times",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Harry%20Styles%20Sign%20of%20the%20Times",
    description: "Cancion de Harry Styles del album Harry Styles",
    artistName: "Harry Styles",
  },
  {
    title: "American Girls",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/07/41/6a/07416a78-38b9-2d47-7ce8-8a52a44c510f/196874010112.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Harry%20Styles%20American%20Girls",
    description: "Cancion de Harry Styles del album Kiss All The Time. Disco, Occasionally.",
    artistName: "Harry Styles",
  },
  {
    title: "As It Was",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Harry%20Styles%20As%20It%20Was",
    description: "Cancion de Harry Styles del album Harry's House",
    artistName: "Harry Styles",
  },
  {
    title: "WILDFLOWER",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Billie%20Eilish%20WILDFLOWER",
    description: "Cancion de Billie Eilish del album HIT ME HARD AND SOFT",
    artistName: "Billie Eilish",
  },
  {
    title: "BIRDS OF A FEATHER",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Billie%20Eilish%20BIRDS%20OF%20A%20FEATHER",
    description: "Cancion de Billie Eilish del album HIT ME HARD AND SOFT",
    artistName: "Billie Eilish",
  },
  {
    title: "ocean eyes",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/02/1d/30/021d3036-5503-3ed3-df00-882f2833a6ae/17UM1IM17026.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Billie%20Eilish%20ocean%20eyes",
    description: "Cancion de Billie Eilish del album dont smile at me",
    artistName: "Billie Eilish",
  },
  {
    title: "Treat You Better",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5c/57/e4/5c57e46a-0950-7ebd-8010-28453c1c0055/16UMGIM51723.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Shawn%20Mendes%20Treat%20You%20Better",
    description: "Cancion de Shawn Mendes del album Illuminate (Deluxe)",
    artistName: "Shawn Mendes",
  },
  {
    title: "There's Nothing Holdin' Me Back",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5c/57/e4/5c57e46a-0950-7ebd-8010-28453c1c0055/16UMGIM51723.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Shawn%20Mendes%20There's%20Nothing%20Holdin'%20Me%20Back",
    description: "Cancion de Shawn Mendes del album Illuminate (Deluxe)",
    artistName: "Shawn Mendes",
  },
  {
    title: "Stitches",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e3/d4/de/e3d4def5-886e-da47-e1cf-568566510b53/15UMGIM62454.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Shawn%20Mendes%20Stitches",
    description: "Cancion de Shawn Mendes del album Handwritten (Revisited)",
    artistName: "Shawn Mendes",
  },
  {
    title: "Last Friday Night (T.G.I.F.)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c8/d3/42/c8d342af-26d9-3ec2-c511-e1eaf860e299/13UABIM57787.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Katy%20Perry%20Last%20Friday%20Night%20(T.G.I.F.)",
    description: "Cancion de Katy Perry del album Teenage Dream",
    artistName: "Katy Perry",
  },
  {
    title: "The One That Got Away",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c8/d3/42/c8d342af-26d9-3ec2-c511-e1eaf860e299/13UABIM57787.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Katy%20Perry%20The%20One%20That%20Got%20Away",
    description: "Cancion de Katy Perry del album Teenage Dream",
    artistName: "Katy Perry",
  },
  {
    title: "Teenage Dream",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c8/d3/42/c8d342af-26d9-3ec2-c511-e1eaf860e299/13UABIM57787.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Katy%20Perry%20Teenage%20Dream",
    description: "Cancion de Katy Perry del album Teenage Dream",
    artistName: "Katy Perry",
  },
  {
    title: "Risk It All",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ed/46/bf/ed46bf4e-7cb9-965a-54f3-03059977fe6c/075679589293.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Bruno%20Mars%20Risk%20It%20All",
    description: "Cancion de Bruno Mars del album The Romantic",
    artistName: "Bruno Mars",
  },
  {
    title: "I Just Might",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ed/46/bf/ed46bf4e-7cb9-965a-54f3-03059977fe6c/075679589293.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Bruno%20Mars%20I%20Just%20Might",
    description: "Cancion de Bruno Mars del album The Romantic",
    artistName: "Bruno Mars",
  },
  {
    title: "Die With A Smile",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/ae/f2/11aef294-f57c-bab9-c9fc-529162984e62/24UMGIM85348.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Bruno%20Mars%20Die%20With%20A%20Smile",
    description: "Cancion de Bruno Mars del album Die With A Smile - Single",
    artistName: "Bruno Mars",
  },
  {
    title: "Here Comes the Sun",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Beatles%20Here%20Comes%20the%20Sun",
    description: "Cancion de The Beatles del album Abbey Road (Remastered)",
    artistName: "The Beatles",
  },
  {
    title: "In My Life",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/af/20/aa/af20aa89-4002-11fb-25d8-ff544af67eb4/00602567725404.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Beatles%20In%20My%20Life",
    description: "Cancion de The Beatles del album Rubber Soul",
    artistName: "The Beatles",
  },
  {
    title: "Yesterday",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1a/19/db/1a19db26-17ad-b986-11a9-f72ac7a6194b/18UMGIM31214.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Beatles%20Yesterday",
    description: "Cancion de The Beatles del album Help!",
    artistName: "The Beatles",
  },
  {
    title: "Bohemian Rhapsody",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Queen%20Bohemian%20Rhapsody",
    description: "Cancion de Queen del album Greatest Hits I, II & III: The Platinum Collection",
    artistName: "Queen",
  },
  {
    title: "Another One Bites the Dust",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Queen%20Another%20One%20Bites%20the%20Dust",
    description: "Cancion de Queen del album Greatest Hits I, II & III: The Platinum Collection",
    artistName: "Queen",
  },
  {
    title: "We Will Rock You",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Queen%20We%20Will%20Rock%20You",
    description: "Cancion de Queen del album Greatest Hits I, II & III: The Platinum Collection",
    artistName: "Queen",
  },
  {
    title: "Stairway to Heaven",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5c/15/9b/5c159b27-95ca-b9a7-84e3-28e795fffd39/dj.kvkrpptq.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Led%20Zeppelin%20Stairway%20to%20Heaven",
    description: "Cancion de Led Zeppelin del album Led Zeppelin IV (Remastered)",
    artistName: "Led Zeppelin",
  },
  {
    title: "Immigrant Song",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/fd/14/62fd14aa-d202-a86a-d948-0a5550b35fc3/dj.rkzuiqye.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Led%20Zeppelin%20Immigrant%20Song",
    description: "Cancion de Led Zeppelin del album Led Zeppelin III (Remastered)",
    artistName: "Led Zeppelin",
  },
  {
    title: "Kashmir",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/82/6c/5d/826c5d66-67b7-62f2-4d78-dd3c7b415e08/dj.pifhrvpa.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Led%20Zeppelin%20Kashmir",
    description: "Cancion de Led Zeppelin del album Physical Graffiti (Remastered)",
    artistName: "Led Zeppelin",
  },
  {
    title: "Wish You Were Here",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/aa/e0/ab/aae0ab6a-d906-a189-81bf-70b56aa43f7a/886445635843.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Pink%20Floyd%20Wish%20You%20Were%20Here",
    description: "Cancion de Pink Floyd del album Wish You Were Here",
    artistName: "Pink Floyd",
  },
  {
    title: "Comfortably Numb",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/17/ec/3e17ec6d-f980-c64f-19e0-a6fd8bbf0c10/886445635850.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Pink%20Floyd%20Comfortably%20Numb",
    description: "Cancion de Pink Floyd del album The Wall",
    artistName: "Pink Floyd",
  },
  {
    title: "Do You Want To Marry Me",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6d/86/16/6d861697-9856-f868-294b-65cc9cdb4b0f/1200214736224.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Pink%20Floyd%20Do%20You%20Want%20To%20Marry%20Me",
    description: "Cancion de Pink Floyd del album A cœur Joie - EP",
    artistName: "Pink Floyd",
  },
  {
    title: "Smells Like Teen Spirit",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nirvana%20Smells%20Like%20Teen%20Spirit",
    description: "Cancion de Nirvana del album Nevermind",
    artistName: "Nirvana",
  },
  {
    title: "Come As You Are",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nirvana%20Come%20As%20You%20Are",
    description: "Cancion de Nirvana del album Nevermind",
    artistName: "Nirvana",
  },
  {
    title: "Heart-Shaped Box",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e3/20/03/e32003a4-99bc-1c70-40ba-001882f35dba/00602537526840.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nirvana%20Heart-Shaped%20Box",
    description: "Cancion de Nirvana del album In Utero (20th Anniversary Edition)",
    artistName: "Nirvana",
  },
  {
    title: "Thunderstruck",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/fc/c2/f8/fcc2f850-1d81-7440-c0a0-de7fcef1e911/dj.rrgizfic.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=AC%2FDC%20Thunderstruck",
    description: "Cancion de AC/DC del album The Razors Edge",
    artistName: "AC/DC",
  },
  {
    title: "Back In Black",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1e/14/58/1e145814-281a-58e0-3ab1-145f5d1af421/886443673441.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=AC%2FDC%20Back%20In%20Black",
    description: "Cancion de AC/DC del album Back In Black",
    artistName: "AC/DC",
  },
  {
    title: "Highway to Hell",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b9/c8/ef/b9c8ef42-bbc9-64df-11f8-717571f6730f/886443673458.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=AC%2FDC%20Highway%20to%20Hell",
    description: "Cancion de AC/DC del album Highway to Hell",
    artistName: "AC/DC",
  },
  {
    title: "Everlong",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/68/f5/86/68f586ca-a375-9965-a864-9e227e77ef5b/884977570328.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Foo%20Fighters%20Everlong",
    description: "Cancion de Foo Fighters del album The Colour And The Shape",
    artistName: "Foo Fighters",
  },
  {
    title: "My Hero",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/68/f5/86/68f586ca-a375-9965-a864-9e227e77ef5b/884977570328.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Foo%20Fighters%20My%20Hero",
    description: "Cancion de Foo Fighters del album The Colour And The Shape",
    artistName: "Foo Fighters",
  },
  {
    title: "Learn to Fly",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ef/02/55/ef025575-aa1d-efc2-f789-04f592275b8a/888880335630.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Foo%20Fighters%20Learn%20to%20Fly",
    description: "Cancion de Foo Fighters del album There Is Nothing Left to Lose",
    artistName: "Foo Fighters",
  },
  {
    title: "Scar Tissue",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Red%20Hot%20Chili%20Peppers%20Scar%20Tissue",
    description: "Cancion de Red Hot Chili Peppers del album Greatest Hits",
    artistName: "Red Hot Chili Peppers",
  },
  {
    title: "Under the Bridge",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Red%20Hot%20Chili%20Peppers%20Under%20the%20Bridge",
    description: "Cancion de Red Hot Chili Peppers del album Greatest Hits",
    artistName: "Red Hot Chili Peppers",
  },
  {
    title: "Can't Stop",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/ec/27/73ec2771-a008-e55b-8ccd-faf6257d5cd0/093624932178.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Red%20Hot%20Chili%20Peppers%20Can't%20Stop",
    description: "Cancion de Red Hot Chili Peppers del album By the Way",
    artistName: "Red Hot Chili Peppers",
  },
  {
    title: "Sweet Child O' Mine",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a0/4d/c4/a04dc484-03cc-02aa-fa82-5334fcb4bc16/18UMGIM24878.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Guns%20N'%20Roses%20Sweet%20Child%20O'%20Mine",
    description: "Cancion de Guns N' Roses del album Appetite For Destruction",
    artistName: "Guns N' Roses",
  },
  {
    title: "November Rain",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6a/e2/1f/6ae21fa9-c897-3be1-2967-50eefae22b93/06UMGIM05041.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Guns%20N'%20Roses%20November%20Rain",
    description: "Cancion de Guns N' Roses del album Use Your Illusion I",
    artistName: "Guns N' Roses",
  },
  {
    title: "Welcome To The Jungle",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a0/4d/c4/a04dc484-03cc-02aa-fa82-5334fcb4bc16/18UMGIM24878.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Guns%20N'%20Roses%20Welcome%20To%20The%20Jungle",
    description: "Cancion de Guns N' Roses del album Appetite For Destruction",
    artistName: "Guns N' Roses",
  },
  {
    title: "Gimme Shelter (Remastered 2019)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/69/64/67/696467fe-9ed1-b65e-1016-a10d07e6464d/20UMGIM14087.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Rolling%20Stones%20Gimme%20Shelter%20(Remastered%202019)",
    description: "Cancion de The Rolling Stones del album Let It Bleed (Remastered 2019)",
    artistName: "The Rolling Stones",
  },
  {
    title: "Sympathy For The Devil",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a3/d1/78/a3d178a8-f1c2-c1c3-1c5d-d78ab3af9768/20UMGIM13726.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Rolling%20Stones%20Sympathy%20For%20The%20Devil",
    description: "Cancion de The Rolling Stones del album Beggars Banquet (2018 Remaster)",
    artistName: "The Rolling Stones",
  },
  {
    title: "Paint It Black",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/29/b7/81/29b781e5-3773-c87e-c6a8-82581e53d270/13ABKIM00053.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Rolling%20Stones%20Paint%20It%20Black",
    description: "Cancion de The Rolling Stones del album Hot Rocks 1964-1971",
    artistName: "The Rolling Stones",
  },
  {
    title: "luther",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/50/c2/cc/50c2cc95-3658-9417-0d4b-831abde44ba1/24UM1IM28978.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Kendrick%20Lamar%20luther",
    description: "Cancion de Kendrick Lamar del album GNX",
    artistName: "Kendrick Lamar",
  },
  {
    title: "LOVE. (feat. Zacari)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/86/c9/bb/86c9bb30-fe3d-442e-33c1-c106c4d23705/17UMGIM88776.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Kendrick%20Lamar%20LOVE.%20(feat.%20Zacari)",
    description: "Cancion de Kendrick Lamar del album DAMN.",
    artistName: "Kendrick Lamar",
  },
  {
    title: "Not Like Us",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/31/3a/3f/313a3fbc-bb8f-80c7-b5a2-e226869a38cd/24UMGIM51924.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Kendrick%20Lamar%20Not%20Like%20Us",
    description: "Cancion de Kendrick Lamar del album Not Like Us - Single",
    artistName: "Kendrick Lamar",
  },
  {
    title: "Heartless",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4d/75/2d/4d752db1-022d-f65d-40a1-a2390f01427a/13UAEIM26465.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Kanye%20West%20Heartless",
    description: "Cancion de Kanye West del album 808s & Heartbreak",
    artistName: "Kanye West",
  },
  {
    title: "Hurricane",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/13/7b/62137b3f-7722-59f5-2ee1-b5aff9426869/21UMGIM64738.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Kanye%20West%20Hurricane",
    description: "Cancion de Kanye West del album Donda",
    artistName: "Kanye West",
  },
  {
    title: "All We Got (feat. Kanye West & Chicago Children's Choir)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/3f/b5/0d3fb523-1b70-b4b1-6bf7-ee94a89ab805/859717324721_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Kanye%20West%20All%20We%20Got%20(feat.%20Kanye%20West%20%26%20Chicago%20Children's%20Choir)",
    description: "Cancion de Kanye West del album Coloring Book",
    artistName: "Kanye West",
  },
  {
    title: "Kevin's Heart",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/7a/8e/9d/7a8e9dcb-128c-aeaa-540d-eea733637695/18UMGIM22943.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=J.%20Cole%20Kevin's%20Heart",
    description: "Cancion de J. Cole del album KOD",
    artistName: "J. Cole",
  },
  {
    title: "KOD",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/7a/8e/9d/7a8e9dcb-128c-aeaa-540d-eea733637695/18UMGIM22943.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=J.%20Cole%20KOD",
    description: "Cancion de J. Cole del album KOD",
    artistName: "J. Cole",
  },
  {
    title: "Wet Dreamz",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ee/28/67/ee286794-6c33-a8c2-5c37-c04f1cb5e8a6/21UM1IM54415.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=J.%20Cole%20Wet%20Dreamz",
    description: "Cancion de J. Cole del album 2014 Forest Hills Drive",
    artistName: "J. Cole",
  },
  {
    title: "Crazy In Love (feat. JAŸ-Z)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bb/68/02/bb680285-7ee1-da1e-ebb3-0da1631384be/dj.xjyntrqr.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jay-Z%20Crazy%20In%20Love%20(feat.%20JA%C5%B8-Z)",
    description: "Cancion de Jay-Z del album Crazy In Love (feat. JAŸ-Z) - Single",
    artistName: "Jay-Z",
  },
  {
    title: "That's How You Like It (feat. JAŸ-Z)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music/03/c5/d4/mzi.ldvrmhxt.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jay-Z%20That's%20How%20You%20Like%20It%20(feat.%20JA%C5%B8-Z)",
    description: "Cancion de Jay-Z del album Dangerously in Love",
    artistName: "Jay-Z",
  },
  {
    title: "Deja Vu (feat. JAŸ-Z)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/47/b2/b2/47b2b26b-5abd-0953-6688-7dfff80508ec/mzi.sozuruch.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jay-Z%20Deja%20Vu%20(feat.%20JA%C5%B8-Z)",
    description: "Cancion de Jay-Z del album B'Day Deluxe Edition",
    artistName: "Jay-Z",
  },
  {
    title: "Nas Morales",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c9/ca/6b/c9ca6b51-87a9-4a13-d37f-24535687023d/23UMGIM63882.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nas%20Nas%20Morales",
    description: "Cancion de Nas del album METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)",
    artistName: "Nas",
  },
  {
    title: "I Can",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0b/45/d1/0b45d110-e637-c7b1-be21-14380c206ea2/696998693029.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nas%20I%20Can",
    description: "Cancion de Nas del album God's Son",
    artistName: "Nas",
  },
  {
    title: "My President (feat. Nas)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c4/66/0a/c4660a42-8a15-e495-f80e-47d77e809aeb/08UMGIM17939.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nas%20My%20President%20(feat.%20Nas)",
    description: "Cancion de Nas del album The Recession (Bonus Track Version)",
    artistName: "Nas",
  },
  {
    title: "I'm Not The Only One (feat. A$AP Rocky)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f2/59/8a/f2598a7e-945a-3cb6-24e1-9c3ead873760/15UMGIM50961.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=A%24AP%20Rocky%20I'm%20Not%20The%20Only%20One%20(feat.%20A%24AP%20Rocky)",
    description: "Cancion de A$AP Rocky del album In The Lonely Hour (Drowning Shadows Edition)",
    artistName: "A$AP Rocky",
  },
  {
    title: "Good For You (feat. A$AP Rocky)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c7/6b/5f/c76b5fb3-c720-075d-5c2f-dadb14687f62/22UM1IM18602.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=A%24AP%20Rocky%20Good%20For%20You%20(feat.%20A%24AP%20Rocky)",
    description: "Cancion de A$AP Rocky del album Sex Music",
    artistName: "A$AP Rocky",
  },
  {
    title: "I'm Not The Only One (feat. A$AP Rocky)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0d/03/61/0d03616f-5db9-74a5-2be6-2a97419a559b/24UMGIM49156.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=A%24AP%20Rocky%20I'm%20Not%20The%20Only%20One%20(feat.%20A%24AP%20Rocky)",
    description: "Cancion de A$AP Rocky del album In The Lonely Hour (10th Anniversary Edition)",
    artistName: "A$AP Rocky",
  },
  {
    title: "Whoville",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a8/df/7d/a8df7d1e-0a11-6228-61af-3230783a9485/886447419601.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tyler%2C%20the%20Creator%20Whoville",
    description: "Cancion de Tyler, the Creator del album Music Inspired by Illumination & Dr. Seuss' The Grinch - EP",
    artistName: "Tyler, the Creator",
  },
  {
    title: "Big Bag",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a8/df/7d/a8df7d1e-0a11-6228-61af-3230783a9485/886447419601.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tyler%2C%20the%20Creator%20Big%20Bag",
    description: "Cancion de Tyler, the Creator del album Music Inspired by Illumination & Dr. Seuss' The Grinch - EP",
    artistName: "Tyler, the Creator",
  },
  {
    title: "After the Storm (feat. Tyler, The Creator & Bootsy Collins)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/de/e1/8b/dee18be4-276a-1e90-7aec-883c91a5a43e/17UM1IM08185.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tyler%2C%20the%20Creator%20After%20the%20Storm%20(feat.%20Tyler%2C%20The%20Creator%20%26%20Bootsy%20Collins)",
    description: "Cancion de Tyler, the Creator del album Isolation",
    artistName: "Tyler, the Creator",
  },
  {
    title: "Walk It Out (Remix) [feat. OutKast & Jim Jones]",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ab/de/f7/abdef7e7-cae7-b22d-1cde-6a315b4f633e/mzi.fjhdszvh.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Outkast%20Walk%20It%20Out%20(Remix)%20%5Bfeat.%20OutKast%20%26%20Jim%20Jones%5D",
    description: "Cancion de Outkast del album Walk It Out (Remix) [feat. OutKast & Jim Jones] - Single",
    artistName: "Outkast",
  },
  {
    title: "Behold a Lady",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/39/e6/fc/39e6fca2-9d12-cc95-81d0-f8f9d11d51c7/196872578973.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Outkast%20Behold%20a%20Lady",
    description: "Cancion de Outkast del album Speakerboxxx/The Love Below",
    artistName: "Outkast",
  },
  {
    title: "Outkast (feat. Ty Dolla $ign)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/00/3f/05/003f05d0-31d9-c973-a032-1679e36a08aa/00850498007124.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Outkast%20Outkast%20(feat.%20Ty%20Dolla%20%24ign)",
    description: "Cancion de Outkast del album Inzombia",
    artistName: "Outkast",
  },
  {
    title: "Clan In Da Front (feat. RZA & GZA)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8c/20/1f/8c201f03-7617-2d8b-3d8d-e0ba2d55041b/196872123784.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Wu-Tang%20Clan%20Clan%20In%20Da%20Front%20(feat.%20RZA%20%26%20GZA)",
    description: "Cancion de Wu-Tang Clan del album Enter the Wu-Tang (36 Chambers)",
    artistName: "Wu-Tang Clan",
  },
  {
    title: "Never Let Go",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/e7/20/36/e72036cb-d012-b9ce-e7af-0e09516fc6cf/093624932277.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Wu-Tang%20Clan%20Never%20Let%20Go",
    description: "Cancion de Wu-Tang Clan del album A Better Tomorrow",
    artistName: "Wu-Tang Clan",
  },
  {
    title: "After the Laughter Comes Tears (Tearz Vocal)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/13/3c/82/133c826b-e0b0-e156-c183-f3b28149a9cc/886446442174.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Wu-Tang%20Clan%20After%20the%20Laughter%20Comes%20Tears%20(Tearz%20Vocal)",
    description: "Cancion de Wu-Tang Clan del album Protect Ya Neck - EP",
    artistName: "Wu-Tang Clan",
  },
  {
    title: "Love of My Life (An Ode to Hip Hop) [Longer Version] [feat. Common]",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c9/fc/70/c9fc70d3-cd73-783c-072c-db7f0ba6f464/10UMGIM10929.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Common%20Love%20of%20My%20Life%20(An%20Ode%20to%20Hip%20Hop)%20%5BLonger%20Version%5D%20%5Bfeat.%20Common%5D",
    description: "Cancion de Common del album Go! - Common Classics",
    artistName: "Common",
  },
  {
    title: "Common (feat. Brandi Carlile)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ab/24/5a/ab245a92-79a8-3d66-4fff-a5116908bce8/886447532270.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Common%20Common%20(feat.%20Brandi%20Carlile)",
    description: "Cancion de Common del album GIRL",
    artistName: "Common",
  },
  {
    title: "Common",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9c/44/ed/9c44edc1-d9f6-c029-a38c-841842490a1d/886448747369.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Common%20Common",
    description: "Cancion de Common del album Icarus Falls",
    artistName: "Common",
  },
  {
    title: "USE THIS GOSPEL (feat. Kanye West & Eminem) [REMIX]",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/7b/6c/7d/7b6c7d04-86f6-a62a-26d1-66d293125982/196589286376.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Eminem%20USE%20THIS%20GOSPEL%20(feat.%20Kanye%20West%20%26%20Eminem)%20%5BREMIX%5D",
    description: "Cancion de Eminem del album GOD DID",
    artistName: "Eminem",
  },
  {
    title: "Without Me",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dd/5c/e6/dd5ce621-f7d2-f767-7a08-e7a7eaa7870b/00602537526994.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Eminem%20Without%20Me",
    description: "Cancion de Eminem del album The Eminem Show",
    artistName: "Eminem",
  },
  {
    title: "Lose Yourself",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/08/23/fc/0823fcd9-cb44-695b-32bf-b3bf51d9f800/00606949351229.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Eminem%20Lose%20Yourself",
    description: "Cancion de Eminem del album 8 Mile (Music from and Inspired By the Motion Picture)",
    artistName: "Eminem",
  },
  {
    title: "Hit 'Em Up",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/72/00/89/720089d8-c063-a323-e0cc-de921e50b968/00602527051789.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tupac%20Shakur%20Hit%20'Em%20Up",
    description: "Cancion de Tupac Shakur del album Greatest Hits",
    artistName: "Tupac Shakur",
  },
  {
    title: "Playa Cardz Right (feat. 2Pac)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f8/7a/40/f87a409a-5cd7-5974-2a52-79f03d28f30a/08UMGIM26293.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tupac%20Shakur%20Playa%20Cardz%20Right%20(feat.%202Pac)",
    description: "Cancion de Tupac Shakur del album A Different Me",
    artistName: "Tupac Shakur",
  },
  {
    title: "California Love (feat. Roger Troutman & Dr. Dre)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/72/00/89/720089d8-c063-a323-e0cc-de921e50b968/00602527051789.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tupac%20Shakur%20California%20Love%20(feat.%20Roger%20Troutman%20%26%20Dr.%20Dre)",
    description: "Cancion de Tupac Shakur del album Greatest Hits",
    artistName: "Tupac Shakur",
  },
  {
    title: "Big Poppa",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f8/6a/3d/f86a3db0-d518-cd49-c0c9-25e767ae0a6d/075679456861.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Notorious%20B.I.G.%20Big%20Poppa",
    description: "Cancion de The Notorious B.I.G. del album Ready To Die the Remaster",
    artistName: "The Notorious B.I.G.",
  },
  {
    title: "Juicy",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f8/6a/3d/f86a3db0-d518-cd49-c0c9-25e767ae0a6d/075679456861.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Notorious%20B.I.G.%20Juicy",
    description: "Cancion de The Notorious B.I.G. del album Ready To Die the Remaster",
    artistName: "The Notorious B.I.G.",
  },
  {
    title: "Warning",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f8/6a/3d/f86a3db0-d518-cd49-c0c9-25e767ae0a6d/075679456861.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Notorious%20B.I.G.%20Warning",
    description: "Cancion de The Notorious B.I.G. del album Ready To Die the Remaster",
    artistName: "The Notorious B.I.G.",
  },
  {
    title: "California Gurls (feat. Snoop Dogg)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c8/d3/42/c8d342af-26d9-3ec2-c511-e1eaf860e299/13UABIM57787.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Snoop%20Dogg%20California%20Gurls%20(feat.%20Snoop%20Dogg)",
    description: "Cancion de Snoop Dogg del album Teenage Dream",
    artistName: "Snoop Dogg",
  },
  {
    title: "California Gurls (feat. Snoop Dogg)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/75/97/31/759731eb-b429-dfe3-c41f-34435998d102/13UABIM57845.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Snoop%20Dogg%20California%20Gurls%20(feat.%20Snoop%20Dogg)",
    description: "Cancion de Snoop Dogg del album Teenage Dream (Deluxe Edition)",
    artistName: "Snoop Dogg",
  },
  {
    title: "Sensual Seduction",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9a/06/2b/9a062bef-ee66-3233-de44-bedf1618b87e/00602517636460.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Snoop%20Dogg%20Sensual%20Seduction",
    description: "Cancion de Snoop Dogg del album Ego Trippin'",
    artistName: "Snoop Dogg",
  },
  {
    title: "Down On Me (feat. 50 Cent)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/4e/da/e3/4edae341-488b-a5c0-bcd3-0b047508124e/10UMGIM24508.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=50%20Cent%20Down%20On%20Me%20(feat.%2050%20Cent)",
    description: "Cancion de 50 Cent del album All About You (Deluxe Edition)",
    artistName: "50 Cent",
  },
  {
    title: "Hate It or Love It (feat. 50 Cent)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/fe/d1/3b/fed13b47-091c-a793-56ad-b2bbc677e92a/00602498641453.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=50%20Cent%20Hate%20It%20or%20Love%20It%20(feat.%2050%20Cent)",
    description: "Cancion de 50 Cent del album The Documentary (Edited Version)",
    artistName: "50 Cent",
  },
  {
    title: "Can't Leave 'Em Alone (feat. 50 Cent)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music/a1/d3/05/mzi.nzfmzboj.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=50%20Cent%20Can't%20Leave%20'Em%20Alone%20(feat.%2050%20Cent)",
    description: "Cancion de 50 Cent del album The Evolution (Bonus Track Edition)",
    artistName: "50 Cent",
  },
  {
    title: "No Diggity (feat. Dr. Dre & Queen Pen)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/b4/45/9fb4457e-7ab5-0484-a81f-4666ba8fae80/06UMGIM01977.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Dr.%20Dre%20No%20Diggity%20(feat.%20Dr.%20Dre%20%26%20Queen%20Pen)",
    description: "Cancion de Dr. Dre del album Another Level",
    artistName: "Dr. Dre",
  },
  {
    title: "No Diggity (feat. Dr. Dre & Queen Pen)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0a/d1/eb/0ad1ebce-96d4-6fe6-3f87-44401d6f4910/06UMGIM15261.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Dr.%20Dre%20No%20Diggity%20(feat.%20Dr.%20Dre%20%26%20Queen%20Pen)",
    description: "Cancion de Dr. Dre del album No Diggity' - The Very Best of Blackstreet",
    artistName: "Dr. Dre",
  },
  {
    title: "I Need a Doctor (feat. Eminem & Skylar Grey)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/a3/04/2b/a3042b27-59a9-06d4-995b-8d542a6401ce/00602527609003.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Dr.%20Dre%20I%20Need%20a%20Doctor%20(feat.%20Eminem%20%26%20Skylar%20Grey)",
    description: "Cancion de Dr. Dre del album I Need a Doctor (feat. Eminem & Skylar Grey)  - Single",
    artistName: "Dr. Dre",
  },
  {
    title: "Ice Cube",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/20/9a/da/209adaea-0423-c811-242e-09a9ff006c32/748926851718_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ice%20Cube%20Ice%20Cube",
    description: "Cancion de Ice Cube del album Ice Cube - Single",
    artistName: "Ice Cube",
  },
  {
    title: "Ice cube",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/31/b6/d8/31b6d8ad-1c8c-56c6-dc07-228bbb6ffb5a/5054197138560.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ice%20Cube%20Ice%20cube",
    description: "Cancion de Ice Cube del album Riddle",
    artistName: "Ice Cube",
  },
  {
    title: "Ice Cube",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/00/1e/37/001e3730-507c-a469-1c00-e3b52ad800e9/7330178024410.png/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ice%20Cube%20Ice%20Cube",
    description: "Cancion de Ice Cube del album Last Wish",
    artistName: "Ice Cube",
  },
  {
    title: "Fine Shit",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2a/69/c6/2a69c614-562a-ac50-4aa8-0d83290c7d4b/075679561855.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Wayne%20Fine%20Shit",
    description: "Cancion de Lil Wayne del album NDA",
    artistName: "Lil Wayne",
  },
  {
    title: "How To Love",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6a/74/e5/6a74e5c4-398e-90e9-0b2e-ec96d780316e/21UMGIM75384.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Wayne%20How%20To%20Love",
    description: "Cancion de Lil Wayne del album Tha Carter IV (Complete Edition)",
    artistName: "Lil Wayne",
  },
  {
    title: "You (feat. Lil Wayne)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/83/17/b2/8317b29e-6d8a-22a7-718e-b7e014f3b6c1/07UMGIM01885.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Wayne%20You%20(feat.%20Lil%20Wayne)",
    description: "Cancion de Lil Wayne del album Street Love",
    artistName: "Lil Wayne",
  },
  {
    title: "Beauty and a Beat (feat. Nicki Minaj)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/73/08/1a/73081a96-0f7c-b5f8-2757-5c17fb714323/12UMGIM31899.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nicki%20Minaj%20Beauty%20and%20a%20Beat%20(feat.%20Nicki%20Minaj)",
    description: "Cancion de Nicki Minaj del album Believe (Deluxe Edition)",
    artistName: "Nicki Minaj",
  },
  {
    title: "Goodbye (feat. Nicki Minaj & Willy William)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/d1/03/1e/d1031eed-f893-16b1-c5f1-7c5c7d93e497/054391948335.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nicki%20Minaj%20Goodbye%20(feat.%20Nicki%20Minaj%20%26%20Willy%20William)",
    description: "Cancion de Nicki Minaj del album Goodbye (feat. Nicki Minaj & Willy William) - Single",
    artistName: "Nicki Minaj",
  },
  {
    title: "Side To Side (feat. Nicki Minaj)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/12/5d/63/125d6389-2205-c77c-702c-8128e9020bd6/16UMGIM12432.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Nicki%20Minaj%20Side%20To%20Side%20(feat.%20Nicki%20Minaj)",
    description: "Cancion de Nicki Minaj del album Dangerous Woman",
    artistName: "Nicki Minaj",
  },
  {
    title: "I Just Wanna Know (feat. Ty Dolla $ign & Cardi B)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ee/6c/24/ee6c242e-d05b-0b4c-4555-31457752381e/075679583338.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Cardi%20B%20I%20Just%20Wanna%20Know%20(feat.%20Ty%20Dolla%20%24ign%20%26%20Cardi%20B)",
    description: "Cancion de Cardi B del album PROLIFIC",
    artistName: "Cardi B",
  },
  {
    title: "Please Me",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/81/f8/1b/81f81b47-6068-3fdb-29ae-ae032c519ef7/075679852168.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Cardi%20B%20Please%20Me",
    description: "Cancion de Cardi B del album Please Me - Single",
    artistName: "Cardi B",
  },
  {
    title: "South of the Border (feat. Camila Cabello & Cardi B)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/09/63/e809636b-2ea8-066e-2749-c0b94ab77052/190295384227.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Cardi%20B%20South%20of%20the%20Border%20(feat.%20Camila%20Cabello%20%26%20Cardi%20B)",
    description: "Cancion de Cardi B del album No.6 Collaborations Project",
    artistName: "Cardi B",
  },
  {
    title: "NUEVAYoL",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/5e/7e/905e7ed5-a8fa-a8f3-cd06-0028fdf3afaa/199066342442.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Bad%20Bunny%20NUEVAYoL",
    description: "Cancion de Bad Bunny del album DeBÍ TiRAR MáS FOToS",
    artistName: "Bad Bunny",
  },
  {
    title: "Ojitos Lindos",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Bad%20Bunny%20Ojitos%20Lindos",
    description: "Cancion de Bad Bunny del album Un Verano Sin Ti",
    artistName: "Bad Bunny",
  },
  {
    title: "CAFé CON RON",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/5e/7e/905e7ed5-a8fa-a8f3-cd06-0028fdf3afaa/199066342442.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Bad%20Bunny%20CAF%C3%A9%20CON%20RON",
    description: "Cancion de Bad Bunny del album DeBÍ TiRAR MáS FOToS",
    artistName: "Bad Bunny",
  },
  {
    title: "Ay Vamos",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/dd/ac/fe/ddacfe4b-742e-a5ca-591e-190c9b7003fe/14UMGIM27311.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=J%20Balvin%20Ay%20Vamos",
    description: "Cancion de J Balvin del album La Familia B Sides",
    artistName: "J Balvin",
  },
  {
    title: "LA CANCIÓN",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/77/32/74/7732746d-25e5-baae-b921-bad4a07d87b1/19UMGIM55524.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=J%20Balvin%20LA%20CANCI%C3%93N",
    description: "Cancion de J Balvin del album OASIS",
    artistName: "J Balvin",
  },
  {
    title: "Azul",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ae/b3/66/aeb36667-f9b2-c455-c3fc-a53bbd5ec4c1/20UMGIM10542.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=J%20Balvin%20Azul",
    description: "Cancion de J Balvin del album Colores",
    artistName: "J Balvin",
  },
  {
    title: "Si Antes Te Hubiera Conocido",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a0/60/94/a060947c-54d8-0fad-c558-eed12600224c/24UMGIM62705.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Karol%20G%20Si%20Antes%20Te%20Hubiera%20Conocido",
    description: "Cancion de Karol G del album Si Antes Te Hubiera Conocido - Single",
    artistName: "Karol G",
  },
  {
    title: "MI EX TENÍA RAZÓN",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/56/45/46/5645464b-7fad-b6ea-6c15-9dbf754a8d83/23UMGIM68667.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Karol%20G%20MI%20EX%20TEN%C3%8DA%20RAZ%C3%93N",
    description: "Cancion de Karol G del album MAÑANA SERÁ BONITO (BICHOTA SEASON)",
    artistName: "Karol G",
  },
  {
    title: "200 COPAS",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/11/be/ca/11beca85-d1fa-ff53-b0be-ca07a6c29deb/21UMGIM20318.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Karol%20G%20200%20COPAS",
    description: "Cancion de Karol G del album KG0516 (Apple Music Edition)",
    artistName: "Karol G",
  },
  {
    title: "Gasolina",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2f/66/f0/2f66f0f1-c3c2-9dc0-8391-04804cabc8cf/24CRGIM46808.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Daddy%20Yankee%20Gasolina",
    description: "Cancion de Daddy Yankee del album Barrio Fino (Deluxe Version)",
    artistName: "Daddy Yankee",
  },
  {
    title: "Pa Eso Estoy Yo",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/af/20/59/af2059c2-62a7-669f-31c3-0d65be985686/1200214447519.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Daddy%20Yankee%20Pa%20Eso%20Estoy%20Yo",
    description: "Cancion de Daddy Yankee del album Imperio Nazza: Gotay Edition",
    artistName: "Daddy Yankee",
  },
  {
    title: "Lo Que Pasó, Pasó",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2f/66/f0/2f66f0f1-c3c2-9dc0-8391-04804cabc8cf/24CRGIM46808.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Daddy%20Yankee%20Lo%20Que%20Pas%C3%B3%2C%20Pas%C3%B3",
    description: "Cancion de Daddy Yankee del album Barrio Fino (Deluxe Version)",
    artistName: "Daddy Yankee",
  },
  {
    title: "Dile",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/71/44/ab/7144ab43-17de-e8a2-fa09-21f333ec3485/06UMGIM15438.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Don%20Omar%20Dile",
    description: "Cancion de Don Omar del album The Last Don",
    artistName: "Don Omar",
  },
  {
    title: "Danza Kuduro (feat. Lucenzo)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/be/9d/22/be9d22c2-99b2-9e26-11dd-d1a043779b8d/10UMGIM27798.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Don%20Omar%20Danza%20Kuduro%20(feat.%20Lucenzo)",
    description: "Cancion de Don Omar del album Meet The Orphans (Deluxe Edition)",
    artistName: "Don Omar",
  },
  {
    title: "Dale Don Dale",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/71/44/ab/7144ab43-17de-e8a2-fa09-21f333ec3485/06UMGIM15438.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Don%20Omar%20Dale%20Don%20Dale",
    description: "Cancion de Don Omar del album The Last Don",
    artistName: "Don Omar",
  },
  {
    title: "Dile Que Tú Me Quieres",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/df/7c/1b/df7c1b32-0fca-94f0-866b-ba89e420ca04/697691884103.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ozuna%20Dile%20Que%20T%C3%BA%20Me%20Quieres",
    description: "Cancion de Ozuna del album Odisea",
    artistName: "Ozuna",
  },
  {
    title: "Se Preparó",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/df/7c/1b/df7c1b32-0fca-94f0-866b-ba89e420ca04/697691884103.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ozuna%20Se%20Prepar%C3%B3",
    description: "Cancion de Ozuna del album Odisea",
    artistName: "Ozuna",
  },
  {
    title: "El Farsante",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/df/7c/1b/df7c1b32-0fca-94f0-866b-ba89e420ca04/697691884103.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ozuna%20El%20Farsante",
    description: "Cancion de Ozuna del album Odisea",
    artistName: "Ozuna",
  },
  {
    title: "Felices los 4",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d8/86/a0/d886a0f9-dcdf-fe85-6d6c-9382b63305d1/886446853161.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Maluma%20Felices%20los%204",
    description: "Cancion de Maluma del album F.A.M.E.",
    artistName: "Maluma",
  },
  {
    title: "Borró Cassette",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/05/17/51/051751c2-d6cd-c466-9e0d-c185d8e22897/886445195026.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Maluma%20Borr%C3%B3%20Cassette",
    description: "Cancion de Maluma del album Pretty Boy, Dirty Boy",
    artistName: "Maluma",
  },
  {
    title: "El Perdedor",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/05/17/51/051751c2-d6cd-c466-9e0d-c185d8e22897/886445195026.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Maluma%20El%20Perdedor",
    description: "Cancion de Maluma del album Pretty Boy, Dirty Boy",
    artistName: "Maluma",
  },
  {
    title: "Adicto",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/bc/86/c3/bc86c389-d022-cd6e-d8d9-96981621e507/19UMGIM60949.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Anuel%20AA%20Adicto",
    description: "Cancion de Anuel AA del album Adicto - Single",
    artistName: "Anuel AA",
  },
  {
    title: "Bebé (feat. Anuel AA)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/df/7c/1b/df7c1b32-0fca-94f0-866b-ba89e420ca04/697691884103.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Anuel%20AA%20Beb%C3%A9%20(feat.%20Anuel%20AA)",
    description: "Cancion de Anuel AA del album Odisea",
    artistName: "Anuel AA",
  },
  {
    title: "Secreto",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a9/6e/a1/a96ea159-3668-6fe4-91ce-58b7e8a6ec0c/19UMGIM01999.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Anuel%20AA%20Secreto",
    description: "Cancion de Anuel AA del album Secreto - Single",
    artistName: "Anuel AA",
  },
  {
    title: "No Me Conoce (Remix)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/4f/64/d2/4f64d264-ce5b-64a7-3d11-5d7550613db1/22UM1IM25832.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jhayco%20No%20Me%20Conoce%20(Remix)",
    description: "Cancion de Jhayco del album Famouz",
    artistName: "Jhayco",
  },
  {
    title: "Passoa",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/37/78/fd/3778fd46-790c-5ab0-cc98-25f17843148c/23UM1IM55597.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jhayco%20Passoa",
    description: "Cancion de Jhayco del album Le Clique: Vida Rockstar (X)",
    artistName: "Jhayco",
  },
  {
    title: "Ley Seca",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/80/5b/07/805b070d-28f7-67ca-0c79-a91201a12737/21UMGIM70562.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jhayco%20Ley%20Seca",
    description: "Cancion de Jhayco del album Timelezz (Apple Music Edition)",
    artistName: "Jhayco",
  },
  {
    title: "Khé?",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ab/e8/09/abe8092d-ef44-61b9-6b50-ab7efb78ca51/196872401516.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Rauw%20Alejandro%20Kh%C3%A9%3F",
    description: "Cancion de Rauw Alejandro del album Cosa Nuestra",
    artistName: "Rauw Alejandro",
  },
  {
    title: "Tú Con Él",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ab/e8/09/abe8092d-ef44-61b9-6b50-ab7efb78ca51/196872401516.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Rauw%20Alejandro%20T%C3%BA%20Con%20%C3%89l",
    description: "Cancion de Rauw Alejandro del album Cosa Nuestra",
    artistName: "Rauw Alejandro",
  },
  {
    title: "Desenfocao'",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/58/13/c3/5813c326-a7fa-f792-77e1-8310d9c80742/886449738724.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Rauw%20Alejandro%20Desenfocao'",
    description: "Cancion de Rauw Alejandro del album VICE VERSA",
    artistName: "Rauw Alejandro",
  },
  {
    title: "End Game (feat. Ed Sheeran & Future)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Future%20End%20Game%20(feat.%20Ed%20Sheeran%20%26%20Future)",
    description: "Cancion de Future del album reputation",
    artistName: "Future",
  },
  {
    title: "Future",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6d/f5/e1/6df5e14e-0c37-4d60-df7e-f388b795f475/8809764921451.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Future%20Future",
    description: "Cancion de Future del album START-UP (Original Television Soundtrack), Pt. 1 - Single",
    artistName: "Future",
  },
  {
    title: "Future",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/4d/0e/b94d0e35-d0d2-c988-7031-a38926fffa3a/06UMGIM21432.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Future%20Future",
    description: "Cancion de Future del album Juslisen",
    artistName: "Future",
  },
  {
    title: "Paperbag Boy",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2a/69/c6/2a69c614-562a-ac50-4aa8-0d83290c7d4b/075679561855.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Young%20Thug%20Paperbag%20Boy",
    description: "Cancion de Young Thug del album NDA",
    artistName: "Young Thug",
  },
  {
    title: "Uncle Phil",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2a/69/c6/2a69c614-562a-ac50-4aa8-0d83290c7d4b/075679561855.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Young%20Thug%20Uncle%20Phil",
    description: "Cancion de Young Thug del album NDA",
    artistName: "Young Thug",
  },
  {
    title: "Goodbyes (feat. Young Thug)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/37/68/dd/3768dd4e-58d3-f084-24bd-e6b40eca2ed4/19UMGIM60243.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Young%20Thug%20Goodbyes%20(feat.%20Young%20Thug)",
    description: "Cancion de Young Thug del album Goodbyes (feat. Young Thug) - Single",
    artistName: "Young Thug",
  },
  {
    title: "Same Yung N***a (feat. Playboi Carti)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/56/f7/54/56f75470-bda9-c793-543f-849e16c115be/814908027591.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Playboi%20Carti%20Same%20Yung%20N***a%20(feat.%20Playboi%20Carti)",
    description: "Cancion de Playboi Carti del album Drip or Drown 2",
    artistName: "Playboi Carti",
  },
  {
    title: "CARNIVAL (feat. Rich The Kid, Playboi Carti)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f6/f7/6f/f6f76fcf-dc13-4d21-e34a-42351a63eb49/355402.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Playboi%20Carti%20CARNIVAL%20(feat.%20Rich%20The%20Kid%2C%20Playboi%20Carti)",
    description: "Cancion de Playboi Carti del album CARNIVAL PACK (feat. Rich The Kid, Playboi Carti) - EP",
    artistName: "Playboi Carti",
  },
  {
    title: "Baguettes in the Face (feat. NAV, Playboi Carti & A Boogie wit da Hoodie)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2e/c6/ee/2ec6ee34-3456-183c-8de6-352e8280c296/19UMGIM55037.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Playboi%20Carti%20Baguettes%20in%20the%20Face%20(feat.%20NAV%2C%20Playboi%20Carti%20%26%20A%20Boogie%20wit%20da%20Hoodie)",
    description: "Cancion de Playboi Carti del album Perfect Ten",
    artistName: "Playboi Carti",
  },
  {
    title: "What You Saying",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ee/24/92/ee249222-bfef-2abe-b8d0-16f0f35a3b17/8721465006940.png/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Uzi%20Vert%20What%20You%20Saying",
    description: "Cancion de Lil Uzi Vert del album What You Saying - Single",
    artistName: "Lil Uzi Vert",
  },
  {
    title: "Sauce It Up",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4a/d7/df/4ad7df3d-f63c-45ed-e6be-6a808e5101b6/075679884763.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Uzi%20Vert%20Sauce%20It%20Up",
    description: "Cancion de Lil Uzi Vert del album Luv Is Rage 2 (Deluxe)",
    artistName: "Lil Uzi Vert",
  },
  {
    title: "Sauce It Up",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/02/ed/6f/02ed6f77-7e89-ca9c-4d5a-83088113cbe8/075679887955.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Uzi%20Vert%20Sauce%20It%20Up",
    description: "Cancion de Lil Uzi Vert del album Luv Is Rage 2",
    artistName: "Lil Uzi Vert",
  },
  {
    title: "Jimmy Cooks (feat. 21 Savage)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6d/31/ab/6d31abaf-7a07-05f1-13ad-72ec520b6bfb/22UMGIM67374.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=21%20Savage%20Jimmy%20Cooks%20(feat.%2021%20Savage)",
    description: "Cancion de 21 Savage del album Honestly, Nevermind",
    artistName: "21 Savage",
  },
  {
    title: "a&t",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/07/94/f7/0794f7c3-0042-6aa8-022e-ae008868eb75/886447365144.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=21%20Savage%20a%26t",
    description: "Cancion de 21 Savage del album i am > i was",
    artistName: "21 Savage",
  },
  {
    title: "ball w/o You",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/07/94/f7/0794f7c3-0042-6aa8-022e-ae008868eb75/886447365144.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=21%20Savage%20ball%20w%2Fo%20You",
    description: "Cancion de 21 Savage del album i am > i was",
    artistName: "21 Savage",
  },
  {
    title: "Stir Fry",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ef/3a/a7/ef3aa7ad-cd69-2bb4-ce18-6c4de937a5e3/17UM1IM64709.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Migos%20Stir%20Fry",
    description: "Cancion de Migos del album Culture II",
    artistName: "Migos",
  },
  {
    title: "Drip (feat. Migos)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ca/58/e5/ca58e5e3-acb7-8ca3-6af9-ad63af3b71f1/075679873675.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Migos%20Drip%20(feat.%20Migos)",
    description: "Cancion de Migos del album Invasion of Privacy",
    artistName: "Migos",
  },
  {
    title: "Pure Water",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/17/c3/29/17c3295c-08e1-f58e-7442-f77d36546b5c/18UMGIM87446.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Migos%20Pure%20Water",
    description: "Cancion de Migos del album Pure Water - Single",
    artistName: "Migos",
  },
  {
    title: "umean",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/f8/ef/aff8ef1c-e1e7-8c70-75fa-2201d8785f3d/075679678492.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Gunna%20umean",
    description: "Cancion de Gunna del album a Gift & a Curse",
    artistName: "Gunna",
  },
  {
    title: "him all along",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fc/4c/90/fc4c9023-915b-370c-9658-eb81a04036e4/075679628244.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Gunna%20him%20all%20along",
    description: "Cancion de Gunna del album him all along - Single",
    artistName: "Gunna",
  },
  {
    title: "Space Cadet (feat. Gunna)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b1/e3/27/b1e3271b-b8cb-7d80-99e5-0ddd9d6e632e/00602577303210.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Gunna%20Space%20Cadet%20(feat.%20Gunna)",
    description: "Cancion de Gunna del album NOT ALL HEROES WEAR CAPES (Deluxe)",
    artistName: "Gunna",
  },
  {
    title: "Merch Madness",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/2f/8c/d32f8c6c-4f00-fb0d-029b-4035b68404cc/23UMGIM76320.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Baby%20Merch%20Madness",
    description: "Cancion de Lil Baby del album Merch Madness - Single",
    artistName: "Lil Baby",
  },
  {
    title: "Bad Bad Bad (feat. Lil Baby)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/39/f9/4d/39f94db0-5d28-4247-9d7c-950cd33a36a0/075679837325.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Baby%20Bad%20Bad%20Bad%20(feat.%20Lil%20Baby)",
    description: "Cancion de Lil Baby del album So Much Fun",
    artistName: "Lil Baby",
  },
  {
    title: "Yes Indeed",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/99/6f/89/996f8917-fd86-b6bf-6483-0540754efaaa/18UMGIM28344.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Lil%20Baby%20Yes%20Indeed",
    description: "Cancion de Lil Baby del album Harder Than Ever",
    artistName: "Lil Baby",
  },
  {
    title: "Sunflower (Spider-Man: Into the Spider-Verse)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4b/30/2c/4b302cb6-7a14-5464-4e97-0577e9d0be49/18UMGIM82277.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Post%20Malone%20Sunflower%20(Spider-Man%3A%20Into%20the%20Spider-Verse)",
    description: "Cancion de Post Malone del album Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)",
    artistName: "Post Malone",
  },
  {
    title: "Circles",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7b/1b/1b/7b1b1b0b-7ce2-b223-f9e0-8e36abe51877/19UMGIM78325.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Post%20Malone%20Circles",
    description: "Cancion de Post Malone del album Hollywood's Bleeding",
    artistName: "Post Malone",
  },
  {
    title: "Pour Me A Drink (feat. Blake Shelton)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/95/ad/c8/95adc8ca-e583-1800-9b56-4665f186e899/24UMGIM60824.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Post%20Malone%20Pour%20Me%20A%20Drink%20(feat.%20Blake%20Shelton)",
    description: "Cancion de Post Malone del album F-1 Trillion",
    artistName: "Post Malone",
  },
  {
    title: "BUTTERFLY EFFECT",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e7/49/8f/e7498f65-df8f-bead-d6e3-2a8d4d642a79/886447235317.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Travis%20Scott%20BUTTERFLY%20EFFECT",
    description: "Cancion de Travis Scott del album ASTROWORLD",
    artistName: "Travis Scott",
  },
  {
    title: "TKN",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7e/9f/21/7e9f21e5-1da2-395d-9312-6499c31b75d1/886448328568.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Travis%20Scott%20TKN",
    description: "Cancion de Travis Scott del album TKN - Single",
    artistName: "Travis Scott",
  },
  {
    title: "YOSEMITE",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/30/66/90/306690d4-2a29-402e-e406-6b319ce7731a/886447227169.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Travis%20Scott%20YOSEMITE",
    description: "Cancion de Travis Scott del album ASTROWORLD",
    artistName: "Travis Scott",
  },
  {
    title: "Waka Waka (Esto es Africa) [feat. Freshlyground]",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c4/6e/63/c46e6321-2a8a-dfaa-2c0f-21d4b62450b3/884977620108.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Shakira%20Waka%20Waka%20(Esto%20es%20Africa)%20%5Bfeat.%20Freshlyground%5D",
    description: "Cancion de Shakira del album Waka Waka (Esto es Africa) [feat. Freshlyground] - Single",
    artistName: "Shakira",
  },
  {
    title: "Hips Don't Lie (feat. Wyclef Jean)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/b5/8a/0db58a8b-7b17-dd53-3464-116a415d0f49/196872648836.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Shakira%20Hips%20Don't%20Lie%20(feat.%20Wyclef%20Jean)",
    description: "Cancion de Shakira del album Oral Fixation, Vol. 2 (Expanded Edition)",
    artistName: "Shakira",
  },
  {
    title: "Whenever, Wherever",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c5/4b/ff/c54bffa0-2333-1a55-e67e-a9c640e06f6f/mzi.hwxgzhsl.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Shakira%20Whenever%2C%20Wherever",
    description: "Cancion de Shakira del album Laundry Service",
    artistName: "Shakira",
  },
  {
    title: "Livin' la Vida Loca",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ab/3c/ed/ab3cedd0-03a6-0802-ec42-2f48c4eb118c/074646989128.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ricky%20Martin%20Livin'%20la%20Vida%20Loca",
    description: "Cancion de Ricky Martin del album Ricky Martin",
    artistName: "Ricky Martin",
  },
  {
    title: "La Copa de la Vida (La Cancion Oficial de la Copa Mundial, Francia '98) [Spanglish Radio Edit]",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ab/3c/ed/ab3cedd0-03a6-0802-ec42-2f48c4eb118c/074646989128.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ricky%20Martin%20La%20Copa%20de%20la%20Vida%20(La%20Cancion%20Oficial%20de%20la%20Copa%20Mundial%2C%20Francia%20'98)%20%5BSpanglish%20Radio%20Edit%5D",
    description: "Cancion de Ricky Martin del album Ricky Martin",
    artistName: "Ricky Martin",
  },
  {
    title: "She Bangs (English Version)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ce/9e/1b/ce9e1b29-0b91-361b-d11d-5ddebe3f0ff6/dj.eiucdaet.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ricky%20Martin%20She%20Bangs%20(English%20Version)",
    description: "Cancion de Ricky Martin del album Sound Loaded",
    artistName: "Ricky Martin",
  },
  {
    title: "I Like It (feat. Pitbull)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a5/84/90/a58490c6-5dad-2663-7f44-d15fdbeba0d0/00602527419923.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Enrique%20Iglesias%20I%20Like%20It%20(feat.%20Pitbull)",
    description: "Cancion de Enrique Iglesias del album Euphoria (Deluxe Edition)",
    artistName: "Enrique Iglesias",
  },
  {
    title: "Tamo Bien",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d9/85/b2/d985b235-7778-a0aa-67f0-0f3eb1b5c8de/885288123487.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Enrique%20Iglesias%20Tamo%20Bien",
    description: "Cancion de Enrique Iglesias del album PITCOIN",
    artistName: "Enrique Iglesias",
  },
  {
    title: "Bailando (feat. Descemer Bueno & Gente de Zona) [Spanish Version]",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d4/ec/f5/d4ecf56c-2fb8-d529-b6bd-27ffcd43bb17/00602547230461.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Enrique%20Iglesias%20Bailando%20(feat.%20Descemer%20Bueno%20%26%20Gente%20de%20Zona)%20%5BSpanish%20Version%5D",
    description: "Cancion de Enrique Iglesias del album SEX and LOVE (Deluxe Edition)",
    artistName: "Enrique Iglesias",
  },
  {
    title: "Despacito",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e2/ef/f0/e2eff0bc-c51d-7de5-9280-6891ddcee71b/18UMGIM85289.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Luis%20Fonsi%20Despacito",
    description: "Cancion de Luis Fonsi del album VIDA",
    artistName: "Luis Fonsi",
  },
  {
    title: "No Me Doy por Vencido",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/32/cb/6c/32cb6c3d-502e-de2d-dc87-70fdb4a5d48e/08UMGIM15650.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Luis%20Fonsi%20No%20Me%20Doy%20por%20Vencido",
    description: "Cancion de Luis Fonsi del album Palabras del Silencio (Exclusive Track Version)",
    artistName: "Luis Fonsi",
  },
  {
    title: "Échame La Culpa",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e2/ef/f0/e2eff0bc-c51d-7de5-9280-6891ddcee71b/18UMGIM85289.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Luis%20Fonsi%20%C3%89chame%20La%20Culpa",
    description: "Cancion de Luis Fonsi del album VIDA",
    artistName: "Luis Fonsi",
  },
  {
    title: "Vivir Mi Vida",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f7/24/ce/f724ce48-4d0d-0cbc-3493-3d935142e5e6/886443947238.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Marc%20Anthony%20Vivir%20Mi%20Vida",
    description: "Cancion de Marc Anthony del album 3.0",
    artistName: "Marc Anthony",
  },
  {
    title: "Ahora Quién",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Features/96/08/dc/dj.lrssvrvw.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Marc%20Anthony%20Ahora%20Qui%C3%A9n",
    description: "Cancion de Marc Anthony del album Valió la Pena",
    artistName: "Marc Anthony",
  },
  {
    title: "Tu Amor Me Hace Bien",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Features/96/08/dc/dj.lrssvrvw.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Marc%20Anthony%20Tu%20Amor%20Me%20Hace%20Bien",
    description: "Cancion de Marc Anthony del album Valió la Pena",
    artistName: "Marc Anthony",
  },
  {
    title: "Eres Mía",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8f/fc/6e/8ffc6efb-353f-46ac-eeb6-8247c01cfc87/886444383691.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Romeo%20Santos%20Eres%20M%C3%ADa",
    description: "Cancion de Romeo Santos del album Fórmula, Vol. 2 (Deluxe Edition)",
    artistName: "Romeo Santos",
  },
  {
    title: "Imitadora",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ad/a7/dc/ada7dc95-4333-f6df-ce0f-f0eeccbac7f4/886446557991.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Romeo%20Santos%20Imitadora",
    description: "Cancion de Romeo Santos del album Golden",
    artistName: "Romeo Santos",
  },
  {
    title: "Propuesta Indecente",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8f/fc/6e/8ffc6efb-353f-46ac-eeb6-8247c01cfc87/886444383691.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Romeo%20Santos%20Propuesta%20Indecente",
    description: "Cancion de Romeo Santos del album Fórmula, Vol. 2 (Deluxe Edition)",
    artistName: "Romeo Santos",
  },
  {
    title: "Conga",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/af/b9/e9/afb9e91a-fe81-37ec-0695-4fb281acbf11/mzi.caumtamv.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Gloria%20Estefan%20Conga",
    description: "Cancion de Gloria Estefan del album Greatest Hits",
    artistName: "Gloria Estefan",
  },
  {
    title: "Turn the Beat Around",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music/71/2f/84/mzi.gokmstkx.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Gloria%20Estefan%20Turn%20the%20Beat%20Around",
    description: "Cancion de Gloria Estefan del album Greatest Hits, Vol. II",
    artistName: "Gloria Estefan",
  },
  {
    title: "Rhythm Is Gonna Get You",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b4/a6/a0/b4a6a005-b312-1474-dd55-f3bb45c0c67e/074644076929.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Gloria%20Estefan%20Rhythm%20Is%20Gonna%20Get%20You",
    description: "Cancion de Gloria Estefan del album Let It Loose",
    artistName: "Gloria Estefan",
  },
  {
    title: "On the Floor (feat. Pitbull)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9d/9d/f6/9d9df66b-bdee-ce42-45bd-30ac44bc536b/11UMGIM10446.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jennifer%20Lopez%20On%20the%20Floor%20(feat.%20Pitbull)",
    description: "Cancion de Jennifer Lopez del album LOVE? (Deluxe Edition)",
    artistName: "Jennifer Lopez",
  },
  {
    title: "Love Don't Cost a Thing",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d1/8e/eb/d18eebcc-195c-c148-bd74-1920ac9a0638/mzi.vdnjgskg.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jennifer%20Lopez%20Love%20Don't%20Cost%20a%20Thing",
    description: "Cancion de Jennifer Lopez del album J. Lo",
    artistName: "Jennifer Lopez",
  },
  {
    title: "All I Have (feat. LL Cool J)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/f8/3f/79/f83f7981-bcee-e4db-0db6-aaf3d06e5669/696998623125.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Jennifer%20Lopez%20All%20I%20Have%20(feat.%20LL%20Cool%20J)",
    description: "Cancion de Jennifer Lopez del album This Is Me...Then",
    artistName: "Jennifer Lopez",
  },
  {
    title: "La Camisa Negra",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/21/1d/ad/211dad4f-69f6-9ac3-4c3b-3116dd3de4d4/06UMGIM24053.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Juanes%20La%20Camisa%20Negra",
    description: "Cancion de Juanes del album Mi Sangre",
    artistName: "Juanes",
  },
  {
    title: "Es por Ti",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/8f/b1/5d/8fb15d20-491c-5232-e939-ca4ddbd07a9d/06UMGIM13859.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Juanes%20Es%20por%20Ti",
    description: "Cancion de Juanes del album Un Día Normal",
    artistName: "Juanes",
  },
  {
    title: "A Dios le Pido",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/8f/b1/5d/8fb15d20-491c-5232-e939-ca4ddbd07a9d/06UMGIM13859.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Juanes%20A%20Dios%20le%20Pido",
    description: "Cancion de Juanes del album Un Día Normal",
    artistName: "Juanes",
  },
  {
    title: "Fruta Fresca",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e8/5b/b7/e85bb768-5955-1079-4a21-210d0cb4f13e/00724352285457.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Carlos%20Vives%20Fruta%20Fresca",
    description: "Cancion de Carlos Vives del album El Amor de Mi Tierra",
    artistName: "Carlos Vives",
  },
  {
    title: "La Bicicleta",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8d/58/3d/8d583d74-d03c-b26e-9b4b-65a32f4eb8b0/886446730196.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Carlos%20Vives%20La%20Bicicleta",
    description: "Cancion de Carlos Vives del album VIVES",
    artistName: "Carlos Vives",
  },
  {
    title: "La Gota Fría",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/73/af/a3/73afa343-f187-efa2-07be-12a9d53dbdc5/195497756858.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Carlos%20Vives%20La%20Gota%20Fr%C3%ADa",
    description: "Cancion de Carlos Vives del album Clásicos de la Provincia",
    artistName: "Carlos Vives",
  },
  {
    title: "Last Last",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ca/eb/31/caeb3173-eaf0-0cd5-65ea-585adfe312ba/075679745156.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Burna%20Boy%20Last%20Last",
    description: "Cancion de Burna Boy del album Love, Damini",
    artistName: "Burna Boy",
  },
  {
    title: "Higher",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7a/8d/f0/7a8df039-2e09-30c8-a5f2-dea19a596b4d/075679644152.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Burna%20Boy%20Higher",
    description: "Cancion de Burna Boy del album Higher - Single",
    artistName: "Burna Boy",
  },
  {
    title: "Tested, Approved & Trusted",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b5/76/9c/b5769caf-9441-ac6b-e1d5-3aa82f3f1fa7/075679673787.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Burna%20Boy%20Tested%2C%20Approved%20%26%20Trusted",
    description: "Cancion de Burna Boy del album I Told Them...",
    artistName: "Burna Boy",
  },
  {
    title: "Stay For The Night",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/09/ab/17/09ab175d-fa27-3028-615a-d30d2708b839/199890122807_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Wizkid%20Stay%20For%20The%20Night",
    description: "Cancion de Wizkid del album God and Time",
    artistName: "Wizkid",
  },
  {
    title: "MONEY CONSTANT",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/62/36/e8/6236e8a3-c34e-fcb0-c3e7-0a41db66c6ad/196873749570.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Wizkid%20MONEY%20CONSTANT",
    description: "Cancion de Wizkid del album SOUTH GIDI - Single",
    artistName: "Wizkid",
  },
  {
    title: "Essence (feat. Tems)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b0/09/8e/b0098ed0-ef53-f2b5-386a-c8e6181f3c8a/886448775256.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Wizkid%20Essence%20(feat.%20Tems)",
    description: "Cancion de Wizkid del album Made In Lagos",
    artistName: "Wizkid",
  },
  {
    title: "With You (feat. Omah Lay)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/0c/91/cd0c917a-e1a0-2592-a3a1-529796e19ea9/196872682564.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Davido%20With%20You%20(feat.%20Omah%20Lay)",
    description: "Cancion de Davido del album 5ive",
    artistName: "Davido",
  },
  {
    title: "Fall",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/25/10/e825104f-95ac-5638-38bf-a3a3563ac24b/886446558943.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Davido%20Fall",
    description: "Cancion de Davido del album Fall - Single",
    artistName: "Davido",
  },
  {
    title: "Risky",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/14/44/61/14446189-32bd-e20e-a95c-4a7736919b9a/886448078616.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Davido%20Risky",
    description: "Cancion de Davido del album Risky - Single",
    artistName: "Davido",
  },
  {
    title: "What You Need",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c3/59/9a/c3599a96-fb7c-d4f3-c9ce-664128e4e94c/196873703305.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tems%20What%20You%20Need",
    description: "Cancion de Tems del album Love Is A Kingdom",
    artistName: "Tems",
  },
  {
    title: "Free Mind",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c6/4d/ed/c64ded15-9cd9-4bd7-a3ea-051178b2427d/195497234301.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tems%20Free%20Mind",
    description: "Cancion de Tems del album For Broken Ears",
    artistName: "Tems",
  },
  {
    title: "Raindance",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/99/49/24/9949241c-e52c-3018-eae8-c686013a7474/25UM1IM68216.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tems%20Raindance",
    description: "Cancion de Tems del album The Boy Who Played the Harp",
    artistName: "Tems",
  },
  {
    title: "For Her (feat. Rema)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2a/69/c6/2a69c614-562a-ac50-4aa8-0d83290c7d4b/075679561855.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Rema%20For%20Her%20(feat.%20Rema)",
    description: "Cancion de Rema del album NDA",
    artistName: "Rema",
  },
  {
    title: "For Her",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b1/2d/e8/b12de8a0-9ed3-419d-2893-798ca0c542a5/075679562470.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Rema%20For%20Her",
    description: "Cancion de Rema del album NDA",
    artistName: "Rema",
  },
  {
    title: "Baby (Is It A Crime)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/ec/75/59ec75eb-42b0-bf6a-38c7-48013ca1b11e/24UM1IM36412.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Rema%20Baby%20(Is%20It%20A%20Crime)",
    description: "Cancion de Rema del album Baby (Is it a Crime) - Single",
    artistName: "Rema",
  },
  {
    title: "Dangerous",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/01/ac/4c/01ac4c06-014d-a251-7bb6-2c095cc17484/26UMGIM69208.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ayra%20Starr%20Dangerous",
    description: "Cancion de Ayra Starr del album Starrgirl",
    artistName: "Ayra Starr",
  },
  {
    title: "Midnight in New York",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/01/ac/4c/01ac4c06-014d-a251-7bb6-2c095cc17484/26UMGIM69208.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ayra%20Starr%20Midnight%20in%20New%20York",
    description: "Cancion de Ayra Starr del album Starrgirl",
    artistName: "Ayra Starr",
  },
  {
    title: "Dangerous",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2a/2a/46/2a2a4612-5900-9fa2-bde0-1a0841bacb2b/26UMGIM94585.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Ayra%20Starr%20Dangerous",
    description: "Cancion de Ayra Starr del album Starrgirl",
    artistName: "Ayra Starr",
  },
  {
    title: "Gratitude",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/31/e4/eb/31e4ebf4-97bd-c193-59c7-1b72ed7ab53a/ticket.wlorjbae.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Asake%20Gratitude",
    description: "Cancion de Asake del album M$NEY",
    artistName: "Asake",
  },
  {
    title: "MCBH",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/31/e4/eb/31e4ebf4-97bd-c193-59c7-1b72ed7ab53a/ticket.wlorjbae.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Asake%20MCBH",
    description: "Cancion de Asake del album M$NEY",
    artistName: "Asake",
  },
  {
    title: "Jogodo",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f0/d9/fb/f0d9fbd9-4fb2-0b9f-4178-97c2b865f22d/199316437584_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Asake%20Jogodo",
    description: "Cancion de Asake del album REAL, Vol. 1 - EP",
    artistName: "Asake",
  },
  {
    title: "soso",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b1/77/f7/b177f74e-ff94-ac1f-0317-e0e120178661/093624869191.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Omah%20Lay%20soso",
    description: "Cancion de Omah Lay del album Boy Alone",
    artistName: "Omah Lay",
  },
  {
    title: "reason",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c8/ff/1f/c8ff1f28-54db-8c3a-91b1-8042173223c2/093624841319_02.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Omah%20Lay%20reason",
    description: "Cancion de Omah Lay del album Boy Alone (Deluxe)",
    artistName: "Omah Lay",
  },
  {
    title: "HOLY GHOST",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/93/e8/88/93e88861-c093-8e4f-019a-c43f7afc5c03/054391356826.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Omah%20Lay%20HOLY%20GHOST",
    description: "Cancion de Omah Lay del album HOLY GHOST - Single",
    artistName: "Omah Lay",
  },
  {
    title: "Like I Do",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/7f/2f/70/7f2f70a8-7d4d-c236-20ab-6badf838db46/194690050770_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Fireboy%20DML%20Like%20I%20Do",
    description: "Cancion de Fireboy DML del album Laughter, Tears & Goosebumps",
    artistName: "Fireboy DML",
  },
  {
    title: "Peru",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b9/a8/79/b9a87900-13cb-5655-2ac8-64191ee6ec5d/194690720895_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Fireboy%20DML%20Peru",
    description: "Cancion de Fireboy DML del album Peru - Single",
    artistName: "Fireboy DML",
  },
  {
    title: "iseoluwa",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5e/36/52/5e365214-2057-31df-2d2e-d39022d6cd9f/197342696906_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Fireboy%20DML%20iseoluwa",
    description: "Cancion de Fireboy DML del album adedamola",
    artistName: "Fireboy DML",
  },
  {
    title: "Love Nwantiti (ah ah ah) [feat. Joeboy & Kuami Eugene] [Remix]",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/47/75/a4/4775a4de-e5bd-e553-7dec-5a3911718276/795152501603.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=CKay%20Love%20Nwantiti%20(ah%20ah%20ah)%20%5Bfeat.%20Joeboy%20%26%20Kuami%20Eugene%5D%20%5BRemix%5D",
    description: "Cancion de CKay del album Love Nwantiti (ah ah ah) [feat. Joeboy & Kuami Eugene] [Remix] - Single",
    artistName: "CKay",
  },
  {
    title: "BODY (danz) [feat. Mavo]",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/f1/41/7ef14117-da82-52e5-368a-c4d7e0c8d563/199806138625.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=CKay%20BODY%20(danz)%20%5Bfeat.%20Mavo%5D",
    description: "Cancion de CKay del album BODY (danz) [feat. Mavo] - Single",
    artistName: "CKay",
  },
  {
    title: "Emiliana",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0c/86/8d/0c868d5a-81f4-42dd-1ce2-f6569fee0585/190296332722.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=CKay%20Emiliana",
    description: "Cancion de CKay del album Emiliana - Single",
    artistName: "CKay",
  },
  {
    title: "Summer",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/da/50/cc/da50cc80-3515-a38d-369b-0d700ffd249d/886444820448.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Calvin%20Harris%20Summer",
    description: "Cancion de Calvin Harris del album Motion",
    artistName: "Calvin Harris",
  },
  {
    title: "Feel So Close (Radio Edit)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ab/af/22/abaf2296-ed4d-6da2-c24d-503cfdfa4c1f/0617465356858.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Calvin%20Harris%20Feel%20So%20Close%20(Radio%20Edit)",
    description: "Cancion de Calvin Harris del album 18 Months",
    artistName: "Calvin Harris",
  },
  {
    title: "This Is What You Came For",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/59/57/a6/5957a66e-fb10-4065-5739-7c54236339e4/886445857290.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Calvin%20Harris%20This%20Is%20What%20You%20Came%20For",
    description: "Cancion de Calvin Harris del album This Is What You Came For - Single",
    artistName: "Calvin Harris",
  },
  {
    title: "FREE MASON",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0f/a7/a6/0fa7a653-feb8-3739-a75b-502df6cfc940/196874664889.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Marshmello%20FREE%20MASON",
    description: "Cancion de Marshmello del album BIANCA (Deluxe)",
    artistName: "Marshmello",
  },
  {
    title: "Alone",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7e/be/33/7ebe3370-959a-94f7-77e2-c9e7fea9a4ed/859716988917_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Marshmello%20Alone",
    description: "Cancion de Marshmello del album Alone - Single",
    artistName: "Marshmello",
  },
  {
    title: "Happier",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e5/61/69/e561696f-40c5-19c1-ec6d-5b2dfaa919f2/21.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Marshmello%20Happier",
    description: "Cancion de Marshmello del album Happier - Single",
    artistName: "Marshmello",
  },
  {
    title: "Titanium (feat. Sia)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/b4/7b/99b47bd8-2b22-e1ef-2e60-c5147f27a861/dj.thrvmjqj.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=David%20Guetta%20Titanium%20(feat.%20Sia)",
    description: "Cancion de David Guetta del album Nothing But the Beat",
    artistName: "David Guetta",
  },
  {
    title: "Without You (feat. Usher)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/b4/7b/99b47bd8-2b22-e1ef-2e60-c5147f27a861/dj.thrvmjqj.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=David%20Guetta%20Without%20You%20(feat.%20Usher)",
    description: "Cancion de David Guetta del album Nothing But the Beat",
    artistName: "David Guetta",
  },
  {
    title: "Memories (feat. Kid Cudi)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7f/26/33/7f2633e4-dace-c4b5-2920-f3bae1b48b08/5099990785054.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=David%20Guetta%20Memories%20(feat.%20Kid%20Cudi)",
    description: "Cancion de David Guetta del album One More Love",
    artistName: "David Guetta",
  },
  {
    title: "In the Name of Love",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fc/8a/d2/fc8ad2a2-c75b-c33f-5d1a-070539e647bd/886446028088.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Martin%20Garrix%20In%20the%20Name%20of%20Love",
    description: "Cancion de Martin Garrix del album In The Name Of Love - Single",
    artistName: "Martin Garrix",
  },
  {
    title: "Animals",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6e/1e/f0/6e1ef055-195a-bb73-d5a8-5926058366a5/8712944577525.png/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Martin%20Garrix%20Animals",
    description: "Cancion de Martin Garrix del album Animals - Single",
    artistName: "Martin Garrix",
  },
  {
    title: "Scared to Be Lonely",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/46/1f/44461f0c-a949-ce72-0164-704056469fc8/886446328331.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Martin%20Garrix%20Scared%20to%20Be%20Lonely",
    description: "Cancion de Martin Garrix del album Scared To Be Lonely - Single",
    artistName: "Martin Garrix",
  },
  {
    title: "Wake Me Up",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/18/5b/1e/185b1ef5-5d97-19d8-aebf-8e29e41874ef/13UAAIM59255.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Avicii%20Wake%20Me%20Up",
    description: "Cancion de Avicii del album True",
    artistName: "Avicii",
  },
  {
    title: "Levels",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/67/38/43/67384338-9ed7-fc68-5927-93f1fcf4705d/11UMGIM36900.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Avicii%20Levels",
    description: "Cancion de Avicii del album Levels - EP",
    artistName: "Avicii",
  },
  {
    title: "The Nights",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/35/4d/a0/354da058-972b-dcf9-feec-609895ba8cb2/14UMGIM56567.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Avicii%20The%20Nights",
    description: "Cancion de Avicii del album The Days / Nights - EP",
    artistName: "Avicii",
  },
  {
    title: "Closer (feat. Halsey)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Chainsmokers%20Closer%20(feat.%20Halsey)",
    description: "Cancion de The Chainsmokers del album Collage - EP",
    artistName: "The Chainsmokers",
  },
  {
    title: "Roses (feat. ROZES)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5e/5c/ea/5e5cead2-a482-48ef-8134-f725c2b49202/mzm.lydeceiv.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Chainsmokers%20Roses%20(feat.%20ROZES)",
    description: "Cancion de The Chainsmokers del album Bouquet - EP",
    artistName: "The Chainsmokers",
  },
  {
    title: "Don't Let Me Down (feat. Daya)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=The%20Chainsmokers%20Don't%20Let%20Me%20Down%20(feat.%20Daya)",
    description: "Cancion de The Chainsmokers del album Collage - EP",
    artistName: "The Chainsmokers",
  },
  {
    title: "Scary Monsters and Nice Sprites",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/31/70/da/3170da66-9280-ccd2-1f97-57d8a1996f9e/075679970930.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Skrillex%20Scary%20Monsters%20and%20Nice%20Sprites",
    description: "Cancion de Skrillex del album Scary Monsters and Nice Sprites",
    artistName: "Skrillex",
  },
  {
    title: "Where Are Ü Now (feat. Justin Bieber)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b3/ea/21/b3ea217e-d5d0-4db7-5942-15cdff5ad68d/075679927354.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Skrillex%20Where%20Are%20%C3%9C%20Now%20(feat.%20Justin%20Bieber)",
    description: "Cancion de Skrillex del album Skrillex and Diplo present Jack Ü",
    artistName: "Skrillex",
  },
  {
    title: "First of the Year (Equinox)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music/d8/66/cd/mzi.ppitbdsw.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Skrillex%20First%20of%20the%20Year%20(Equinox)",
    description: "Cancion de Skrillex del album More Monsters and Sprites",
    artistName: "Skrillex",
  },
  {
    title: "Escape (feat. Hayla)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bd/82/7b/bd827b05-a324-37fd-5d92-6b0cf1dd40bf/5056167170839_1.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Deadmau5%20Escape%20(feat.%20Hayla)",
    description: "Cancion de Deadmau5 del album Escape (feat. Hayla) - Single",
    artistName: "Deadmau5",
  },
  {
    title: "Ghosts 'n' Stuff",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/60/9d/93/609d93fa-2131-ae4a-f52e-dbb89b5b75f4/617465217456.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Deadmau5%20Ghosts%20'n'%20Stuff",
    description: "Cancion de Deadmau5 del album For Lack of a Better Name",
    artistName: "Deadmau5",
  },
  {
    title: "I Remember",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/62/64/f2/6264f273-04fa-d05d-a067-22a7ca9bbeec/617465186851.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Deadmau5%20I%20Remember",
    description: "Cancion de Deadmau5 del album Random Album Title",
    artistName: "Deadmau5",
  },
  {
    title: "The Business",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cf/81/b8/cf81b800-bc37-cb1e-008e-a1211ce21d19/075679803429.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tiesto%20The%20Business",
    description: "Cancion de Tiesto del album The Business - Single",
    artistName: "Tiesto",
  },
  {
    title: "CONTIGO",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ec/5c/b8/ec5cb83e-f24f-9984-56ac-8402b522368d/24UMGIM13229.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tiesto%20CONTIGO",
    description: "Cancion de Tiesto del album CONTIGO - Single",
    artistName: "Tiesto",
  },
  {
    title: "10:35",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e3/bb/5c/e3bb5c43-25fa-835d-c962-f3ef7b15bbe6/075679708489.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Tiesto%2010%3A35",
    description: "Cancion de Tiesto del album DRIVE",
    artistName: "Tiesto",
  },
  {
    title: "Give Me Everything (feat. Ne-Yo, Afrojack & Nayer)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/90/dd/f1/90ddf169-715d-ecd2-660f-bfc9d058c813/886443007154.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Afrojack%20Give%20Me%20Everything%20(feat.%20Ne-Yo%2C%20Afrojack%20%26%20Nayer)",
    description: "Cancion de Afrojack del album Planet Pit (Deluxe Version)",
    artistName: "Afrojack",
  },
  {
    title: "Ten Feet Tall (feat. Wrabel)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b4/17/0a/b4170ae1-3741-f9f8-d06b-0ecc4f45f56d/00602537818792.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Afrojack%20Ten%20Feet%20Tall%20(feat.%20Wrabel)",
    description: "Cancion de Afrojack del album Forget the World (Deluxe Version)",
    artistName: "Afrojack",
  },
  {
    title: "Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/68/7f/d5/687fd582-2387-5044-a881-0bc4f0697338/825646194315.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Afrojack%20Hey%20Mama%20(feat.%20Nicki%20Minaj%2C%20Bebe%20Rexha%20%26%20Afrojack)",
    description: "Cancion de Afrojack del album Listen",
    artistName: "Afrojack",
  },
  {
    title: "Butter",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/66/28/6c/66286c9f-6bea-4f99-ec15-507b0c95dc04/196006991739_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=BTS%20Butter",
    description: "Cancion de BTS del album Butter / Permission to Dance - EP",
    artistName: "BTS",
  },
  {
    title: "Dynamite",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/03/8d/0e/038d0e52-e96d-f386-b8eb-9f77fa013543/195497146918_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=BTS%20Dynamite",
    description: "Cancion de BTS del album Dynamite (DayTime Version) - EP",
    artistName: "BTS",
  },
  {
    title: "Boy With Luv (feat. Halsey)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/40/d4/93/40d493e3-ac9e-1746-8d4c-f380f27c97cb/193483706238_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=BTS%20Boy%20With%20Luv%20(feat.%20Halsey)",
    description: "Cancion de BTS del album MAP OF THE SOUL : PERSONA",
    artistName: "BTS",
  },
  {
    title: "How You Like That",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/48/3b/39/483b3943-ffb2-3e78-0721-623dbdf737b9/20UMGIM50590.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=BLACKPINK%20How%20You%20Like%20That",
    description: "Cancion de BLACKPINK del album How You Like That - Single",
    artistName: "BLACKPINK",
  },
  {
    title: "JUMP",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ee/5e/74/ee5e747e-52e5-458c-e850-0ed3d703b184/8809519880736.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=BLACKPINK%20JUMP",
    description: "Cancion de BLACKPINK del album JUMP - Single",
    artistName: "BLACKPINK",
  },
  {
    title: "DDU-DU DDU-DU",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5e/5d/c3/5e5dc3a6-797b-dee5-9f51-2dcbf447c48e/19UMGIM05046.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=BLACKPINK%20DDU-DU%20DDU-DU",
    description: "Cancion de BLACKPINK del album SQUARE UP - EP",
    artistName: "BLACKPINK",
  },
  {
    title: "Monster",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8a/2d/e9/8a2de945-0ba9-d37d-fd0e-869ee72db099/EXACT_DIGITAL_COVER_IB_4000_4000.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=EXO%20Monster",
    description: "Cancion de EXO del album EX’ACT - The 3rd Album",
    artistName: "EXO",
  },
  {
    title: "Tempo",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/97/f7/95/97f795bb-178f-53c6-8c4e-f1fa0f559846/EXO_DIGITAL_COVER.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=EXO%20Tempo",
    description: "Cancion de EXO del album DON’T MESS UP MY TEMPO – The 5th Album",
    artistName: "EXO",
  },
  {
    title: "CALL ME BABY",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5b/b4/90/5bb490f9-4db6-44be-7183-b6e844ec75db/EXO_2_EXODUS_KORver.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=EXO%20CALL%20ME%20BABY",
    description: "Cancion de EXO del album The 2nd Album ‘EXODUS’",
    artistName: "EXO",
  },
  {
    title: "THIS IS FOR",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b3/a8/e2/b3a8e208-ebd1-831e-4d00-2bdddd99f54a/8809928955766_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=TWICE%20THIS%20IS%20FOR",
    description: "Cancion de TWICE del album THIS IS FOR",
    artistName: "TWICE",
  },
  {
    title: "What is Love?",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7e/41/69/7e4169e8-8358-27ff-66b4-1564ec800abd/00602508875137_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=TWICE%20What%20is%20Love%3F",
    description: "Cancion de TWICE del album What is Love? - EP",
    artistName: "TWICE",
  },
  {
    title: "The Feels",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e3/ee/9b/e3ee9bc7-3a40-5445-485d-6048e9d49479/192641934643_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=TWICE%20The%20Feels",
    description: "Cancion de TWICE del album The Feels",
    artistName: "TWICE",
  },
  {
    title: "Chk Chk Boom",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/c1/47/24c147fc-cf70-0a4e-3e21-bd9a42617572/8809928952123_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Stray%20Kids%20Chk%20Chk%20Boom",
    description: "Cancion de Stray Kids del album ATE",
    artistName: "Stray Kids",
  },
  {
    title: "MANIAC",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/54/5f/6d/545f6deb-89de-9f08-4ad0-b8d4136a0911/192641947902_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Stray%20Kids%20MANIAC",
    description: "Cancion de Stray Kids del album ODDINARY",
    artistName: "Stray Kids",
  },
  {
    title: "Do It",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/72/33/69/7233691c-aefe-252d-678b-faa9b3455200/8809928958965_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Stray%20Kids%20Do%20It",
    description: "Cancion de Stray Kids del album DO IT - EP",
    artistName: "Stray Kids",
  },
  {
    title: "Seventeen",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/4f/8b/23/4f8b2380-ae9e-e317-b3c7-f55afcfff051/859712752819_cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=SEVENTEEN%20Seventeen",
    description: "Cancion de SEVENTEEN del album Heathers: The Musical (World Premiere Cast Recording)",
    artistName: "SEVENTEEN",
  },
  {
    title: "Seventeen",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/00/06/f3/0006f34f-a5cf-a6bf-edbe-62b826faf64c/dj.srbbhdke.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=SEVENTEEN%20Seventeen",
    description: "Cancion de SEVENTEEN del album Remind Me Tomorrow",
    artistName: "SEVENTEEN",
  },
  {
    title: "Seventeen",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/29/28/2a/29282a49-3ee2-3a4d-3ff5-16c10806aaa6/15UMGIM55240.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=SEVENTEEN%20Seventeen",
    description: "Cancion de SEVENTEEN del album Know-It-All (Deluxe)",
    artistName: "SEVENTEEN",
  },
  {
    title: "New Jeans",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/63/e5/e2/63e5e2e4-829b-924d-a1dc-8058a1d69bd4/196922462702_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=NewJeans%20New%20Jeans",
    description: "Cancion de NewJeans del album NewJeans 'Super Shy' - Single",
    artistName: "NewJeans",
  },
  {
    title: "OMG",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/48/96/08/4896085e-b550-cb0a-3e5b-1f203521cb82/196922265464_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=NewJeans%20OMG",
    description: "Cancion de NewJeans del album NewJeans 'OMG' - Single",
    artistName: "NewJeans",
  },
  {
    title: "Ditto",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/f6/29/42/f629426e-92fe-535c-cbe4-76e70850819b/196922287107_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=NewJeans%20Ditto",
    description: "Cancion de NewJeans del album Ditto - Single",
    artistName: "NewJeans",
  },
  {
    title: "러시안 룰렛 Russian Roulette",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e1/37/87/e1378701-df90-f521-8afb-206a61def29d/rv_m03_digitalcover_4000x4000.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Red%20Velvet%20%EB%9F%AC%EC%8B%9C%EC%95%88%20%EB%A3%B0%EB%A0%9B%20Russian%20Roulette",
    description: "Cancion de Red Velvet del album Russian Roulette - The 3rd Mini Album",
    artistName: "Red Velvet",
  },
  {
    title: "Psycho",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/92/5d/da/925ddaf9-1108-ddc9-ce9c-34247d6ffce4/D-Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Red%20Velvet%20Psycho",
    description: "Cancion de Red Velvet del album ‘The ReVe Festival’ Finale - EP",
    artistName: "Red Velvet",
  },
  {
    title: "Bad Boy",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e2/36/4b/e2364b01-f3f9-c67f-7194-81854a14e540/dj.lcmtrdtw.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=Red%20Velvet%20Bad%20Boy",
    description: "Cancion de Red Velvet del album The Perfect Red Velvet - The 2nd Album Repackage - EP",
    artistName: "Red Velvet",
  },
  {
    title: "Fact Check",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f1/96/2a/f1962a29-9325-450d-f11a-49014622dcdf/00888735945144_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=NCT%20127%20Fact%20Check",
    description: "Cancion de NCT 127 del album Fact Check - The 5th Album",
    artistName: "NCT 127",
  },
  {
    title: "Kick It",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cc/0c/b3/cc0cb3a0-e661-7e4d-50e3-60975cc7b3f7/00888735933363_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=NCT%20127%20Kick%20It",
    description: "Cancion de NCT 127 del album NCT #127 Neo Zone - The 2nd Album",
    artistName: "NCT 127",
  },
  {
    title: "Favorite (Vampire)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/17/51/5e/17515e94-f42e-46de-b5de-e1f85b881dee/00888735939358_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=NCT%20127%20Favorite%20(Vampire)",
    description: "Cancion de NCT 127 del album Favorite - The 3rd Album Repackage",
    artistName: "NCT 127",
  },
  {
    title: "Bite Me",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1c/89/10/1c891026-08a1-bbcd-e18e-b5acfe0bd2c7/196922402876_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=ENHYPEN%20Bite%20Me",
    description: "Cancion de ENHYPEN del album DARK BLOOD - EP",
    artistName: "ENHYPEN",
  },
  {
    title: "XO (Only If You Say Yes)",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9b/b3/43/9bb34374-15bd-d2ff-2397-6173b929518f/198704025143_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=ENHYPEN%20XO%20(Only%20If%20You%20Say%20Yes)",
    description: "Cancion de ENHYPEN del album ROMANCE : UNTOLD",
    artistName: "ENHYPEN",
  },
  {
    title: "Knife",
    coverImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4e/48/e2/4e48e2e1-6713-c1de-db25-7a8d27f6979e/198704914287_Cover.jpg/600x600bb.jpg",
    audioUrl: "https://www.youtube.com/results?search_query=ENHYPEN%20Knife",
    description: "Cancion de ENHYPEN del album THE SIN : VANISH",
    artistName: "ENHYPEN",
  },
];

const seed = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MusicGenres");
    await Song.deleteMany();
    const artists = await Artist.find();
    const genres = await Genre.find();
    const artistById = Object.fromEntries(
      artists.map((artist) => [artist.name, artist]),
    );
    const genreById = Object.fromEntries(
      genres.map((genre) => [String(genre._id), genre._id]),
    );
    const songs = SONGS.map((song) => {
      const artist = artistById[song.artistName];
      if (!artist) return null;
      const genre = genreById[String(artist.genre)];
      if (!genre) {
        console.log(
          `Omitida "${song.title}": el genero del artista ${song.artistName} no existe. Ejecuta primero npm run seed:genres y npm run seed:artists`,
        );
        return null;
      }
      return {
        title: song.title,
        coverImage: song.coverImage,
        audioUrl: song.audioUrl,
        description: song.description,
        artist: artist._id,
        genre,
      };
    }).filter((song) => song !== null);
    const missing = SONGS.length - songs.length;
    if (missing > 0) {
      console.log(`Omitidas ${missing} canciones sin artista o genero en la base de datos`);
    }
    const inserted = await Song.insertMany(songs);
    console.log(`Insertando ${inserted.length} canciones en la base de datos`);
  } catch (error) {
    console.log("Error creando las canciones:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
