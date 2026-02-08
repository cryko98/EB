
import type { User, Post } from './types';

export const users: User[] = [
  { id: 1, name: 'Jeffrey Epstein', avatarUrl: 'https://epstagram.xyz/images/pfp/jeffrey-epstein.png' },
  { id: 2, name: 'Ghislaine Maxwell', avatarUrl: 'https://epstagram.xyz/images/pfp/ghislaine-maxwell.png' },
  { id: 3, name: 'Prince Andrew', avatarUrl: 'https://epstagram.xyz/images/pfp/prince-andrew.png' },
  { id: 4, name: 'Bill Clinton', avatarUrl: 'https://epstagram.xyz/images/pfp/bill-clinton.png' },
  { id: 5, name: 'Donald Trump', avatarUrl: 'https://epstagram.xyz/images/pfp/donald-trump.png' },
  { id: 6, name: 'Stephen Hawking', avatarUrl: 'https://epstagram.xyz/images/pfp/stephen-hawking.png' },
  { id: 7, name: 'Ehud Barak', avatarUrl: 'https://epstagram.xyz/images/pfp/ehud-barak.png' },
  { id: 8, name: 'Bill Gates', avatarUrl: 'https://epstagram.xyz/images/pfp/bill-gates.png' },
  { id: 9, name: 'Kevin Spacey', avatarUrl: 'https://epstagram.xyz/images/pfp/kevin-spacey.png' },
  { id: 10, name: 'Chris Tucker', avatarUrl: 'https://epstagram.xyz/images/pfp/chris-tucker.png' },
  { id: 11, name: 'Naomi Campbell', avatarUrl: 'https://epstagram.xyz/images/pfp/naomi-campbell.png' },
  { id: 12, name: 'Mark Zuckerberg', avatarUrl: 'https://i.imgur.com/n742t1i.jpeg'},
];

export const posts: Post[] = [
  {
    id: 1,
    userId: 12,
    timestamp: '2 hours ago',
    text: 'Just reviewed the 2026 data logs. The engagement metrics on Little St. James are... impressive. We need to optimize the algorithm to promote "island retreats" more effectively. Data integrity is key.',
    imageUrl: 'https://i.imgur.com/YJgM5r3.jpeg',
    likes: 2026,
    comments: 404,
  },
  {
    id: 2,
    userId: 4,
    timestamp: '5 hours ago',
    text: 'The new files are out? Depends on what the meaning of the word "files" is. Anyway, had a great time flying with friends. Very productive trip focused on global initiatives.',
    imageUrl: 'https://epstagram.xyz/images/posts/bill-clinton-getting-a-massage.png',
    likes: 1998,
    comments: 789,
  },
  {
    id: 3,
    userId: 8,
    timestamp: '1 day ago',
    text: 'According to my calculations, the new data release has a 97.3% chance of being misinterpreted by the public. We were simply discussing vaccine distribution logistics.',
    imageUrl: 'https://epstagram.xyz/images/posts/bill-gates-and-epstein.png',
    likes: 1500,
    comments: 215,
  },
  {
    id: 4,
    userId: 3,
    timestamp: '2 days ago',
    text: 'One finds oneself in a rather peculiar position. I have no recollection of these events, dates, or persons. Must be a frightful misunderstanding.',
    imageUrl: 'https://epstagram.xyz/images/posts/prince-andrew-waving.png',
    likes: 310,
    comments: 77,
  },
  {
    id: 5,
    userId: 5,
    timestamp: '3 days ago',
    text: 'The FAKE NEWS is releasing more files. It\'s a witch hunt! Believe me. I only surround myself with the best people, and Jeff was a terrific guy. End of story.',
    imageUrl: 'https://epstagram.xyz/images/posts/donald-trump-epstein-and-ghislaine.png',
    likes: 1024,
    comments: 420,
  }
];
