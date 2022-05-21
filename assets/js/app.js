// alert("hello");
var cl = console.log;
var movie = document.querySelector("#movie");


let movieArray = [
  {
    adult: false,
    backdrop_path: "/hXTWVJMsI9BkxMLliqL1j0FT55t.jpg",
    genre_ids: [28],
    id: 606402,
    original_language: "ko",
    original_title: "야차",
    overview:
      "Nicknamed after a human-devouring spirit, the ruthless leader of an overseas black ops team takes up a dangerous mission in a city riddled with spies.",
    popularity: 991.998,
    poster_path: "/7MDgiFOPUCeG74nQsMKJuzTJrtc.jpg",
    release_date: "2022-04-08",
    title: "Yaksha: Ruthless Operations",
    video: false,
    vote_average: 6.2,
    vote_count: 78,
  },
  {
    adult: false,
    backdrop_path: "/iDeWAGnmloZ5Oz3bocDp4rSbUXd.jpg",
    genre_ids: [28, 53],
    id: 823625,
    original_language: "en",
    original_title: "Blacklight",
    overview:
      "Travis Block is a shadowy Government agent who specializes in removing operatives whose covers have been exposed. He then has to uncover a deadly conspiracy within his own ranks that reaches the highest echelons of power.",
    popularity: 982.925,
    poster_path: "/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg",
    release_date: "2022-02-10",
    title: "Blacklight",
    video: false,
    vote_average: 6.2,
    vote_count: 349,
  },
  {
    adult: false,
    backdrop_path: "/j8ve0iuDEnrcSpUxL62uvI4wnwB.jpg",
    genre_ids: [35, 10751, 10749],
    id: 937337,
    original_language: "es",
    original_title: "¡Qué despadre!",
    overview:
      "Pedro is a single man in his forties who likes to party, has no children and lives at night. Everything changes when he meets Alin. She mentions to him that she is looking for her dad and that there is a high probability that it is him.",
    popularity: 967.64,
    poster_path: "/IkdBm3dDA11pNFlbkLcU5WdESn.jpg",
    release_date: "2022-02-09",
    title: "¡Qué despadre!",
    video: false,
    vote_average: 8,
    vote_count: 28,
  },
  {
    adult: false,
    backdrop_path: "/dqWiut9F30jkiKHHkYTf2RIy1g7.jpg",
    genre_ids: [878, 28],
    id: 919689,
    original_language: "en",
    original_title: "War of the Worlds: Annihilation",
    overview:
      "A mother and son find themselves faced with a brutal alien invasion where survival will depend on discovering the unthinkable truth about the enemy.",
    popularity: 1007.42,
    poster_path: "/9eiUNsUAw2iwVyMeXNNiNQQad4E.jpg",
    release_date: "2021-12-22",
    title: "War of the Worlds: Annihilation",
    video: false,
    vote_average: 5.4,
    vote_count: 41,
  },
  {
    adult: false,
    backdrop_path: "/An1nKjXahrChfEbZ3MAE8fsiut1.jpg",
    genre_ids: [27],
    id: 661791,
    original_language: "es",
    original_title: "La abuela",
    overview:
      "A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.",
    popularity: 913.132,
    poster_path: "/eIUixNvox4U4foL5Z9KbN9HXYSM.jpg",
    release_date: "2022-01-28",
    title: "The Grandmother",
    video: false,
    vote_average: 6,
    vote_count: 154,
  },
  {
    adult: false,
    backdrop_path: "/tq3klWQevRK0Or0cGhsw0h3FDWQ.jpg",
    genre_ids: [12, 16, 35, 10751, 14],
    id: 676705,
    original_language: "fr",
    original_title: "Pil",
    overview:
      "Pil, a little vagabond girl, lives on the streets of the medieval city of Roc-en-Brume, along with her three tame weasels. She survives of food stolen from the castle of the sinister Regent Tristain. One day, to escape his guards, Pil disguises herself as a princess. Thus she embarks upon a mad, delirious adventure, together with Crobar, a big clumsy guard who thinks she's a noble, and Rigolin, a young crackpot jester. Pil is going to have to save Roland, rightful heir to the throne under the curse of a spell. This adventure will turn the entire kingdom upside down, and teach Pil that nobility can be found in all of us.",
    popularity: 795.688,
    poster_path: "/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
    release_date: "2021-08-11",
    title: "Pil's Adventures",
    video: false,
    vote_average: 6.9,
    vote_count: 79,
  },
  {
    adult: false,
    backdrop_path: "/ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg",
    genre_ids: [28, 12, 35, 878],
    id: 696806,
    original_language: "en",
    original_title: "The Adam Project",
    overview:
      "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.",
    popularity: 894.734,
    poster_path: "/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
    release_date: "2022-03-11",
    title: "The Adam Project",
    video: false,
    vote_average: 7,
    vote_count: 2139,
  },
  {
    adult: false,
    backdrop_path: "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
    genre_ids: [878, 28, 12],
    id: 580489,
    original_language: "en",
    original_title: "Venom: Let There Be Carnage",
    overview:
      "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    popularity: 827.132,
    poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    release_date: "2021-09-30",
    title: "Venom: Let There Be Carnage",
    video: false,
    vote_average: 7,
    vote_count: 7254,
  },
  {
    adult: false,
    backdrop_path: "/cugmVwK0N4aAcLibelKN5jWDXSx.jpg",
    genre_ids: [16, 28, 14, 12],
    id: 768744,
    original_language: "ja",
    original_title:
      "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
    overview:
      "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
    popularity: 812.518,
    poster_path: "/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
    release_date: "2021-08-06",
    title: "My Hero Academia: World Heroes' Mission",
    video: false,
    vote_average: 7.4,
    vote_count: 173,
  },
  {
    adult: false,
    backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
    genre_ids: [16, 10751, 14, 35, 12],
    id: 585083,
    original_language: "en",
    original_title: "Hotel Transylvania: Transformania",
    overview:
      "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
    popularity: 847.527,
    poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
    release_date: "2022-02-25",
    title: "Hotel Transylvania: Transformania",
    video: false,
    vote_average: 7.1,
    vote_count: 842,
  },
  {
    adult: false,
    backdrop_path: "/A3bsT0m1um6tvcmlIGxBwx9eAxn.jpg",
    genre_ids: [28, 12, 35, 10749],
    id: 752623,
    original_language: "en",
    original_title: "The Lost City",
    overview:
      "Follows a reclusive romance novelist who was sure nothing could be worse than getting stuck on a book tour with her cover model, until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
    popularity: 771.07,
    poster_path: "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
    release_date: "2022-03-24",
    title: "The Lost City",
    video: false,
    vote_average: 6.7,
    vote_count: 376,
  },
  {
    adult: false,
    backdrop_path: "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
    genre_ids: [16, 35, 12, 10751],
    id: 774825,
    original_language: "en",
    original_title: "The Ice Age Adventures of Buck Wild",
    overview:
      "The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash & Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
    popularity: 735.269,
    poster_path: "/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
    release_date: "2022-01-28",
    title: "The Ice Age Adventures of Buck Wild",
    video: false,
    vote_average: 6.9,
    vote_count: 1105,
  },
  {
    adult: false,
    backdrop_path: "/u5lEdCvKLkm1EhfQt3qe8Rr5DvR.jpg",
    genre_ids: [27],
    id: 938596,
    original_language: "en",
    original_title: "Bull Shark",
    overview:
      "A hungry shark begins feeding on unsuspecting lake goers in a small Texas town.",
    popularity: 651.842,
    poster_path: "/wGE4ImqYjJZQi3xFu4I2OLm8m0w.jpg",
    release_date: "2022-02-05",
    title: "Bull Shark",
    video: false,
    vote_average: 5.6,
    vote_count: 18,
  },
  {
    adult: false,
    backdrop_path: "/qjGrUmKW78MCFG8PTLDBp67S27p.jpg",
    genre_ids: [16, 28, 12, 14],
    id: 635302,
    original_language: "ja",
    original_title: "劇場版「鬼滅の刃」無限列車編",
    overview:
      "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    popularity: 743.163,
    poster_path: "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    release_date: "2020-10-16",
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    video: false,
    vote_average: 8.4,
    vote_count: 2406,
  },
  {
    adult: false,
    backdrop_path: "/t7I942V5U1Ggn6OevN75u3sNYH9.jpg",
    genre_ids: [28, 53],
    id: 760868,
    original_language: "sv",
    original_title: "Svart krabba",
    overview:
      "To end an apocalyptic war and save her daughter, a reluctant soldier embarks on a desperate mission to cross a frozen sea carrying a top-secret cargo.",
    popularity: 685.058,
    poster_path: "/mcIYHZYwUbvhvUt8Lb5nENJ7AlX.jpg",
    release_date: "2022-03-18",
    title: "Black Crab",
    video: false,
    vote_average: 6.3,
    vote_count: 412,
  },
  {
    adult: false,
    backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
    genre_ids: [878, 28, 12],
    id: 524434,
    original_language: "en",
    original_title: "Eternals",
    overview:
      "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
    popularity: 659.534,
    poster_path: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
    release_date: "2021-11-03",
    title: "Eternals",
    video: false,
    vote_average: 7.1,
    vote_count: 5513,
  },
  {
    adult: false,
    backdrop_path: "/xHRabofjmMGoIV3mb6xgy4nwOcS.jpg",
    genre_ids: [27],
    id: 801071,
    original_language: "en",
    original_title: "The Jack in the Box: Awakening",
    overview:
      "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
    popularity: 645.238,
    poster_path: "/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
    release_date: "2022-02-24",
    title: "The Jack in the Box: Awakening",
    video: false,
    vote_average: 6.2,
    vote_count: 40,
  },
  {
    adult: false,
    backdrop_path: "/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg",
    genre_ids: [16, 35, 10751, 10402],
    id: 438695,
    original_language: "en",
    original_title: "Sing 2",
    overview:
      "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
    popularity: 625.106,
    poster_path: "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
    release_date: "2021-12-01",
    title: "Sing 2",
    video: false,
    vote_average: 8.1,
    vote_count: 2710,
  },
  {
    adult: false,
    backdrop_path: "/33wnBK5NxvuKQv0Cxo3wMv0eR7F.jpg",
    genre_ids: [27, 53],
    id: 833425,
    original_language: "en",
    original_title: "No Exit",
    overview:
      "Stranded at a rest stop in the mountains during a blizzard, a recovering addict discovers a kidnapped child hidden in a car belonging to one of the people inside the building which sets her on a terrifying struggle to identify who among them is the kidnapper.",
    popularity: 628.11,
    poster_path: "/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg",
    release_date: "2022-02-25",
    title: "No Exit",
    video: false,
    vote_average: 6.7,
    vote_count: 435,
  },
  {
    adult: false,
    backdrop_path: "/d2EhCtT7vSm7RiqbxZkrcLgJGXg.jpg",
    genre_ids: [28, 878, 14],
    id: 526896,
    original_language: "en",
    original_title: "Morbius",
    overview:
      "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
    popularity: 648.645,
    poster_path: "/h4WLN3cmEjCsH1fNGRfvGV6IPBX.jpg",
    release_date: "2022-03-30",
    title: "Morbius",
    video: false,
    vote_average: 5.9,
    vote_count: 597,
  },
];

