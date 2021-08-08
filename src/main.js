import YoutubePlayer from "./youtube-player.js";

const youtubePlayer = new YoutubePlayer({
  multiplePlaying: true,
});

var s1, s2, s3, s4, s5, s6, s7, s8, s9;
s1 = s2 = s3 = s4 = s5 = s6 = s7 = s8 = s9 = 0;

youtubePlayer.loadAPI(() => {
  youtubePlayer.create({
    element: document.querySelector(".player-1"),
    playerVars: {
      //autoplay: 1,
      rel: 0,
      controls: 0,
      listType: "playlist",
      list: "PLMaW71wDgN7lB2msttEstwyUjEq6JPXCA", //UberEats 戴資穎
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s1 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s1 = 1;
        } else if (s1 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s1 = 0;
        }
      },
    },
  });

  youtubePlayer.create({
    element: document.querySelector(".player-2"),
    playerVars: {
      //autoplay: 1,
      rel: 0,
      controls: 0,
      listType: "playlist",
      list: "PLdFl_zkI9E8rxUZvZTqq4bMsYKes7ePUh", //麥當勞｜這樣的滋味真好
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s2 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s2 = 1;
        } else if (s2 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s2 = 0;
        }
      },
    },
  });

  youtubePlayer.create({
    element: document.querySelector(".player-3"),
    playerVars: {
      //autoplay: 1,
      rel: 0,
      controls: 0,
      listType: "playlist",
      list: "PLZNP9kA490sfykFqTbvc91AmJamSMmyLU", //PX 全聯經濟美學
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s3 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s3 = 1;
        } else if (s3 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s3 = 0;
        }
      },
    },
  });

  youtubePlayer.create({
    element: document.querySelector(".player-4"),
    playerVars: {
      //autoplay: 1,
      rel: 0,
      controls: 0,
      listType: "playlist",
      list: "PLN91YwxdjsrS5mweg4xshyVRY7g8JzuHt", //LINE Rangers 銀河特攻隊
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s4 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s4 = 1;
        } else if (s4 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s4 = 0;
        }
      },
    },
  });

  youtubePlayer.create({
    element: document.querySelector(".player-5"),
    playerVars: {
      rel: 0,
      //autoplay: 1,
      controls: 0,
      listType: "playlist",
      list: "PLJ2kZ0h7yyR5XShfIwAuDORwCbw5bXWSR", //SK-ll STUDIO
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s5 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s5 = 1;
        } else if (s5 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s5 = 0;
        }
      },
    },
  });

  youtubePlayer.create({
    element: document.querySelector(".player-6"),
    playerVars: {
      //autoplay: 1,
      rel: 0,
      controls: 0,
      listType: "playlist",
      list: "PLGZUaAgtR-bympjY1s8PQhnvCin8uICOr", //Taycan Meets Stars
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s6 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s6 = 1;
        } else if (s6 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s6 = 0;
        }
      },
    },
  });

  youtubePlayer.create({
    element: document.querySelector(".player-7"),
    playerVars: {
      //autoplay: 1,
      rel: 0,
      controls: 0,
      listType: "playlist",
      list: "PLfPYYNRetSN-2z1-DVcdFDMvUg-7R6T9P", //Grammarly - Helping You Connect
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s7 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s7 = 1;
        } else if (s7 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s7 = 0;
        }
      },
    },
  });

  youtubePlayer.create({
    element: document.querySelector(".player-8"),
    playerVars: {
      //autoplay: 1,
      rel: 0,
      controls: 0,
      listType: "playlist",
      list: "PLCDAEE09E07F7E6D5", //金牌啤酒
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s8 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s8 = 1;
        } else if (s8 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s8 = 0;
        }
      },
    },
  });

  youtubePlayer.create({
    element: document.querySelector(".player-9"),
    playerVars: {
      //autoplay: 1,
      rel: 0,
      controls: 0,
      listType: "playlist",
      list: "PLgIWT6buF2l18bNyhK5hj4n-dX83HUQCu", //CITY CAFE
    },
    events: {
      onPosterClick: (e, player) => {
        // Poster is clicked
        if (s9 == 0) {
          e.target.style.display = "none";
          //player.setVolume(20);
          player.playVideo();
          s9 = 1;
        } else if (s9 == 1) {
          e.target.style.display = "block";
          //player.setVolume(20);
          player.pauseVideo();
          s9 = 0;
        }
      },
    },
  });
});
