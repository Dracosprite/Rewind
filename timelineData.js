
// Define the year ranges for each era
const yearsRange = {
  era1: { start: 1995, end: 2005 },
  era2: { start: 2006, end: 2015 },
  era3: { start: 2016, end: 2025 }
};

// Helper function to determine the era based on the year
function getEraFromYear(year) {
  if (year >= yearsRange.era1.start && year <= yearsRange.era1.end) {
    return 1;
  } else if (year >= yearsRange.era2.start && year <= yearsRange.era2.end) {
    return 2;
  } else {
    return 3;
  }
}

// Define data for each year
function getYearData(year) {
  const era = getEraFromYear(year);
  
  // Browser mapping based on era and year
  let browser = "Internet Explorer 5";
  if (era === 1) {
    if (year < 1998) browser = "Netscape Navigator";
    else if (year < 2001) browser = "Internet Explorer 5";
    else if (year < 2003) browser = "Internet Explorer 6";
    else browser = "Firefox 1.0";
  } else if (era === 2) {
    if (year < 2008) browser = "Internet Explorer 7";
    else if (year < 2010) browser = "Firefox 3";
    else if (year < 2013) browser = "Chrome 10";
    else browser = "Chrome 30";
  } else {
    if (year < 2018) browser = "Chrome 50";
    else if (year < 2021) browser = "Chrome 80";
    else browser = "Chrome 100";
  }

  return {
    year: year,
    era: era,
    browser: browser,
    description: getYearDescription(year),
    websites: getWebsites(year, era),
    apps: getApps(year, era),
    news: getNews(year, era),
    memes: getMemes(year, era),
    music: getMusic(year, era)
  };
}

// Helper functions to get specific data
function getYearDescription(year) {
  const descriptions = {
    1995: "The early days of the World Wide Web, dial-up internet, and basic HTML pages.",
    1996: "Yahoo! and Hotmail launch, bringing the internet to more homes.",
    1997: "The first social media site, Six Degrees, launches.",
    1998: "Google is founded. The dot-com bubble begins to inflate.",
    1999: "The peak of the dot-com bubble. Napster changes music sharing forever.",
    2000: "Y2K comes and goes. AOL reaches its peak popularity.",
    2001: "Wikipedia is launched. The dot-com bubble bursts.",
    2002: "Friendster launches, pioneering social networking.",
    2003: "MySpace launches and quickly becomes popular.",
    2004: "Facebook launches for college students only.",
    2005: "YouTube is founded, transforming video on the web.",
    2006: "Twitter launches. Google acquires YouTube.",
    2007: "The first iPhone is released, changing mobile internet forever.",
    2008: "Facebook surpasses MySpace as the most popular social network.",
    2009: "Bitcoin is created. Uber launches its service.",
    2010: "Instagram launches. The iPad is released.",
    2011: "Snapchat is founded. Game of Thrones premieres.",
    2012: "Facebook reaches 1 billion users and goes public.",
    2013: "Edward Snowden leaks NSA documents.",
    2014: "Apple Watch is announced. The Ice Bucket Challenge goes viral.",
    2015: "Windows 10 launches. The FCC passes net neutrality rules.",
    2016: "Pokémon GO becomes a global phenomenon.",
    2017: "Bitcoin reaches nearly $20,000. Net neutrality repealed.",
    2018: "GDPR is implemented. TikTok merges with Musical.ly.",
    2019: "The first image of a black hole is shared worldwide.",
    2020: "COVID-19 pandemic accelerates digital transformation.",
    2021: "NFTs and the metaverse enter mainstream awareness.",
    2022: "ChatGPT launches, showcasing AI's rapid evolution.",
    2023: "AI tools become widely accessible to the public.",
    2024: "Extended reality (XR) technologies transform daily life.",
    2025: "The next generation of the internet begins to take shape."
  };
  return descriptions[year] || "The digital landscape continues to evolve.";
}

