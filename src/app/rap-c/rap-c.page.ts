import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-rap-c',
  templateUrl: './rap-c.page.html',
  styleUrls: ['./rap-c.page.scss'],
})
export class RapCPage implements OnInit {
  isPlaying = false;
  currentTime = 0;
  duration = 100;
  songs = [
    {
      title: 'Lose Yourself',
      artist: 'Eminem',
      src: 'https://www.cjoint.com/doc/23_07/MGFdrxiRW5S_Eminem-Lose-Yourself.mp3'
    },
    {
      title: 'Juicy',
      artist: 'The Notorious B.I.G.',
      src: 'https://www.cjoint.com/doc/23_07/MGFdukhMwSS_The-Notorious-BIG-Juicy.mp3'
    },
    {
      title: 'Sicko Mode',
      artist: 'Travis Scott',
      src: 'https://www.cjoint.com/doc/23_07/MGFdvSFXB4S_Travis-Scott-SICKO-MODE.mp3'
    },
    {
      title: 'Hotline Bling',
      artist: 'Drake',
      src: 'https://www.cjoint.com/doc/23_07/MGFdxiimA5S_Drake-Hotline-Bling.mp3'
    },
    {
      title: 'HUMBLE.',
      artist: 'Kendrick Lamar',
      src: 'https://www.cjoint.com/doc/23_07/MGFdyA8XeDS_HUMBLE-Kendrick-Lamar.mp3'
    },
    {
      title: 'Gin and Juice',
      artist: 'Snoop Dogg',
      src: 'https://www.cjoint.com/doc/23_07/MGFdz0IetDS_Snoop-Dogg-Gin-And-Juice-feat-Dat-Nigga-Daz.mp3'
    },
    {
      title: 'Empire State of Mind',
      artist: 'Jay-Z ft. Alicia Keys',
      src: 'https://www.cjoint.com/doc/23_07/MGFdBizVdNS_JAYZ-Empire-State-Of-Mind-Feat-Alicia-Keys.mp3'
    },
    {
      title: 'Stan',
      artist: 'Eminem ft. Dido',
      src: 'https://www.cjoint.com/doc/23_07/MGFdCCmCt6S_Eminem-Stan-Lyrics-ft-Dido.mp3'
    }
  ];
  currentSongIndex = 0;
  audio = new Audio();

  constructor(private route: ActivatedRoute) {
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
      this.duration = this.audio.duration;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const index = params['index'];
      this.currentSongIndex = index;
      this.loadSong();
    });
  }

  loadSong() {
    const song = this.songs[this.currentSongIndex];
    this.audio.src = song.src;
    this.audio.load();
  }

  togglePlay() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    this.isPlaying = !this.isPlaying;
  }

  previous() {
    this.currentSongIndex--;
    if (this.currentSongIndex < 0) {
      this.currentSongIndex = this.songs.length - 1;
    }
    this.loadSong();
    this.play();
  }

  next() {
    this.currentSongIndex++;
    if (this.currentSongIndex >= this.songs.length) {
      this.currentSongIndex = 0;
    }
    this.loadSong();
    this.play();
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }
}