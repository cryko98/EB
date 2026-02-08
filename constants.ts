
import type { User, Post } from './types';

// EL logo: SVG for Epstein Leaks, white text on black circle
const epsteinLeaksAvatar = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="black" /><text x="50" y="60" font-size="40" fill="white" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold">EL</text></svg>')}`;

export const users: User[] = [
  { id: 1, name: 'Jeffrey Epstein', avatarUrl: 'https://jeffedin.vercel.app/images/epstein.jpg' },
  { id: 2, name: 'Ghislaine Maxwell', avatarUrl: 'https://jeffedin.vercel.app/images/maxwell.jpg' },
  { id: 3, name: 'Prince Andrew', avatarUrl: 'https://jeffedin.vercel.app/images/prince-andrew.jpg' },
  { id: 4, name: 'Bill Clinton', avatarUrl: 'https://jeffedin.vercel.app/images/clinton.jpg' },
  { id: 5, name: 'Donald Trump', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHwi_ak3Kr89qrYmWxrcmDb364vevyXHx9w&s' },
  { id: 6, name: 'Stephen Hawking', avatarUrl: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/985A/production/_101220093_046642501-1.jpg' },
  { id: 7, name: 'Lawrence Summers', avatarUrl: 'https://jeffedin.vercel.app/images/summers.jpg' },
  { id: 8, name: 'Bill Gates', avatarUrl: 'https://jeffedin.vercel.app/images/gates.jpg' },
  { id: 9, name: 'Kevin Spacey', avatarUrl: 'https://epstagram.xyz/images/pfp/kevin-spacey.png' },
  { id: 10, name: 'Chris Tucker', avatarUrl: 'https://epstagram.xyz/images/pfp/chris-tucker.png' },
  { id: 11, name: 'Naomi Campbell', avatarUrl: 'https://epstagram.xyz/images/pfp/naomi-campbell.png' },
  { id: 12, name: 'Mark Zuckerberg', avatarUrl: 'https://i.imgur.com/n742t1i.jpeg'},
  { id: 13, name: 'Epstein Leaks', avatarUrl: epsteinLeaksAvatar },
  { id: 14, name: 'Woody Allen', avatarUrl: 'https://i.dailymail.co.uk/1s/2024/01/04/00/79590815-12925573-image-m-26_1704326553255.jpg' },
  { id: 15, name: 'Richard Branson', avatarUrl: 'https://m.media-amazon.com/images/M/MV5BMTc3MjQ0NTEyMV5BMl5BanBnXkFtZTcwODMyNTQxMw@@._V1_.jpg' },
  { id: 16, name: 'Dean Kamen', avatarUrl: 'https://media.newyorker.com/photos/590961841c7a8e3353381669/master/pass/090511_r18428_p646.jpg' },
];

export const posts: Post[] = [
    {
    id: 1,
    userId: 1,
    timestamp: '15 hours ago',
    text: 'Another successful week of networking and fostering global connections. The island provides such a wonderful, private venue for important discussions.',
    imageUrl: 'https://i.insider.com/5d5423d918a2f7215d795a32?width=1136&format=jpeg',
    likes: 431,
    comments: 2,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 2, text: 'Everything was perfect, darling.' },
        { userId: 8, text: 'Very productive.' },
    ]
  },
  {
    id: 12,
    userId: 7,
    timestamp: '1 day ago',
    text: 'Important discussions about art and philosophy with Woody. The flight was short, but the conversation was deep.',
    imageUrl: 'https://i.dailymail.co.uk/1s/2025/12/13/09/104696051-15380407-Larry_Summers_and_Woody_Allen_on_a_plane-m-36_1765619457509.jpg',
    likes: 345,
    comments: 1,
    isLiked: false,
    commentList: [],
     prefilledComments: [
        { userId: 14, text: 'Fascinating perspectives, Larry. Truly.' }
    ]
  },
  {
    id: 2,
    userId: 4,
    timestamp: '1 day ago',
    text: 'Enjoyed a fascinating trip with Jeffrey. We discussed the future of global philanthropy and youth outreach. Always inspiring to connect with sharp minds. The flight back was smooth!',
    imageUrl: 'https://i.dailymail.co.uk/1s/2019/08/19/22/17452628-7373511-image-a-4_1566251233265.jpg',
    likes: 1998,
    comments: 2,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 1, text: 'The pleasure was all mine, Bill.' },
        { userId: 5, text: 'You guys have all the fun!' },
    ]
  },
  {
    id: 13,
    userId: 13,
    timestamp: '2 days ago',
    text: 'Found in the Palm Beach residence medicine cabinet. Seems to be a common prescription for guests.',
    imageUrl: 'https://i.dailymail.co.uk/1s/2025/12/18/18/104854299-15396741-One_of_the_images_shows_medicine_to_treat_a_urinary_tract_infect-m-16_1766081399620.jpg',
    likes: 2500,
    comments: 0,
    isLiked: false,
    commentList: [],
    prefilledComments: []
  },
    {
    id: 17,
    userId: 1,
    timestamp: '2 days ago',
    text: "Feeling cute, might delete later. #IslandLife",
    imageUrl: 'https://i.dailymail.co.uk/1s/2025/12/12/22/104689213-15379805-The_second_new_image_is_an_up_close_selfie_of_Epstein_pushing_hi-a-7_1765578711840.jpg',
    likes: 550,
    comments: 1,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 2, text: 'Looking sharp, J.E.!' }
    ]
  },
  {
    id: 11,
    userId: 8,
    timestamp: '2 days ago',
    text: 'Productive meeting with Jeffrey and some other great minds. Discussing how to scale up our philanthropic impact. The location was very... secure.',
    likes: 1850,
    comments: 1,
    isLiked: false,
    commentList: [],
     prefilledComments: [
        { userId: 7, text: 'A truly stimulating exchange of ideas.' }
    ]
  },
  {
    id: 5,
    userId: 3,
    timestamp: '3 days ago',
    text: 'A delightful getaway. One must concede, the hospitality was truly fit for a royal. I have absolutely no memory of anything specific, but I\'m sure it was all perfectly pleasant.',
    imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17E33/production/_122692939_andrew.jpg',
    likes: 310,
    comments: 1,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 2, text: 'So glad you could attend, your highness.' }
    ]
  },
    {
    id: 14,
    userId: 15,
    timestamp: '4 days ago',
    text: 'Surrounded by innovators! Great chat with Dean and Jeff about the future of transport and private islands. Big ideas brewing.',
    imageUrl: 'https://i.dailymail.co.uk/1s/2025/12/13/09/104691759-15380407-Segway_inventor_Dean_Kamen_left_and_billionaire_Richard_Branson_-a-1_1765617012295.jpg',
    likes: 987,
    comments: 2,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 16, text: 'The synergy was incredible.'},
        { userId: 1, text: 'The future is bright, gentlemen.'},
    ]
  },
  {
    id: 7,
    userId: 6,
    timestamp: '5 days ago',
    text: 'The theoretical applications of string theory on a sub-atomic level are fascinating. The barbecue was also quite good.',
    likes: 890,
    comments: 1,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 1, text: 'An honor to host a mind like yours.' }
    ]
  },
  {
    id: 8,
    userId: 5,
    timestamp: '6 days ago',
    text: 'Jeff was a terrific guy. He liked beautiful women, and I like beautiful women. I\'m not gonna say he was a bad guy. Great parties. The best parties.',
    likes: 1024,
    comments: 1,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 2, text: 'You were the life of the party, Donald!'}
    ]
  },
  {
    id: 18,
    userId: 13,
    timestamp: '6 days ago',
    text: 'Standard issue guest amenities. Hygiene is very important.',
    imageUrl: 'https://i.dailymail.co.uk/1s/2025/12/12/17/104678393-15378967-A_black_latex_glove_is_included_in_the_trove_of_19_new_images_re-a-87_1765561721172.jpg',
    likes: 2800,
    comments: 0,
    isLiked: false,
    commentList: [],
    prefilledComments: []
  },
  {
    id: 9,
    userId: 1,
    timestamp: '1 week ago',
    text: 'Just had the temple repainted. The new gold leaf really brings out the mysterious, esoteric vibe we were going for. Perfect for quiet contemplation.',
    imageUrl: 'https://i.dailymail.co.uk/1s/2026/02/02/18/105979081-15513681-A_diagram_mapping_Epstein_s_inner_circle_released_by_the_Justice-a-12_1770057514516.jpg',
    likes: 666,
    comments: 1,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 3, text: 'Looks rather splendid.'}
    ]
  },
  {
    id: 15,
    userId: 13,
    timestamp: '1 week ago',
    text: 'A lot of familiar faces in these unreleased albums.',
    imageUrl: 'https://i.dailymail.co.uk/1s/2026/01/30/20/105971517-15514221-A_new_photo_showing_Bill_Gates_and_Jeffrey_Epstein_with_friends_-a-17_1769803802883.jpg',
    likes: 3100,
    comments: 0,
    isLiked: false,
    commentList: [],
    prefilledComments: []
  },
  {
    id: 10,
    userId: 9,
    timestamp: '1 week ago',
    text: 'On my way to a private acting workshop on a secluded island. The best way to really get into character. No distractions.',
    likes: 451,
    comments: 1,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 10, text: 'Save me a seat!'}
    ]
  },
    {
    id: 19,
    userId: 2,
    timestamp: '2 weeks ago',
    text: 'Organizing some old scrapbooks. So many wonderful memories with friends.',
    imageUrl: 'https://i.dailymail.co.uk/1s/2025/12/21/12/104897287-15400847-Pictures_of_nude_women_were_featured_in_a_scrapbook_in_Epstein_s-a-47_1766321269241.jpg',
    likes: 480,
    comments: 1,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 1, text: 'The good old days.' }
    ]
  },
  {
    id: 16,
    userId: 1,
    timestamp: '2 weeks ago',
    text: 'Appreciating the finer things in life. Art is about pushing boundaries and challenging conventions.',
    imageUrl: 'https://i.dailymail.co.uk/1s/2025/12/21/12/104897079-15400847-Images_of_erotica_were_a_theme_in_Epstein_s_home_with_countless_-a-33_1766321268732.jpg',
    likes: 720,
    comments: 2,
    isLiked: false,
    commentList: [],
    prefilledComments: [
        { userId: 14, text: 'Very avant-garde, Jeffrey.'},
        { userId: 2, text: 'Exquisite taste.'}
    ]
  },
  {
    id: 20,
    userId: 13,
    timestamp: '3 weeks ago',
    text: "Curious home decor choices in the Palm Beach mansion. A lot of questions about the artwork.",
    imageUrl: 'https://i.dailymail.co.uk/1s/2025/12/21/12/104902183-15400847-A_photograph_of_a_child_is_framed_on_a_wall_in_Epstein_s_home-a-36_1766321268833.jpg',
    likes: 3500,
    comments: 0,
    isLiked: false,
    commentList: [],
    prefilledComments: []
  },
];