function getWebsites(year, era) {
  // Define website data based on year and era
  const websites = [];
  
  if (era === 1) { // 1995-2005
    if (year <= 1997) {
      websites.push(
        { name: "Yahoo!", description: "The leading web directory and search engine" },
        { name: "GeoCities", description: "Create your own webpage for free!" },
        { name: "AltaVista", description: "Fast and comprehensive search engine" }
      );
    } else if (year <= 2000) {
      websites.push(
        { name: "Yahoo!", description: "Your home on the web" },
        { name: "eBay", description: "Buy and sell items through online auctions" },
        { name: "Amazon.com", description: "Earth's biggest bookstore" }
      );
    } else if (year <= 2003) {
      websites.push(
        { name: "Google", description: "Search billions of web pages" },
        { name: "eBay", description: "The world's online marketplace" },
        { name: "Friendster", description: "Connect with friends online" }
      );
    } else {
      websites.push(
        { name: "MySpace", description: "A place for friends" },
        { name: "Google", description: "Search the web" },
        { name: "Facebook", description: "For college students only" }
      );
    }
  } else if (era === 2) { // 2006-2015
    if (year <= 2008) {
      websites.push(
        { name: "Facebook", description: "Connect with friends and the world around you" },
        { name: "YouTube", description: "Broadcast yourself" },
        { name: "Twitter", description: "What are you doing?" }
      );
    } else if (year <= 2011) {
      websites.push(
        { name: "Facebook", description: "Helping you connect and share with the people in your life" },
        { name: "Twitter", description: "What's happening?" },
        { name: "Tumblr", description: "Follow the world's creators" }
      );
    } else {
      websites.push(
        { name: "Facebook", description: "Making the world more open and connected" },
        { name: "Instagram", description: "Capture and share the world's moments" },
        { name: "Pinterest", description: "Discover and save creative ideas" }
      );
    }
  } else { // 2016-2025
    if (year <= 2019) {
      websites.push(
        { name: "Instagram", description: "Connecting the world through photos and videos" },
        { name: "TikTok", description: "Make your day" },
        { name: "Discord", description: "Your place to talk" }
      );
    } else if (year <= 2022) {
      websites.push(
        { name: "TikTok", description: "Real people. Real videos." },
        { name: "Zoom", description: "Modern video communications" },
        { name: "Notion", description: "All-in-one workspace" }
      );
    } else {
      websites.push(
        { name: "AI Hub", description: "Your personal AI assistant platform" },
        { name: "Metaversal", description: "Step into digital realities" },
        { name: "Hologram", description: "Connect in 3D space" }
      );
    }
  }
  
  return websites;
}

function getApps(year, era) {
  // Define app/tool data based on year and era
  const apps = [];
  
  if (era === 1) { // 1995-2005
    if (year <= 1998) {
      apps.push(
        { name: "WinZip", description: "Compress and decompress files" },
        { name: "ICQ", description: "Online messaging service: Uh-oh!" },
        { name: "RealPlayer", description: "Stream audio and video files" }
      );
    } else if (year <= 2001) {
      apps.push(
        { name: "Napster", description: "Share MP3 music files with users worldwide" },
        { name: "AOL Instant Messenger", description: "Chat with your buddies online" },
        { name: "WinAmp", description: "It really whips the llama's ass!" }
      );
    } else {
      apps.push(
        { name: "MSN Messenger", description: "Chat and share with friends online" },
        { name: "Kazaa", description: "Peer-to-peer file sharing network" },
        { name: "Internet Explorer", description: "Browse the World Wide Web" }
      );
    }
  } else if (era === 2) { // 2006-2015
    if (year <= 2009) {
      apps.push(
        { name: "Skype", description: "Make free video and voice calls" },
        { name: "iTunes", description: "Organize and enjoy your music, videos, and more" },
        { name: "Firefox", description: "The free, non-profit browser" }
      );
    } else if (year <= 2012) {
      apps.push(
        { name: "Angry Birds", description: "Slingshot birds to destroy pig fortresses" },
        { name: "WhatsApp", description: "Simple, reliable messaging" },
        { name: "Chrome", description: "A faster way to browse the web" }
      );
    } else {
      apps.push(
        { name: "Snapchat", description: "Life's more fun when you live in the moment" },
        { name: "Uber", description: "The smartest way to get around" },
        { name: "Spotify", description: "Music for everyone" }
      );
    }
  } else { // 2016-2025
    if (year <= 2019) {
      apps.push(
        { name: "TikTok", description: "Short-form videos that captivate" },
        { name: "Slack", description: "Where work happens" },
        { name: "Netflix", description: "See what's next" }
      );
    } else if (year <= 2022) {
      apps.push(
        { name: "Zoom", description: "Connect from anywhere" },
        { name: "Discord", description: "Chat for communities and friends" },
        { name: "Robinhood", description: "Democratizing finance for all" }
      );
    } else {
      apps.push(
        { name: "Neural", description: "AI-powered creativity tools" },
        { name: "HoloChat", description: "Communicate in augmented reality" },
        { name: "Nexus", description: "Your connection to the metaverse" }
      );
    }
  }
  
  return apps;
}

