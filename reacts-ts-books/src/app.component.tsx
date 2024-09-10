import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./components/navbar.component";
import { AuthorManageScreen } from "./screens/author-manage.screen";
import { AddAuthorScreen } from "./screens/author-add.screen";
import { BookManagerScreen } from "./screens/book-manager.screen";
import { AddBookScreen } from "./screens/book-add.screen";
import { Footer } from "./components/footer.component";

let authorsList = [
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac25",
    },
    name: "Mohan Das Karmchand Mahatma Gandhi",
    id: "mahatma-gandhi",
    photo:
      "https://pbs.twimg.com/profile_images/185517358/mahatmagandhi_400x400.jpg",
    biography:
      "Mohandas Karamchand 'Mahatma' Gandhi (2 October 1869 – 30 January 1948), venerated as the Mahatma[a], was an Indian lawyer,[3] anti-colonial nationalist[4] and political ethicist[5] who employed nonviolent resistance to lead the successful campaign for India's independence from British rule[6] and in turn inspired movements for civil rights and freedom across the world. The honorific Mahātmā (Sanskrit: \"great-souled\", \"venerable\"), first applied to him in 1914 in South Africa, is now used throughout the world.[7][8]        Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was in South Africa that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India. He set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination. Assuming leadership of the Indian National Congress in 1921, Gandhi led nationwide campaigns for easing poverty, expanding women's rights, building religious and ethnic amity, ending untouchability, and above all for achieving swaraj or self-rule.[9]",
    tags: ["india", "freedom fighter", "social reformer"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac26",
    },
    name: "Vivek Dutta Mishra",
    id: "vivek-dutta-mishra",
    photo:
      "https://pbs.twimg.com/profile_images/1393255566928015360/i9qVt4oI_400x400.jpg",
    biography:
      "Vivek, by profession, is a Software Technology Enabler—a self-professed title. In this role, he enables the software companies to develop better software designs, build robust architecture, and most importantly, make effective software professionals. With over two decades of experience as a speaker, influencer and educator, his impressive clientele includes the likes of TCS, Mercedes, GE, Mindtree, CISCO, HP, JPMorgan, BNP Paribas, Honeywell, L&T, Walmart, Siemens, Capgemini … But long before associating with software technology, he has been passionate about Indian history and epics and did an extensive study on the subject. Armed with a firm conviction about the superiority of ancient pre-historic literature, over history, he has scripted and directed stage shows such as Ramlila to show various perspectives of the great epic. This series and its inspiration come both from the frustration of the systematic condemnation of our superior Indian culture and a sense of duty to stand it.",
    tags: ["fiction", "english", "hindi", "indian epic", "mythology"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac27",
    },
    name: "Ramdhari Singh Dinkar",
    id: "ramdhari-singh-dinkar",
    photo:
      "https://pbs.twimg.com/profile_images/1269658848777785345/2bY35KV0_400x400.jpg",
    biography:
      'Ramdhari Singh "Dinkar" (23 September 1908 – 24 April 1974), known by his nom de plume Dinkar, was an Indian Hindi poet essayist, patriot and academic,[1] who is considered one of the most important modern Hindi poets. He remerged as a poet of rebellion as a consequence of his nationalist poetry written in the days before Indian independence. His poetry exuded veer rasa,[definition needed] and he has been hailed as a Rashtrakavi (\'national poet\') on account of his inspiring patriotic compositions.[2] He was a regular poet of Hindi Kavi sammelan and is hailed to be as popular and connected to poetry lovers for Hindi speakers as Pushkin for Russians.[3] Dinkar initially supported the revolutionary movement during the Indian independence struggle, but later became a Gandhian. However, he used to call himself a "Bad Gandhian" because he supported the feelings of indignation and revenge among the youth.[4] In Kurukshetra, he accepted that war is destructive but argued that it is necessary for the protection of freedom. He was close to prominent nationalists of the time such as Rajendra Prasad, Anugrah Narayan Sinha, Sri Krishna Sinha, Rambriksh Benipuri and Braj Kishore Prasad.',
    tags: ["poet", "hindi"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac28",
    },
    name: "Jeffrey Archer",
    id: "jeffrey-archer",
    photo:
      "https://pbs.twimg.com/profile_images/3751745623/11bd5e198e1f0f7de40ffdf08f556293_400x400.jpeg",
    biography:
      "Jeffrey Howard Archer, Baron Archer of Weston-super-Mare (born 15 April 1940)[1] is an English novelist, former politician, convicted perjurer, and peer of the realm. Before becoming an author, Archer was a Member of Parliament (1969–1974), but did not seek re-election after a financial scandal that left him almost bankrupt.[2] He revived his fortunes as a best-selling novelist; his books have sold more than 320 million copies worldwide.[3]\nArcher became deputy chairman of the Conservative Party (1985–86), before resigning after a newspaper accused him of paying money to a prostitute. In 1987, he won a court case and was awarded large damages because of this claim.[4] He was made a life peer in 1992 and subsequently became Conservative candidate to be the first elected Mayor of London. He had to resign his candidacy in 1999 after it emerged that he had lied in his 1987 libel case. He was imprisoned (2001–2003) for perjury and perverting the course of justice, ending his elected political career.[3]",
    tags: ["english", "best-seller"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac29",
    },
    name: "John Grisham",
    id: "john-grisham",
    photo:
      "https://pbs.twimg.com/profile_images/1603812525270876163/qnx5yt5o_400x400.jpg",
    biography:
      "John Ray Grisham Jr. ( born February 8, 1955) is an American novelist and attorney, best known for his popular legal thrillers. His books have been translated into 42 languages and published worldwide.Grisham graduated from Mississippi State University and received a J.D. degree from the University of Mississippi School of Law in 1981. He practiced criminal law for about a decade and served in the Mississippi House of Representatives from January 1984 to September 1990.[4] His first novel, A Time to Kill, was published in June 1989, four years after he began writing it. According to the Academy of Achievement his books have sold 300 million copies and he has written 28 consecutive number one bestsellers.[5] A Galaxy British Book Awards winner, Grisham is one of only three authors to sell two million copies on a first printing, the other two being Tom Clancy[6] and J. K. Rowling.[7] Grisham's first bestseller, The Firm, sold more than seven million copies.[2] The book was adapted into a 1993 feature film of the same name, starring Tom Cruise, and a 2012 TV series which continues the story ten years after the events of the film and novel.[8] Eight of his other novels have also been adapted into films: The Chamber, The Client, A Painted House, The Pelican Brief, The Rainmaker, The Runaway Jury, Skipping Christmas, and A Time to Kill.[9] Grisham's latest book (his 42nd published novel), A Time for Mercy, is his third story involving the characters established in A Time to Kill and further follows the story of Jake Brigance, a Mississippi small town lawyer representing a minor accused of murder.[10]",
    tags: ["english", "best-seller", "legal"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac2a",
    },
    name: "Alexandre Dumas",
    id: "alexendre-dumas",
    photo:
      "https://cdn.vocabulary.com/units/h3ekjthk/author.jpg?width=400&v=176fc5c134d",
    biography:
      "Alexandre Dumas (born Dumas Davy de la Pailleterie ([dymɑ davi də la pajət(ə)ʁi]), 24 July 1802 – 5 December 1870),[1][2] also known as Alexandre Dumas père (where père is French for 'father', to distinguish him from his son Alexandre Dumas fils), was a French writer. His works have been translated into many languages and he is one of the most widely read French authors. Many of his historical novels of high adventure were originally published as serials, including The Count of Monte Cristo, The Three Musketeers, Twenty Years After and The Vicomte of Bragelonne: Ten Years Later. His novels have been adapted since the early twentieth century into nearly 200 films.Prolific in several genres, Dumas began his career by writing plays, which were successfully produced from the first. He also wrote numerous magazine articles and travel books; his published works totalled 100,000 pages.[3] In the 1840s, Dumas founded the Théâtre Historique in Paris.",
    tags: ["english", "best-seller", "classic", "french"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac2b",
    },
    name: "JK Rowling",
    id: "jk-rowling",
    photo:
      "https://cdn.vocabulary.com/units/zqj6yx5p/author.jpg?width=400&v=16df50c7e63",
    biography:
      'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith. Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London.[7] The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband, and relative poverty until the first novel in the series, Harry Potter and the Philosopher\'s Stone, was published in 1997. There were six sequels, of which the last was released in 2007. Since then, Rowling has written several books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction Cormoran Strike series.[8] In 2020, her "political fairytale" for children, The Ickabog, was released in instalments in an online version.[9] Rowling has lived a "rags to riches" life in which she progressed from living on benefits to being named the world\'s first billionaire author by Forbes.[10] Rowling disputed the assertion, saying she was not a billionaire.[11] Forbes reported that she lost her billionaire status after giving away much of her earnings to charity.[12] Her UK sales total in excess of £238 million, making her the best-selling living author in Britain.[13] The 2021 Sunday Times Rich List estimated Rowling\'s fortune at £820 million, ranking her as the 196th richest person in the UK.[14] Time named her a runner-up for its 2007 Person of the Year, noting the social, moral, and political inspiration she has given her fans.[15] Rowling was appointed a member of the Order of the Companions of Honour (CH) in the 2017 Birthday Honours for services to literature and philanthropy. In October 2010, she was named the "Most Influential Woman in Britain" by leading magazine editors.[16] Rowling has supported multiple charities, including Comic Relief, One Parent Families, and Multiple Sclerosis Society of Great Britain, as well as launching her own charity, Lumos. Since late 2019, Rowling has publicly voiced her opinions on transgender people and related civil rights. These views have led to controversy.',
    tags: ["english", "best-seller", "classic"],
  },
  {
    _id: {
      $oid: "6142fcdd09968627841b097c",
    },
    name: "Agatha Christie",
    id: "agatha-christie",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Agatha_Christie.png/330px-Agatha_Christie.png",
    biography:
      "Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE (née Miller; 15 September 1890 – 12 January 1976) was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. She also wrote the world's longest-running play, The Mousetrap, which was performed in the West End from 1952 to 2020, as well as six novels under the pseudonym Mary Westmacott. In 1971, she was made a Dame (DBE) for her contributions to literature. Guinness World Records lists Christie as the best-selling fiction writer of all time, her novels having sold more than two billion copies.Christie was born into a wealthy upper-middle-class family in Torquay, Devon, and was largely home-schooled. She was initially an unsuccessful writer with six consecutive rejections, but this changed in 1920 when The Mysterious Affair at Styles, featuring detective Hercule Poirot, was published. Her first husband was Archibald Christie; they married in 1914 and had one child before divorcing in 1928. During both World Wars, she served in hospital dispensaries, acquiring a thorough knowledge of the poisons which featured in many of her novels, short stories, and plays. Following her marriage to archaeologist Max Mallowan in 1930, she spent several months each year on digs in the Middle East and used her first-hand knowledge of his profession in her fiction.",
    tags: ["fiction", "suspence", "hercule piorot"],
    __v: 0,
  },
  {
    _id: {
      $oid: "61ba3fb423d4b12704384946",
    },
    name: "Chetan Bhagat",
    id: "chetan-bhagat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chetan_Bhagat.jpg/330px-Chetan_Bhagat.jpg",
    biography:
      "Chetan Bhagat[1] (born 22 April 1974)[2] is an Indian author and columnist. He was included in Time magazine's list of World's 100 Most Influential People in 2010.[3][4]\nBhagat graduated in mechanical engineering at IIT Delhi and completed a PGP at IIM Ahmedabad.[5] He started his career as an investment banker but left it after a few years to pursue writing. He has written ten novels and three non-fiction books. His first novel, Five Point Someone, was published in 2004. His novels have been listed as bestsellers.[where?]Five of Chetan Bhagat's novels have been adapted into Bollywood films like Hello in 2008 (based on One Night @ the Call Center), 3 Idiots in 2009 (based on Five Point Someone), Kai Po Che! in 2013 (based on The 3 Mistakes of My Life); 2 States in 2014 (based on his novel of the same name) and Half Girlfriend in 2017 (based on his novel of the same name). Bhagat has also written the scripts for Bollywood films like Kick in 2014 and adapted his stories for the movies Kai Po Che! and Half Girlfriend.[6] Bhagat won the Filmfare Award for Best Screenplay for Kai Po Che! at the 59th Filmfare Awards in 2014.[7] He is also often found in controversies at twitter.[8] His latest novel 400 Days which is based on a missing child and forbidden love was released on 8 October 2021.[9]",
    tags: ["fiction", "indian", "young-adult"],
    __v: 0,
  },
  {
    _id: {
      $oid: "61ba404c23d4b12704384947",
    },
    name: "Dan Brown",
    id: "dan-brown",
    photo:
      "https://en.wikipedia.org/wiki/Dan_Brown#/media/File:Dan_Brown_bookjacket_cropped.jpg",
    biography:
      "Daniel Gerhard Brown (born June 22, 1964) is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons (2000), The Da Vinci Code (2003), The Lost Symbol (2009), Inferno (2013), and Origin (2017). His novels are treasure hunts which usually take place over a period of 24 hours.[3] They feature recurring themes of cryptography, art, and conspiracy theories. His books have been translated into 57 languages and, as of 2012, have sold over 200 million copies. Three of them, Angels & Demons, The Da Vinci Code, and Inferno, have been adapted into films.",
    tags: ["fiction", "bible", "symbols", "thriller", "mythology"],
    __v: 0,
  },
  {
    _id: {
      $oid: "61ba418423d4b12704384948",
    },
    name: "Keigo Higashino",
    id: "keigo-higashino",
    photo:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1289592746i/117366._UX200_CR0,33,200,200_.jpg",
    biography:
      "Keigo Higashino (Japanese: 東野 圭吾, Hepburn: Higashino Keigo, born February 4, 1958) is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013. Higashino has won major Japanese awards for his books, almost twenty of which have been turned into films and TV series",
    tags: ["fiction", "japnese", "suspense", "thriller", "best-seller"],
    __v: 0,
  },
  {
    _id: {
      $oid: "61ba425b23d4b12704384949",
    },
    name: "Charles Dickens",
    id: "charles-dickens",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/300px-Dickens_Gurney_head.jpg",
    biography:
      "Charles John Huffam Dickens FRSA was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.",
    tags: ["fiction", "classic", "victorin-era"],
    __v: 0,
  },
];