//<div class="col-sm-4">
//					<figure class="movie">
//						<img src="https://image.tmdb.org/t/p/w1280/7MDgiFOPUCeG74nQsMKJuzTJrtc.jpg" alt="">
//						<figcaption>
//							<div class="movie-info">
//								<div class="row">
//									<div class="col-sm-10">
//										<h3>Yaksha: Ruthless Operations</h3>
//									</div>
//									<div class="col-sm-2">
//										<span>6.2</span>
//									</div>
//								</div>
//							</div>
//							<div class="overview">
//								<h3>overview</h3>
//								<p class="info">Nicknamed after a human-devouring spirit, 
//								the ruthless leader of an overseas black ops team takes up a dangerous mission in a city riddled with spies.</p>
//							</div>
//						</figcaption>
//					</figure>
//				</div>

var result ="";
movieArray.forEach(moviearr =>{
	result += `
				<div class="col-sm-4">
					<figure class="movie">
						<img src="https://image.tmdb.org/t/p/w1280${moviearr.poster_path}" alt="firstmovie">
						<figcaption>
							<div class="movie-info">
								<div class="row">
									<div class="col-sm-10">
										<h3>${moviearr.title}</h3>
									</div>
									<div class="col-sm-2">
										<span>${moviearr.vote_average}</span>
									</div>
								</div>
							</div>
							<div class="overview">
								<h3>overview</h3>
								<p class="info">${moviearr.overview}</p>
							</div>
						</figcaption>
					</figure>
				</div>`
});

cl(result);
movie.innerHTML = result;