function getNews(year, era) {
  // Define news item data based on year and era
  const news = [];
  
  if (era === 1) { // 1995-2005
    if (year <= 1997) {
      news.push(
        { headline: "Netscape Goes Public", description: "Navigator browser maker's IPO takes off" },
        { headline: "Microsoft Launches Internet Explorer", description: "New browser challenges Netscape's dominance" }
      );
    } else if (year <= 2000) {
      news.push(
        { headline: "Google Founded by Stanford Students", description: "New search engine promises better results" },
        { headline: "Y2K Bug Concerns Rise", description: "Will computers survive the millennium change?" }
      );
    } else if (year <= 2003) {
      news.push(
        { headline: "Dot-Com Bubble Bursts", description: "Tech stocks crash as reality sets in" },
        { headline: "Napster Shut Down", description: "Court orders file-sharing service to close" }
      );
    } else {
      news.push(
        { headline: "MySpace Becomes Internet Giant", description: "Social network revolutionizes online connections" },
        { headline: "Facebook Launches at Harvard", description: "New 'The Facebook' site connects college students" }
      );
    }
  } else if (era === 2) { // 2006-2015
    if (year <= 2008) {
      news.push(
        { headline: "Twitter Takes Off at SXSW", description: "Microblogging platform gains mainstream attention" },
        { headline: "iPhone Revolutionizes Mobile", description: "Apple introduces touchscreen smartphone" }
      );
    } else if (year <= 2011) {
      news.push(
        { headline: "Facebook Reaches 500M Users", description: "Social network continues exponential growth" },
        { headline: "Bitcoin Reaches Price Parity with USD", description: "Digital currency gains attention" }
      );
    } else {
      news.push(
        { headline: "Instagram Acquired by Facebook", description: "$1 billion deal shakes tech world" },
        { headline: "Netflix Shifts to Original Content", description: "House of Cards changes streaming forever" }
      );
    }
  } else { // 2016-2025
    if (year <= 2019) {
      news.push(
        { headline: "Cambridge Analytica Scandal Rocks Facebook", description: "Data privacy concerns reach new heights" },
        { headline: "TikTok Becomes Global Phenomenon", description: "Short-form video platform takes over" }
      );
    } else if (year <= 2022) {
      news.push(
        { headline: "Metaverse Announced as Next Frontier", description: "Tech companies pivot to virtual reality" },
        { headline: "ChatGPT Launch Signals AI Revolution", description: "Language models reach new capabilities" }
      );
    } else {
      news.push(
        { headline: "Neural Interfaces Reach Consumer Market", description: "Brain-computer devices become mainstream" },
        { headline: "Quantum Internet Begins Global Rollout", description: "New era of secure communications" }
      );
    }
  }
  
  return news;
}

