const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const clickListSong = $('.list-song')
const navVerticalHeight = $('.nav-vertical-left')
const disFT = $('.footer');
const btnPlayFT = $('.node-play-hiden');
const audio = $('#audio');
const btnPause = $('.icon-pause');
const btnPlay = $('.icon-play');
const btnNextSong = $('.icon-next');
const btnBackSong = $('.icon-backward');
const myProgress = $('#myProgress');
const progress_bar = $('.ft-center .ct-wrap-bar-duration .bar-duration .progress-bar');
const wrapProgress = $('.bar-duration');
const btnRepeat = $('.icon-repeat');
const btnRandomSong = $('.icon-shuffle');
const clIconRP = $('.icon-repeat i');
const clIconRD = $('.icon-shuffle i');

const obj = {
    currentIndex: 0,
    isRandom: false,
    isRepeat: false,
    isStatusSong: false,
    isLoop: false,
  
    listSongs: [
      {
        name: "Mashup Cung danh thoi",
        singer: "Duc Phuc, Erik, HoaMinzy",
        path: "./audio/song1.mp3",
        pathImg: 'https://i1.sndcdn.com/artworks-JBRUdufEmz7H0bwR-uu2oiQ-t500x500.jpg',
        timeSong: ''
      },
      {
        name: "Duong toi cho em ve",
        singer: "Bui Truong Linh",
        path: "./audio/song2.mp3",
        pathImg: 'https://avatar-ex-swe.nixcdn.com/song/2020/07/02/5/d/c/9/1593687560557_640.jpg',
        timeSong: ''
      },
      {
        name: "Thich em hoi nhieu",
        singer: "Wren Evans x Freak D",
        path: "./audio/song3.mp3",
        pathImg: 'https://o.rada.vn/data/image/2021/06/21/loi-bai-hat-thich-em-hoi-nhieu-700.jpg',
        timeSong: ''
      },
      {
        name: "Tro Dua",
        singer: "Quang Đăng Trần x Dino",
        path: "./audio/song4.mp3",
        pathImg: 'https://avatar-ex-swe.nixcdn.com/song/share/2020/04/20/b/a/3/c/1587354742718.jpg',
        timeSong: ''
      },
      {
        name: "Bo em vao ba lo",
        singer: "Tân Trần x Freak D",
        path: "./audio/song5.mp3",
        pathImg: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/2/d/1/92d1087e7b366b4cf7d1539d37e5f610.jpg",
        timeSong: ''
      },
      {
        name: 'On My Way',
        singer: 'LiLy',
        path: "./audio/song6.mp3",
        pathImg: 'https://avatar-ex-swe.nixcdn.com/song/2021/04/23/e/1/4/7/1619160025485_640.jpg',
        timeSong: ''
      },
      {
        name: 'That Girl',
        singer: 'Olly Murs s',
        path: "./audio/song7.mp3",
        pathImg: 'https://www.voca.vn/assets/img/news/that%20girl-1545280005.jpg',
        timeSong: ''
      },
      {
        name: 'Anh The Day',
        singer: 'Thanh Hung',
        path: "./audio/song8.mp3",
        pathImg: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/9/4/d/a94d404a69d40e168ca844460c729aa5.jpg',
        timeSong: ''
      },
      {
        name: 'Beautiful in white',
        singer: 'Westlife ',
        path: "./audio/song9.mp3",
        pathImg: 'https://images.genius.com/112bda3f1ad54c9717ed853a45b267bb.600x600x1.jpg',
        timeSong: ''
      },
      {
        name: 'Em Muon Lai Chi',
        singer: 'Binh Gold',
        path: "./audio/song10.mp3",
        pathImg: 'https://i1.sndcdn.com/artworks-000646512973-1941kp-t500x500.jpg',
        timeSong: ''
      },
      {
        name: 'Love Yourself',
        singer: 'Justin Beiber',
        path: "./audio/song11.mp3",
        pathImg: 'https://avatar-ex-swe.nixcdn.com/song/2021/04/23/e/1/4/7/1619160025485_640.jpg',
        timeSong: ''
      },
      {
        name: 'Nguoi em co do',
        singer: 'Rum x Daa',
        path: "./audio/song12.mp3",
        pathImg: 'https://i.scdn.co/image/ab67616d0000b27303df497347697182cc4aa908',
        timeSong: ''
      },
      {
        name: 'To The Moon',
        singer: 'holligan',
        path: "./audio/song13.mp3",
        pathImg: 'https://avatar-ex-swe.nixcdn.com/song/2020/07/02/5/d/c/9/1593664626011_640.jpg',
        timeSong: ''
      },
      {
        name: '',
        singer: 'Soobin Hoang Son',
        path: "./audio/song14.mp3",
        pathImg: 'https://avatar-ex-swe.nixcdn.com/song/2018/04/10/d/c/7/b/1523334524077_640.jpg',
        timeSong: ''
      },
      {
        name: '',
        singer: 'Taylor Swift',
        path: "./audio/lover.mp3",
        pathImg: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png',
        timeSong: ''
      },
      {
        name: 'De Yang Gatal Sa (DESA Remix)',
        singer: 'Aldo Bz',
        path: "./audio/song15.mp3",
        pathImg: 'https://i.ytimg.com/vi/sGU0CHrSFT4/maxresdefault.jpg',
        timeSong: ''
      },
      {
        name: 'có hẹn với thanh xuân',
        singer: 'MONSTAR ',
        path: "./audio/song16.mp3",
        pathImg: 'https://i.ytimg.com/vi/vpRi8S6uXAg/maxresdefault.jpg',
        timeSong: ''
      },
      {
        name: 'Sau tất cả',
        singer: 'Erik',
        path: "./audio/song17.mp3",
        pathImg: 'https://o.rada.vn/data/image/2018/09/18/loi-bai-hat-sau-tat-ca.jpg',
        timeSong: ''
      },
      {
        name: 'Lemon tree',
        singer: 'Gustixa',
        path: "./audio/song18.mp3",
        pathImg: 'https://i.ytimg.com/vi/VaExN-H5vCc/maxresdefault.jpg',
        timeSong: ''
      },
      {
        name: 'Não cá vàng',
        singer: 'OnclyC ft Lou Hoàng',
        path: "./audio/song19.mp3",
        pathImg: 'https://i.scdn.co/image/ab67616d0000b2738387f7e76a9e7db32c69a31a',
        timeSong: ''
      },
      {
        name: 'Phượng buồn Remix',
        singer: 'H2K',
        path: "./audio/song20.mp3",
        pathImg: 'https://i.scdn.co/image/ab67616d0000b273c0d3a33067a8390d0806bf4a',
        timeSong: ''
      },
      {
        name: 'Tát nước đầu đình',
        singer: 'Lynk Lee ft Binz',
        path: "./audio/song21.mp3",
        pathImg: 'https://i.ytimg.com/vi/qHwpfkR1zT8/maxresdefault.jpg',
        timeSong: ''
      },
    ],
  
    render: function() {
      const htmls = this.listSongs.map((song, index) => {
        return `
          <div class="container-songs ${index === this.currentIndex ? 'active-btn' : ''}" data-index="${index}">
            <div class="song">
              <div class="song-left"> 
                  <div class="song-left-image">
                      <figure class="is-40x40">
                          <img src="${song.pathImg}">
                      </figure>
                  </div>
                  <button class="is-40x40 node-play-hiden">
                      <i class='fas fa-play'></i>
                  </button>
                  <button id="hahamove" class="is-40x40 icon-move-play">
                    <img src="./img/icon-move-play.gif">
                  </button>
                  <div class="song-infor">
                    <div class="song-infor-name">
                        ${song.name}
                    </div>
                    <div class="song-infor-singer">
                        ${song.singer}
                    </div>
                  </div>
              </div>
              <div class="song-center">
                  <a href="#">${song.singer}</a>
              </div>
              <div class="song-right">
                  <div class="icon-hover">
                     <button class="circle-36x36 icon-mic">
                         <i class='fas fa-microphone'></i>
                      </button>
                  </div>
                  <div class="icon-no-hover">
                      <button class="circle-36x36 icon-heart">
                          <i class='fas fa-heart' style="color: violet;"></i>
                      </button>
                      <button class="circle-36x36 icon-more">
                          <i class='fas fa-ellipsis-h'></i>
                      </button>
                  </div>
              </div>
            </div>
          </div>
        `;
      });
      $(".list-song").innerHTML = htmls.join("");
    },

    defineProperties: function () {
      Object.defineProperty(this, 'currentSong', {
        get: function () {
          return this.listSongs[this.currentIndex];
        },
      });
    },

    loadCurrentSong: function() {
      const nameSong = $('.song-left .song-infor .song-infor-name')
      const nameSinger = $('.song-left .song-infor .song-infor-singer')
      const img = $('.song-left .song-left-image .is-40x40 img')
  
      nameSong.textContent = this.currentSong.name
      nameSinger.textContent = this.currentSong.singer
      img.src = this.currentSong.pathImg
    },

    renderImg: function() {
      const htmls = this.listSongs.map((img) => {
        return `
          <li class="image-of-song fade-1">
            <figure>
              <img src="${img.pathImg}">
            </figure>
          </li>
        `
      });
      $(".list-image-of-song").innerHTML = htmls.join("");
    },

    renderInforSong: function() {
      const htmls = this.listSongs.map((infor) => {
        return `
          <div class="song-infor">
            <div class="song-infor-name">
              ${infor.name}
            </div>
            <div class="song-infor-singer">
              ${infor.singer}
            </div>
          </div>
        `
      });
      $(".ft-left").innerHTML = htmls.join("");
    },

    loadImg: function() {
      const img = ('.list-image-of-song .image-of-song .fade-1 figure img')

      img.src = this.currentSong.pathImg
    },

    loadImgFT: function() {
      const img = $('.footer .abc-footer .wrap-ft-left .ft-left .ft-song-left-image figure img')

      img.src = this.currentSong.pathImg
    },

    loadSongFT: function() {
      const nameft = $('.ft-left .song-infor .song-infor-name')
      const singetft = $('.ft-left .song-infor .song-infor-singer')

      nameft.innerHTML = this.currentSong.name
      singetft.innerHTML = this.currentSong.singer
      audio.src = this.currentSong.path
      console.log(this.currentSong.path)
    },

    nextSong: function() {
      this.currentIndex++;
        if(this.currentIndex >= this.listSongs.length) {
          this.currentIndex = 0;
        }
        this.loadSongFT();
        this.loadImgFT();
    },
  
    backSong: function() {
      this.currentIndex--;
        if(this.currentIndex < 0) {
          this.currentIndex = this.listSongs.length - 1;
        }
        this.loadSongFT();
        this.loadImgFT();
    },

    playRanDomSong: function() {
      let newIndex; 
        do {
          newIndex = Math.floor(Math.random() * this.listSongs.length);
        } while(newIndex === this.currentIndex);
  
        this.currentIndex = newIndex;
        this.loadSongFT();
        this.loadImgFT();
    },

    updateTime: function() {
      const timeSong = $('.ft-center .ct-wrap-bar-duration .timeline-right');
      timeSong.innerHTML = Math.floor(audio.duration);
    },

    handEvent: function() {

      const _this = this;
      //height: calc(100% - 90px);

      clickListSong.onclick = function(e) {
        const songNode = e.target.closest('.container-songs:not(.bg-active)')
        const songNode2 = e.target.closest('.node-play-hiden')
        
       

              //rgb(71, 67, 73)
            if(songNode && songNode2) {
              disFT.style.display = "block";
              var offsetHeight = $('.footer').offsetHeight;
              let temp1 = "calc" + "(100%" + " - " + offsetHeight + "px)";
              navVerticalHeight.style.height = temp1;
              _this.currentIndex = Number(songNode.dataset.index)
              _this.loadSongFT()
              _this.loadImgFT()
              _this.render()
              btnPlay.click()
              const testAddClass = $('.active-btn');
              testAddClass.classList.add('bg-active')
            } else {
              if(_this.isStatusSong) {
                btnPause.click()
                _this.isStatusSong = false;
              } else {
                btnPlay.click()
                _this.isStatusSong = true;
              }
              
            }
      }

      btnPause.onclick = function() {
        audio.pause()
        btnPlay.style.display = "flex";
        btnPause.style.display = "none";
        _this.isStatusSong = false;
      }

      btnPlay.onclick = function() {
        audio.play()
        btnPause.style.display = "flex";
        btnPlay.style.display = "none";
        _this.isStatusSong = true;
      }

      btnNextSong.onclick = function() {
        if(_this.isRandom) {
          _this.playRanDomSong();
        } else {
          _this.nextSong();
        }
        btnPause.style.display = "flex";
        btnPlay.style.display = "none";
        audio.play();
        _this.render();
      }

      btnBackSong.onclick = function() {
        if(_this.isRandom) {
          _this.playRanDomSong();
        } else {
          _this.backSong();
        }
        btnPause.style.display = "flex";
        btnPlay.style.display = "none";
        audio.play();
        _this.render();
      }

      audio.onended = function() {
        if(_this.isRepeat) {
          audio.play();
        } else {
          btnNextSong.click();
        }
        btnPause.style.display = "flex";
        btnPlay.style.display = "none";
      }

      audio.ontimeupdate = function(e) {
        if(audio.duration) {
          let progress = (audio.currentTime / audio.duration * 100);
          const timeSongRight = $('.ft-center .ct-wrap-bar-duration .timeline-right');
          const timeSongLeft = $('.ft-center .ct-wrap-bar-duration .timeline-left');

          myProgress.value = progress;
          console.log(progress)
          timeSongRight.innerHTML = progressTime(audio.duration)
          timeSongLeft.innerHTML = progressTime(audio.currentTime);
          myProgress.style.width = `${progress}%`;
        }
      }

      wrapProgress.onclick = function(e) {
        if(audio.duration) {
          audio.currentTime = (e.offsetX / wrapProgress.clientWidth) * audio.duration;
          btnPlay.click();
        }
      }

      // cách viết nhanh gọn khó hiểu
      // _this.isLoop = !_this.isLoop
      // btnRepeat.classList.toggle('active', _this.loadCurrentSong)

      btnRepeat.onclick = function() {
        if(_this.isLoop) {
          audio.loop = false;
          _this.isLoop = false;
          _this.isLoop
          clIconRP.style.color = "#fff";
        } else {
          audio.loop = true;
          _this.isLoop = true;
          clIconRP.style.color = "purple";
        }
      }

      btnRandomSong.onclick = function() {
        _this.isRandom = !_this.isRandom
        clIconRD.classList.toggle('active-color-icon', _this.isRandom)
      }

    },

    start: function() {
      this.defineProperties();

      this.handEvent();

      this.loadCurrentSong();

      this.loadImg();

      this.loadSongFT();

      this.render();

      this.renderImg();

    },
  
  };
  
  obj.start();

  function progressTime(time) {
    const phut = Math.floor(time / 60);
    const giay = Math.floor(time - phut * 60);
    return `${phut < 10 ? '0' + phut : phut}:${giay < 10 ? '0' + giay : giay}`;
  }