let booksList = [
  {
    id: "the-accursed-god",
    title: "The Accursed God",
    author: "Vivek Dutta Mishra",
    cover:
      "https://amritatwrites.com/wp-content/uploads/2021/05/The-Accursed-God_HD.jpg",
    description:
      "THE LOST EPIC\n\nThe story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions.\n\nTHE ACCURSED GOD\n\nLong before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers — taking the mantle of a fabled Accursed God.\n\nIn the clash that followed, Aryavart heard several more oaths by the side of more burning pyres, until, a young king decided that no price is too high for peace. Little did he know that the price would be a war engulfing the entire Aryavart, where few would live to tell the tale. And only one man can delay the inevitable if not prevent it. He is the accursed God and even he doesn’t know that destiny is like a quicksand, the more he tries to prevent it, the faster Aryavart moves towards the ultimate catastrophe.\n\nDiscover the saga of a man’s journey to that of a legendary and universally hated Accursed God, the saga of the ruthless ambitions and unfulfilled loves, endless deceits and vengeful oaths, and the saga of the battles to prevent the ultimate war.",
    photo: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
    tags: ["epic", "indian", "mahabharata", "bhishma", "history"],
    reviews: [
      {
        reviewer: "Samantha R.",
        review:
          "A captivating retelling of the Mahabharata with a fresh perspective. The character development is superb and the historical context is richly detailed. Highly recommended for those who enjoy epic tales.",
        rating: 5,
      },
      {
        reviewer: "James L.",
        review:
          "An intriguing blend of history and mythology. The author's imaginative take on ancient events makes this a compelling read. A must-read for history enthusiasts.",
        rating: 4,
      },
    ],
  },
  {
    id: "harry-potter-and-the-philosopher's-stone",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    cover: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    description:
      "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\n\nHarry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!\n\nHaving now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
    photo: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    tags: ["harry potter", "fiction", "fantasy", "best-seller"],
    reviews: [
      {
        reviewer: "Emily W.",
        review:
          "A magical beginning to the Harry Potter series. Rowling's world-building and character development are top-notch. A must-read for both kids and adults.",
        rating: 5,
      },
      {
        reviewer: "Michael T.",
        review:
          "Enchanting and imaginative. The perfect introduction to the wizarding world. Rowling’s storytelling is engaging and memorable.",
        rating: 4,
      },
    ],
  },
  {
    id: "harry-potter-and-the-half-blood-prince",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    cover:
      "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg",
    description:
      "Harry Potter and the Half-Blood Prince is the sixth novel in J.K. Rowling's Harry Potter series. It continues the story of Harry Potter's battle against Lord Voldemort, exploring themes of love, loyalty, and the burden of destiny. As Harry and his friends enter their sixth year at Hogwarts, they uncover more about Voldemort's dark past and the prophecy that may decide the fate of the wizarding world.",
    photo:
      "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg",
    tags: ["harry potter", "fiction", "fantasy", "best-seller"],
    reviews: [
      {
        reviewer: "Sarah H.",
        review:
          "A thrilling continuation of the Harry Potter saga. The depth of character development and the unfolding of the darker aspects of the story are done masterfully.",
        rating: 5,
      },
      {
        reviewer: "Daniel B.",
        review:
          "Engrossing and emotional. Rowling expertly builds up the tension as the series moves closer to its climax. A must-read for fans.",
        rating: 4,
      },
    ],
  },
  {
    id: "kane-and-abel",
    title: "Kane and Abel",
    author: "Jeffrey Archer",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg",
    description:
      "They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune.\n\nA memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save – and finally destroy – each other.\n\n‘The ultimate novel of sibling rivalry’ Dan Brown",
    photo: "https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg",
    tags: ["fiction", "classic", "chronology", "english"],
    reviews: [
      {
        reviewer: "Laura P.",
        review:
          "A masterful narrative of rivalry and revenge. Archer’s storytelling prowess shines through, making this a gripping read from start to finish.",
        rating: 5,
      },
      {
        reviewer: "Robert G.",
        review:
          "An epic tale of two men whose lives are entwined in conflict. Archer's writing is compelling, and the plot is filled with twists and turns.",
        rating: 4,
      },
    ],
  },
  {
    id: "a-child-called-it",
    title: "A Child Called It",
    author: "Dave Pelzer",
    cover:
      "https://m.media-amazon.com/images/I/71coj5flmZL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A Child Called It is a harrowing memoir by Dave Pelzer, recounting his traumatic childhood experiences with his abusive mother. Despite the severe hardships he endured, the book is ultimately a testament to the resilience of the human spirit and the strength to overcome even the most difficult circumstances.",
    photo:
      "https://images-na.ssl-images-amazon.com/images/I/51B5V8lT1-L._SX307_BO1,204,203,200_.jpg",
    tags: ["memoir", "non-fiction", "child abuse", "inspirational"],
    reviews: [
      {
        reviewer: "Jessica M.",
        review:
          "An incredibly moving and powerful memoir. Pelzer’s story is both heart-wrenching and inspiring. A must-read for anyone interested in stories of human resilience.",
        rating: 5,
      },
      {
        reviewer: "Chris A.",
        review:
          "A deeply emotional read that sheds light on the struggles of child abuse. Pelzer's courage and perseverance are truly admirable.",
        rating: 4,
      },
    ],
  },
  {
    id: "the-accursed-god1",
    title: "The Accursed God 2",
    author: "Vivek Dutta Mishra",
    cover:
      "https://amritatwrites.com/wp-content/uploads/2021/05/The-Accursed-God_HD.jpg",
    description:
      "THE LOST EPIC\n\nThe story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions.\n\nTHE ACCURSED GOD\n\nLong before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers — taking the mantle of a fabled Accursed God.\n\nIn the clash that followed, Aryavart heard several more oaths by the side of more burning pyres, until, a young king decided that no price is too high for peace. Little did he know that the price would be a war engulfing the entire Aryavart, where few would live to tell the tale. And only one man can delay the inevitable if not prevent it. He is the accursed God and even he doesn’t know that destiny is like a quicksand, the more he tries to prevent it, the faster Aryavart moves towards the ultimate catastrophe.\n\nDiscover the saga of a man’s journey to that of a legendary and universally hated Accursed God, the saga of the ruthless ambitions and unfulfilled loves, endless deceits and vengeful oaths, and the saga of the battles to prevent the ultimate war.",
    photo: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
    tags: ["epic", "indian", "mahabharata", "bhishma", "history"],
    reviews: [
      {
        reviewer: "Samantha R.",
        review:
          "A captivating retelling of the Mahabharata with a fresh perspective. The character development is superb and the historical context is richly detailed. Highly recommended for those who enjoy epic tales.",
        rating: 5,
      },
      {
        reviewer: "James L.",
        review:
          "An intriguing blend of history and mythology. The author's imaginative take on ancient events makes this a compelling read. A must-read for history enthusiasts.",
        rating: 4,
      },
    ],
  },
  {
    id: "harry-potter-and-the-philosopher's-stone1",
    title: "Harry Potter and the Philosopher's Stone 2",
    author: "J.K. Rowling",
    cover: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    description:
      "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\n\nHarry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!\n\nHaving now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
    photo: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    tags: ["harry potter", "fiction", "fantasy", "best-seller"],
    reviews: [
      {
        reviewer: "Emily W.",
        review:
          "A magical beginning to the Harry Potter series. Rowling's world-building and character development are top-notch. A must-read for both kids and adults.",
        rating: 5,
      },
      {
        reviewer: "Michael T.",
        review:
          "Enchanting and imaginative. The perfect introduction to the wizarding world. Rowling’s storytelling is engaging and memorable.",
        rating: 4,
      },
    ],
  },
  {
    id: "harry-potter-and-the-half-blood-prince1",
    title: "Harry Potter and the Half-Blood Prince 2",
    author: "J.K. Rowling",
    cover:
      "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg",
    description:
      "Harry Potter and the Half-Blood Prince is the sixth novel in J.K. Rowling's Harry Potter series. It continues the story of Harry Potter's battle against Lord Voldemort, exploring themes of love, loyalty, and the burden of destiny. As Harry and his friends enter their sixth year at Hogwarts, they uncover more about Voldemort's dark past and the prophecy that may decide the fate of the wizarding world.",
    photo:
      "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg",
    tags: ["harry potter", "fiction", "fantasy", "best-seller"],
    reviews: [
      {
        reviewer: "Sarah H.",
        review:
          "A thrilling continuation of the Harry Potter saga. The depth of character development and the unfolding of the darker aspects of the story are done masterfully.",
        rating: 5,
      },
      {
        reviewer: "Daniel B.",
        review:
          "Engrossing and emotional. Rowling expertly builds up the tension as the series moves closer to its climax. A must-read for fans.",
        rating: 4,
      },
    ],
  },
  {
    id: "kane-and-abel1",
    title: "Kane and Abel 2",
    author: "Jeffrey Archer",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg",
    description:
      "They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune.\n\nA memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save – and finally destroy – each other.\n\n‘The ultimate novel of sibling rivalry’ Dan Brown",
    photo: "https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg",
    tags: ["fiction", "classic", "chronology", "english"],
    reviews: [
      {
        reviewer: "Laura P.",
        review:
          "A masterful narrative of rivalry and revenge. Archer’s storytelling prowess shines through, making this a gripping read from start to finish.",
        rating: 5,
      },
      {
        reviewer: "Robert G.",
        review:
          "An epic tale of two men whose lives are entwined in conflict. Archer's writing is compelling, and the plot is filled with twists and turns.",
        rating: 4,
      },
    ],
  },
  {
    id: "a-child-called-it1",
    title: "A Child Called It 2",
    author: "Dave Pelzer",
    cover:
      "https://m.media-amazon.com/images/I/71coj5flmZL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A Child Called It is a harrowing memoir by Dave Pelzer, recounting his traumatic childhood experiences with his abusive mother. Despite the severe hardships he endured, the book is ultimately a testament to the resilience of the human spirit and the strength to overcome even the most difficult circumstances.",
    photo:
      "https://images-na.ssl-images-amazon.com/images/I/51B5V8lT1-L._SX307_BO1,204,203,200_.jpg",
    tags: ["memoir", "non-fiction", "child abuse", "inspirational"],
    reviews: [
      {
        reviewer: "Jessica M.",
        review:
          "An incredibly moving and powerful memoir. Pelzer’s story is both heart-wrenching and inspiring. A must-read for anyone interested in stories of human resilience.",
        rating: 5,
      },
      {
        reviewer: "Chris A.",
        review:
          "A deeply emotional read that sheds light on the struggles of child abuse. Pelzer's courage and perseverance are truly admirable.",
        rating: 4,
      },
    ],
  },
];
interface Author {
  id: string;
  name: string;
  biography: string;
  photo: string;
  tags: string[];
}