function getMemes(year, era) {
  // Define meme data based on year and era
  const memes = [];
  
  if (era === 1) { // 1995-2005
    if (year <= 1998) {
      memes.push(
        { name: "Dancing Baby", description: "The first viral video sensation" },
        { name: "Hamster Dance", description: "Animated GIFs and MIDI music" }
      );
    } else if (year <= 2001) {
      memes.push(
        { name: "All Your Base", description: "All your base are belong to us" },
        { name: "Peanut Butter Jelly Time", description: "Dancing banana animation" }
      );
    } else {
      memes.push(
        { name: "Badger Badger Badger", description: "Badger badger badger... MUSHROOM MUSHROOM!" },
        { name: "Star Wars Kid", description: "Lightsaber skills go viral" }
      );
    }
  } else if (era === 2) { // 2006-2015
    if (year <= 2009) {
      memes.push(
        { name: "Rickroll", description: "Never gonna give you up..." },
        { name: "LOLcats", description: "I can has cheezburger?" }
      );
    } else if (year <= 2012) {
      memes.push(
        { name: "Nyan Cat", description: "Rainbow-trailing cat set to catchy tune" },
        { name: "Gangnam Style", description: "Korean pop sensation takes over YouTube" }
      );
    } else {
      memes.push(
        { name: "Doge", description: "Such wow. Very meme. Much popular." },
        { name: "Ice Bucket Challenge", description: "Viral charity challenge" }
      );
    }
  } else { // 2016-2025
    if (year <= 2019) {
      memes.push(
        { name: "Distracted Boyfriend", description: "Stock photo becomes relationship metaphor" },
        { name: "Tide Pod Challenge", description: "Dangerous viral trend" }
      );
    } else if (year <= 2022) {
      memes.push(
        { name: "Bernie Sanders Mittens", description: "Senator's inauguration look goes viral" },
        { name: "Sea Shanty TikTok", description: "Wellerman and other sea songs trend" }
      );
    } else {
      memes.push(
        { name: "AI Generated Art", description: "Surreal and surprising creations" },
        { name: "Holographic Trends", description: "AR filters reach new creative heights" }
      );
    }
  }
  
  return memes;
}

function getMusic(year, era) {
  // Define music data based on year and era
  const music = [];
  
  if (era === 1) { // 1995-2005
    if (year <= 1998) {
      music.push(
        { song: "Wannabe", artist: "Spice Girls" },
        { song: "...Baby One More Time", artist: "Britney Spears" }
      );
    } else if (year <= 2001) {
      music.push(
        { song: "Bye Bye Bye", artist: "NSYNC" },
        { song: "It Wasn't Me", artist: "Shaggy" }
      );
    } else {
      music.push(
        { song: "In Da Club", artist: "50 Cent" },
        { song: "Hey Ya!", artist: "OutKast" }
      );
    }
  } else if (era === 2) { // 2006-2015
    if (year <= 2009) {
      music.push(
        { song: "Umbrella", artist: "Rihanna" },
        { song: "I Gotta Feeling", artist: "Black Eyed Peas" }
      );
    } else if (year <= 2012) {
      music.push(
        { song: "Someone Like You", artist: "Adele" },
        { song: "Call Me Maybe", artist: "Carly Rae Jepsen" }
      );
    } else {
      music.push(
        { song: "Happy", artist: "Pharrell Williams" },
        { song: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" }
      );
    }
  } else { // 2016-2025
    if (year <= 2019) {
      music.push(
        { song: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee" },
        { song: "Old Town Road", artist: "Lil Nas X" }
      );
    } else if (year <= 2022) {
      music.push(
        { song: "Blinding Lights", artist: "The Weeknd" },
        { song: "As It Was", artist: "Harry Styles" }
      );
    } else {
      music.push(
        { song: "AI Symphony No. 1", artist: "Neural Beats" },
        { song: "Quantum Wave", artist: "Digital Collective" }
      );
    }
  }
  
  return music;
}
