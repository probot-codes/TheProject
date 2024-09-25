
      function addSlider(uid_t, pos) {
          slid_div = document.createElement('div');
          h_slid_html = document.createElement('input');
          h_slid_html.setAttribute("min", "200")
          h_slid_html.setAttribute("type", "range");
          h_slid_html.setAttribute("class", "slider")
          h_slid_html.style.display = toggleDisplayString(!sliderShowed)
          w_slid_html = h_slid_html.cloneNode()
          w_slid_html.setAttribute("max", "1875")
          w_slid_html.setAttribute("value", lastWidth)
          w_slid_html.setAttribute("id", "w_slider" + uid_t)
          h_slid_html.setAttribute("max", "948")
          h_slid_html.setAttribute("value", lastHeight)
          h_slid_html.setAttribute("id", "h_slider" + uid_t)
          h_slid_html.setAttribute("oninput", "setHeight(this)");
          w_slid_html.setAttribute("oninput", "setWidth(this)");
          h_slid_html.setAttribute("onmouseover", "setSelectedPlayer(this.id)");
          w_slid_html.setAttribute("onmouseover", "setSelectedPlayer(this.id)");
          slid_div.appendChild(w_slid_html)
          slid_div.appendChild(h_slid_html)
          return slid_div
      }
        // const lastWidth = 600;
      function addPlayer(vid, pos, isMainVideo = false) {
        const sec_html = document.createElement('div');
        sec_html.id = "sec_" + uid;
        sec_html.setAttribute("style", "flex-wrap: wrap; display: flex; justify-content: center; align-items: flex-start;");
    
        // Create the left meme video container
        const leftMemeVidDiv = document.createElement('div');
        const leftMemeVideoId = getRandomMemeVideo(); // Function to get a random meme video ID
        leftMemeVidDiv.id = 'leftMemePlayer' + uid;
        leftMemeVidDiv.style.marginRight = '10px'; // Spacing between videos
    
        // Create the main video container
        vid_html = document.createElement('div');
        vid_html.id = 'player' + uid;
    
        // Create the right meme video container
        const rightMemeVidDiv = document.createElement('div');
        const rightMemeVideoId = getRandomMemeVideo(); // Function to get a random meme video ID
        rightMemeVidDiv.id = 'rightMemePlayer' + uid;
        rightMemeVidDiv.style.marginLeft = '10px'; // Spacing between videos
    
        // Create the chat iframe
        chat_html = document.createElement("iframe");
        chat_html.referrerPolicy = "origin";
        dark_theme_tag = "&dark_theme=" + (darked ? 1 : 0);
        chat_html.src = "https://www.youtube.com/live_chat?v=" + vid + "&embed_domain=kkchengaf.github.io" + dark_theme_tag;
        chat_html.frameBorder = "0";
        chat_html.setAttribute("class", "livechatiframe");
        chat_html.style.display = toggleDisplayString(!chatShowed);
        chat_html.id = "chat" + uid;
    
        // Append meme video containers and chat to section
        sec_html.appendChild(leftMemeVidDiv);
        sec_html.appendChild(vid_html);
        sec_html.appendChild(rightMemeVidDiv);
        sec_html.appendChild(chat_html);
    
        top_sec_html = document.createElement('div');
        top_sec_html.id = "sec" + uid;
        top_sec_html.appendChild(sec_html);
        
        // Add sliders for the main and side videos
        slid_html = addSlider(uid, pos); // Slider for the main video
        top_sec_html.appendChild(slid_html);
        
        const leftSlider = addSlider(uid + 1, -1); // Slider for left meme video
        const rightSlider = addSlider(uid + 2, -1); // Slider for right meme video
        top_sec_html.appendChild(leftSlider);
        top_sec_html.appendChild(rightSlider);
    
        if (videoarea.children.length > 0 && pos != -1)
            videoarea.insertBefore(top_sec_html, videoarea.children[pos]);
        else
            videoarea.appendChild(top_sec_html);
    
        // Create main video player
        player = new YT.Player(vid_html.id, {
            height: lastHeight,
            width: lastWidth,
            videoId: vid,
            playerVars: {
                'autoplay': 1,   // Autoplay enabled
                'mute': 1,       // Start video muted (required for autoplay)
                'controls': 1    // Show player controls
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    
        // Automatically unmute after 2 seconds
        player.addEventListener('onReady', function() {
            setTimeout(() => {
                player.unMute();
            }, 2000); // Unmute after 2 seconds (2000 milliseconds)
        });
    
        // Create meme video players for left and right
        createMemePlayer(leftMemeVidDiv.id, leftMemeVideoId);
        createMemePlayer(rightMemeVidDiv.id, rightMemeVideoId);
    
        return { vid: vid, ply: player, uid: uid++ }
    }
    
    // Function to create a meme video player
    function createMemePlayer(containerId, videoId) {
        const memePlayer = new YT.Player(containerId, {
            height: lastHeight, // Let the container handle height
            width: lastWidth/1.5,  // Let the container handle width
            videoId: videoId,
            playerVars: {
                'autoplay': 1, // Autoplay enabled
                'loop': 1,     // Loop video
                'playlist': videoId, // Loop requires playlist
                'mute': 1,     // Start video muted
                'controls': 0, // Hide player controls
                'iv_load_policy': 3 // Disable annotations
            }
        });
    }
    
    // Function to get a random meme video ID from a predefined list
    function getRandomMemeVideo() {
        const memeVideos = [
            'dQw4w9WgXcQ', // Rickroll
            'J---aiyznGQ', // Cat Video
            'iSgV0H4n4Ao', // Subway Surfers gameplay
            // Add more meme video IDs as needed
        ];
        return memeVideos[Math.floor(Math.random() * memeVideos.length)];
    }
    