interface Review {
  reviewer: string;
  review: string;
  rating: number;
}

interface Book {
  id: string;
  title: string;
  author: string;
  cover: String;
  description: string;

  tags: string[];
  reviews: Review[];
}

export class App extends Component {
  state = {
    activeTab: "books",
    authors: authorsList,
    selectedAuthor: null,
    books: booksList,
    selectedBook: null,
  };

  changeTab = (tab: string) => {
    console.log("ct triggered", tab);

    this.setState({ activeTab: tab });
  };

  addAuthor = (author: Author) => {
    this.setState({ authors: [...this.state.authors, author] });
  };

  updateAuthors = (authorsArr: Author[]) => {
    this.setState({ authors: authorsArr });
  };

  setSelectedAuthor = (author: Author | null) => {
    this.setState({ selectedAuthor: author });
  };

  handleAuthorDelete = (id: string) => {
    var remainingAuthors = this.state.authors.filter((a) => a.id !== id);
    this.updateAuthors(remainingAuthors);
  };

  addBook = (book: Book) => {
    this.setState({ books: [...this.state.books, book] });
  };

  setSelectedBook = (book: Book | null) => {
    this.setState({ selectedBook: book });
  };

  updateBooks = (booksArr: Book[]) => {
    this.setState({ books: booksArr });
  };

