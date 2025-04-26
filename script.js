
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  let selectedYear = 2000;
  let isLoading = false;
  let isInitialLoad = true;
  
  // DOM Elements
  const yearSlider = document.getElementById('year-slider');
  const yearDisplay = document.getElementById('year-display');
  const contentContainer = document.getElementById('content-container');
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.getElementById('progress-bar');
  const loadingText = document.getElementById('loading-text');
  const clickContinue = document.getElementById('click-continue');
  const browserFrame = document.getElementById('browser-frame');
  const browserName = document.getElementById('browser-name');
  const timeContent = document.getElementById('time-content');
  
  // Set initial year
  yearSlider.value = selectedYear;
  yearDisplay.textContent = selectedYear;
  updateContent(selectedYear, true); // Load initial content
  
  // Event Listeners
  yearSlider.addEventListener('input', function() {
    // Update the displayed year as slider moves
    yearDisplay.textContent = this.value;
    
    // Animate the year number
    gsap.fromTo(yearDisplay,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "back.out" }
    );
  });
  
  yearSlider.addEventListener('change', function() {
    const newYear = parseInt(this.value);
    
    // Only reload if the year has actually changed
    if (newYear !== selectedYear) {
      // Animate out current content
      gsap.to(contentContainer, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.out",
        onComplete: function() {
          selectedYear = newYear;
          startLoading();
        }
      });
    }
  });
  
  loadingScreen.addEventListener('click', function() {
    const currentProgress = parseInt(progressBar.style.width);
    if (currentProgress >= 95) {
      completeLoading();
    }
  });
  
  // Functions
  function startLoading() {
    if (isInitialLoad) {
      isInitialLoad = false;
      updateContent(selectedYear, true);
      return;
    }
    
    isLoading = true;
    loadingScreen.classList.remove('hidden');
    progressBar.style.width = '0%';
    loadingText.innerHTML = `Loading... 0%<br/><span class="text-sm">Please wait while the page loads...</span>`;
    clickContinue.classList.add('hidden');
    
    // Animate in the loading screen
    gsap.fromTo(loadingScreen,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );
    
    let progress = 0;
    const interval = setInterval(function() {
      progress += 5;
      progressBar.style.width = progress + '%';
      loadingText.innerHTML = `Loading... ${progress}%<br/><span class="text-sm">Please wait while the page loads...</span>`;
      
      if (progress >= 100) {
        clearInterval(interval);
        clickContinue.classList.remove('hidden');
        setTimeout(completeLoading, 500);
      }
    }, 100);
  }
  
  function completeLoading() {
    // Animate out the loading screen
    gsap.to(loadingScreen, {
      opacity: 0,
      duration: 0.3,
      onComplete: function() {
        loadingScreen.classList.add('hidden');
        isLoading = false;
        updateContent(selectedYear);
      }
    });
  }
  
  function updateContent(year, isInitial = false) {
    const yearData = getYearData(year);
    
    // Update browser name based on the year's data
    browserName.textContent = yearData.browser;
    
    // Update browser frame styling based on era
    updateBrowserStyle(yearData.era);
    
    // Create HTML content
    const contentHTML = `
      <div class="container mx-auto px-4 py-8 era-${yearData.era}">
        <div class="mb-8">
          <h1 class="text-4xl font-bold mb-2 ${
            yearData.era === 1 ? 'font-comic text-blue-800' : 
            yearData.era === 2 ? 'font-helvetica text-blue-800' : 
            'font-inter text-gray-900'
          }">
            Welcome to ${yearData.year}
          </h1>
          <p class="text-lg ${
            yearData.era === 1 ? 'font-times' : 
            yearData.era === 2 ? 'font-helvetica text-gray-700' : 
            'font-inter text-gray-600'
          }">
            ${yearData.description}
          </p>
        </div>
        
        <!-- Websites Section -->
        <div class="mt-8">
          <h2 class="text-2xl font-bold mb-4 ${yearData.era === 1 ? 'font-comic' : yearData.era === 2 ? 'font-helvetica' : 'font-inter'}">
            Popular Websites
          </h2>
          <div class="grid ${yearData.era === 1 ? '' : 'grid-cols-2 lg:grid-cols-3'} gap-6">
            ${yearData.websites.map((website, index) => renderWebsiteCard(website, yearData.era, index)).join('')}
          </div>
        </div>
        
        <!-- Apps Section -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-4 ${yearData.era === 1 ? 'font-comic' : yearData.era === 2 ? 'font-helvetica' : 'font-inter'}">
            Popular Apps & Tools
          </h2>
          <div class="grid ${yearData.era === 1 ? '' : 'grid-cols-2 lg:grid-cols-3'} gap-6">
            ${yearData.apps.map((app, index) => renderAppCard(app, yearData.era, index)).join('')}
          </div>
        </div>
        
        <!-- News Section -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-4 ${yearData.era === 1 ? 'font-comic' : yearData.era === 2 ? 'font-helvetica' : 'font-inter'}">
            Headlines & Tech News
          </h2>
          <div class="grid ${yearData.era === 1 ? '' : 'grid-cols-2'} gap-6">
            ${yearData.news.map((newsItem, index) => renderNewsCard(newsItem, yearData.era, index)).join('')}
          </div>
        </div>
        
        <!-- Memes Section -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-4 ${yearData.era === 1 ? 'font-comic' : yearData.era === 2 ? 'font-helvetica' : 'font-inter'}">
            Memes & Viral Content
          </h2>
          <div class="grid ${yearData.era === 1 ? '' : 'grid-cols-2 lg:grid-cols-3'} gap-6">
            ${yearData.memes.map((meme, index) => renderMemeCard(meme, yearData.era, index)).join('')}
          </div>
        </div>
        
        <!-- Music Section -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-4 ${yearData.era === 1 ? 'font-comic' : yearData.era === 2 ? 'font-helvetica' : 'font-inter'}">
            Popular Music
          </h2>
          <div class="grid ${yearData.era === 1 ? '' : 'grid-cols-2 lg:grid-cols-3'} gap-6">
            ${yearData.music.map((musicItem, index) => renderMusicPlayer(musicItem, yearData.era, index)).join('')}
          </div>
        </div>
        
        <div class="mt-16 mb-8 text-center">
          <div class="${
            yearData.era === 1 ? 'border-2 border-black p-3 bg-yellow-100 inline-block' : 
            yearData.era === 2 ? 'rounded-md border border-gray-300 p-4 bg-gray-50 inline-block' : 
            'rounded-lg shadow-md p-5 bg-white inline-block'
          }">
            <p class="${
              yearData.era === 1 ? 'font-comic' : 
              yearData.era === 2 ? 'font-helvetica' : 
              'font-inter'
            }">
              Experience what the internet was like in ${yearData.year}.<br />
              Slide the time control to visit another year!
            </p>
          </div>
        </div>
      </div>
    `;
    
    // Update the content
    timeContent.innerHTML = contentHTML;
    
    // Animate the new content in
    if (!isInitial) {
      gsap.fromTo(contentContainer,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }
  
  function updateBrowserStyle(era) {
    browserFrame.className = 'browser-frame';
    
    if (era === 1) {
      browserFrame.classList.add('border-4', 'border-gray-400', 'bg-gray-200');
      browserName.parentElement.className = 'browser-header bg-gradient-to-r from-blue-800 to-blue-600 text-white';
    } else if (era === 2) {
      browserFrame.classList.add('border', 'border-gray-300', 'rounded-md', 'shadow-md');
      browserName.parentElement.className = 'browser-header bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700';
    } else {
      browserFrame.classList.add('rounded-xl', 'shadow-lg');
      browserName.parentElement.className = 'browser-header bg-white text-gray-900';
    }
  }
  
  function renderWebsiteCard(website, era, index) {
    let html = '';
    const animationDelay = `animation-delay: ${index * 150}ms`;
    
    switch (era) {
      case 1:
        html = `
          <div class="animate-fade-in window w-full max-w-xs" style="${animationDelay}">
            <div class="window-header">
              <span>${website.name}</span>
              <div class="flex space-x-1">
                <button class="w-3 h-3 rounded-sm">_</button>
                <button class="w-3 h-3 rounded-sm">□</button>
                <button class="w-3 h-3 rounded-sm">×</button>
              </div>
            </div>
            <div class="p-3 bg-white text-left">
              <h3 class="font-bold text-blue-800 underline">${website.name}</h3>
              <p class="mt-2 text-sm">${website.description}</p>
              <div class="mt-3 flex justify-center">
                <button class="button-style text-xs active:scale-105">Visit Site</button>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 2:
        html = `
          <div class="animate-fade-in window w-full max-w-xs" style="${animationDelay}">
            <div class="window-header">
              <span>${website.name}</span>
              <button class="text-gray-600">×</button>
            </div>
            <div class="p-4 text-left">
              <h3 class="font-bold text-blue-700 text-lg">${website.name}</h3>
              <p class="mt-2 text-gray-600">${website.description}</p>
              <div class="mt-4 flex justify-end">
                <button class="button-style">Visit</button>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 3:
        html = `
          <div class="animate-fade-in window w-full max-w-xs" style="${animationDelay}">
            <div class="window-header">
              <span>${website.name}</span>
              <button class="text-gray-400 hover:text-gray-600">×</button>
            </div>
            <div class="p-5 text-left">
              <h3 class="font-bold text-xl">${website.name}</h3>
              <p class="mt-2 text-gray-600">${website.description}</p>
              <div class="mt-4 flex justify-center">
                <button class="button-style">Explore</button>
              </div>
            </div>
          </div>
        `;
        break;
    }
    
    return html;
  }
  
  function renderAppCard(app, era, index) {
    let html = '';
    const animationDelay = `animation-delay: ${index * 150}ms`;
    
    switch (era) {
      case 1:
        html = `
          <div class="animate-fade-in window w-full max-w-xs" style="${animationDelay}">
            <div class="window-header">
              <span>${app.name}</span>
              <div class="flex space-x-1">
                <button class="w-3 h-3 rounded-sm">_</button>
                <button class="w-3 h-3 rounded-sm">□</button>
                <button class="w-3 h-3 rounded-sm">×</button>
              </div>
            </div>
            <div class="p-3 bg-gray-100 text-left">
              <div class="flex justify-center mb-2">
                <div class="w-10 h-10 bg-blue-100 border border-blue-300 flex items-center justify-center text-xl">
                  ${app.name.charAt(0)}
                </div>
              </div>
              <h3 class="font-bold text-center">${app.name}</h3>
              <p class="mt-2 text-sm">${app.description}</p>
              <div class="mt-3 flex justify-center">
                <button class="button-style text-xs">Launch</button>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 2:
        html = `
          <div class="animate-fade-in window w-full max-w-xs" style="${animationDelay}">
            <div class="window-header">
              <span>${app.name}</span>
              <button class="text-gray-600">×</button>
            </div>
            <div class="p-4 text-left bg-gradient-to-b from-white to-gray-50">
              <div class="flex justify-center mb-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                  ${app.name.charAt(0)}
                </div>
              </div>
              <h3 class="font-bold text-center text-gray-800">${app.name}</h3>
              <p class="mt-2 text-gray-600 text-center">${app.description}</p>
              <div class="mt-4 flex justify-center">
                <button class="button-style">Open App</button>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 3:
        html = `
          <div class="animate-fade-in window w-full max-w-xs" style="${animationDelay}">
            <div class="p-5 text-left">
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  ${app.name.charAt(0)}
                </div>
              </div>
              <h3 class="font-bold text-xl text-center">${app.name}</h3>
              <p class="mt-2 text-gray-600 text-center">${app.description}</p>
              <div class="mt-4 flex justify-center">
                <button class="button-style">Launch</button>
              </div>
            </div>
          </div>
        `;
        break;
    }
    
    return html;
  }
  
  function renderNewsCard(newsItem, era, index) {
    let html = '';
    const animationDelay = `animation-delay: ${index * 150}ms`;
    
    switch (era) {
      case 1:
        html = `
          <div class="animate-fade-in window w-full" style="${animationDelay}">
            <div class="window-header">
              <span>Breaking News</span>
              <div class="flex space-x-1">
                <button class="w-3 h-3 rounded-sm">_</button>
                <button class="w-3 h-3 rounded-sm">□</button>
                <button class="w-3 h-3 rounded-sm">×</button>
              </div>
            </div>
            <div class="p-3 bg-white text-left">
              <h3 class="font-bold text-red-800">${newsItem.headline}</h3>
              <div class="my-2 h-px bg-gray-400"></div>
              <p class="text-sm">${newsItem.description}</p>
              <div class="mt-3 flex justify-end">
                <button class="button-style text-xs">Read More</button>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 2:
        html = `
          <div class="animate-fade-in window w-full" style="${animationDelay}">
            <div class="window-header">
              <span>Tech News</span>
              <button class="text-gray-600">×</button>
            </div>
            <div class="p-4 text-left">
              <h3 class="font-bold text-lg text-blue-700">${newsItem.headline}</h3>
              <div class="my-2 h-px bg-gray-200"></div>
              <p class="text-gray-700">${newsItem.description}</p>
              <div class="mt-4 flex justify-end">
                <button class="button-style">Full Story</button>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 3:
        html = `
          <div class="animate-fade-in window w-full" style="${animationDelay}">
            <div class="p-5 text-left">
              <h3 class="font-bold text-xl">${newsItem.headline}</h3>
              <div class="my-3 h-px bg-gray-100"></div>
              <p class="text-gray-600">${newsItem.description}</p>
              <div class="mt-4 flex justify-end">
                <button class="button-style">Read Article</button>
              </div>
            </div>
          </div>
        `;
        break;
    }
    
    return html;
  }
  
  function renderMemeCard(meme, era, index) {
    let html = '';
    const animationDelay = `animation-delay: ${index * 150}ms`;
    
    switch (era) {
      case 1:
        html = `
          <div class="animate-fade-in window" style="${animationDelay}">
            <div class="window-header">
              <span>Fun Stuff</span>
              <div class="flex space-x-1">
                <button class="w-3 h-3 rounded-sm">_</button>
                <button class="w-3 h-3 rounded-sm">□</button>
                <button class="w-3 h-3 rounded-sm">×</button>
              </div>
            </div>
            <div class="p-3 bg-white">
              <h3 class="font-bold text-center">${meme.name}</h3>
              <div class="my-2 h-24 bg-gray-200 flex items-center justify-center">
                <span class="text-sm text-gray-500">[${meme.name}]</span>
              </div>
              <p class="mt-2 text-sm text-center">${meme.description}</p>
              <div class="mt-2 text-xs text-center text-blue-800 underline cursor-pointer">
                Share with friends!
              </div>
            </div>
          </div>
        `;
        break;
      
      case 2: 
        html = `
          <div class="animate-fade-in window" style="${animationDelay}">
            <div class="window-header">
              <span>Viral Content</span>
              <button class="text-gray-600">×</button>
            </div>
            <div class="p-4">
              <h3 class="font-bold">${meme.name}</h3>
              <div class="my-3 h-32 bg-gray-100 flex items-center justify-center rounded">
                <span class="text-gray-500">[${meme.name}]</span>
              </div>
              <p class="mt-2 text-sm text-gray-700">${meme.description}</p>
              <div class="mt-3 flex justify-center space-x-2">
                <button class="px-3 py-1 bg-blue-500 text-white text-sm rounded">Like</button>
                <button class="px-3 py-1 bg-green-500 text-white text-sm rounded">Share</button>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 3:
        html = `
          <div class="animate-fade-in window" style="${animationDelay}">
            <div class="p-4">
              <div class="my-2 h-40 bg-gray-50 flex items-center justify-center rounded-lg">
                <span class="text-gray-400">[${meme.name} image]</span>
              </div>
              <h3 class="font-bold mt-3">${meme.name}</h3>
              <p class="mt-1 text-sm text-gray-600">${meme.description}</p>
              <div class="mt-3 flex justify-between items-center">
                <div class="flex space-x-2">
                  <button class="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center">❤️</button>
                  <button class="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">💬</button>
                </div>
                <button class="w-8 h-8 rounded-full bg-green-100 text-green-500 flex items-center justify-center">↗️</button>
              </div>
            </div>
          </div>
        `;
        break;
    }
    
    return html;
  }
  
  function renderMusicPlayer(musicItem, era, index) {
    let html = '';
    const animationDelay = `animation-delay: ${index * 150}ms`;
    
    switch (era) {
      case 1:
        html = `
          <div class="animate-fade-in window max-w-xs w-full mx-auto" style="${animationDelay}">
            <div class="window-header">
              <span>Music Player</span>
              <div class="flex gap-1 items">
                <button class="w-3 h-3 px-0.5 rounded-sm">_</button>
                <button class="w-3 h-3 rounded-sm">□</button>
                <button class="w-3 h-3rounded-sm">×</button>
              </div>
            </div>
            <div class="p-3 bg-gray-100">
              <div class="bg-gray-200 border border-gray-400 p-2">
                <div class="text-center mb-1">Now Playing:</div>
                <div class="font-bold text-center text-sm truncate">${musicItem.song}</div>
                <div class="text-center text-xs">${musicItem.artist}</div>
                <div class="mt-2 flex justify-center space-x-2">
                  <button class="button-style text-xs p-1">◀◀</button>
                  <button class="button-style text-xs p-1">▶</button>
                  <button class="button-style text-xs p-1">▶▶</button>
                </div>
                <div class="mt-2 h-2 bg-white border border-gray-500">
                  <div class="h-full bg-blue-700 w-1/3"></div>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span>1:23</span>
                  <span>3:45</span>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 2:
        html = `
          <div class="animate-fade-in window max-w-xs w-full mx-auto" style="${animationDelay}">
            <div class="window-header">
              <span>Music Player</span>
              <button class="text-gray-600">×</button>
            </div>
            <div class="p-3 bg-gradient-to-b from-gray-50 to-gray-100">
              <div class="bg-white rounded-md p-3 border border-gray-200">
                <div class="flex items-center justify-center space-x-2 mb-2">
                  <button class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">◀◀</button>
                  <button class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">▶</button>
                  <button class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">▶▶</button>
                </div>
                <div class="font-bold text-center truncate">${musicItem.song}</div>
                <div class="text-center text-gray-600 text-sm">${musicItem.artist}</div>
                <div class="mt-3 h-2 bg-gray-200 rounded-full">
                  <div class="h-full bg-blue-500 rounded-full w-1/2"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1:45</span>
                  <span>3:30</span>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
      
      case 3:
        html = `
          <div class="animate-fade-in window max-w-xs w-full mx-auto" style="${animationDelay}">
            <div class="p-5">
              <div class="p-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <div class="font-bold text-lg mb-1 truncate">${musicItem.song}</div>
                <div class="text-sm text-white/80 mb-4">${musicItem.artist}</div>
                <div class="flex items-center justify-center space-x-4 mb-4">
                  <button class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center">
                    <span class="transform rotate-180">▶</span>
                  </button>
                  <button class="w-14 h-14 rounded-full bg-white text-purple-600 flex items-center justify-center">
                    ▶
                  </button>
                  <button class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center">
                    ▶
                  </button>
                </div>
                <div class="h-1 bg-white/20 rounded-full">
                  <div class="h-full bg-white rounded-full w-3/5"></div>
                </div>
                <div class="flex justify-between text-xs text-white/80 mt-2">
                  <span>2:14</span>
                  <span>3:45</span>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
    }
    
    return html;
  }
});


