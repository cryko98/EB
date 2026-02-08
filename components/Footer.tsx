
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-fb-card text-center p-4 mt-4 border-t border-fb-border">
      <div className="max-w-4xl mx-auto text-xs text-fb-secondary-text">
        <p className="font-bold mb-2">Disclaimer</p>
        <p>
          This website is a work of parody and satire, created for entertainment purposes as part of a memecoin project. 
          The content presented, including profiles, posts, and events, is fictional and does not represent real events or opinions.
          It is not intended to spread misinformation, defame, or cause harm to any individual. 
          This project does not condone or support any illegal activities. Please engage with this content responsibly.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
