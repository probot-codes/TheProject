      var videoids = [];    //a list of vid
      var containers = [];  // a list of object, (vid, player, hid, st)
      var stmap = {}  //a map from vid to stream actual start time
      var uid = 0;
      var muted = false;
      var played = false;
      var darked = false;
      var sliderShowed = false;
      var chatShowed = false;
      var aspectRatioLocked = true
      var lastHeight = 400;
      var lastWidth = 600;
      var videoarea = document.getElementById("videoarea")
      var urlsarea = document.getElementById("urls")
      var selectedPlayer = null;
      var selectedPlayerHTML = null;
      var lastModifiedPlayerVid = null;
      var toggleDisplayString = (displayed) => (displayed?"none":"block")

      // List of pre-selected meme videos
      var memeVideos = [
            'GBIIQ0kP15E',
            'eZTS4cL4Euo',
            '7ghSziUQnhs',
            // Add more meme video IDs
      ];
      