  handleBookDelete = (id: string) => {
    var remainingBooks = this.state.books.filter((b) => b.id !== id);
    this.updateBooks(remainingBooks);
  };

  getTab = (tab: string) => {
    const { authors, selectedAuthor } = this.state;
    switch (tab) {
      case "authors":
        return (
          <div className="screen">
            <AuthorManageScreen
              selectedAuthor={selectedAuthor}
              setSelectedAuthor={this.setSelectedAuthor}
              handleAuthorDelete={this.handleAuthorDelete}
              authors={authors}
            />
          </div>
        );
        break;
      case "add-author":
        return (
          <div className="screen">
            <AddAuthorScreen
              setSelectedAuthor={this.setSelectedAuthor}
              changeTab={this.changeTab}
              addAuthor={this.addAuthor}
            />
          </div>
        );
        break;
      case "books":
        const { books, selectedBook } = this.state;
        return (
          <div className="screen">
            <BookManagerScreen
              selectedBook={selectedBook}
              books={books}
              setSelectedBook={this.setSelectedBook}
              handleBookDelete={this.handleBookDelete}
            />
          </div>
        );
        break;

      case "add-book":
        return (
          <div className="screen">
            <AddBookScreen
              setSelectedBook={this.setSelectedBook}
              changeTab={this.changeTab}
              addBook={this.addBook}
            />
          </div>
        );
        break;
    }
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <NavBar
          title="World of Books"
          activeTab={activeTab}
          changeTab={this.changeTab}
        />
        {this.getTab(activeTab)}
        <Footer>
          &copy; <a href="https://www.conceptarchitect.in">Concept Architect</a>
        </Footer>
      </div>
    );
  }
}
