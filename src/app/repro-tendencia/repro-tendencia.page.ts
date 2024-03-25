import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-repro-tendenci',
  templateUrl: './repro-tendencia.page.html',
  styleUrls: ['./repro-tendencia.page.scss'],
})
export class  ReproTendenciaPage {
  @ViewChild('progressCircle') progressCircle!: ElementRef;
  @ViewChild('progressHandle') progressHandle!: ElementRef;
  isPlaying = false;
  currentTime = 0;
  duration = 100;
  songs = [
    {
      title: 'Copa vacia',
      artist: 'Shakira y Manuel Turizo',
      src: 'https://www.cjoint.com/doc/23_08/MHrcZHLggZ0_Shakira-ManuelTurizo-CopaVac%C3%ADa-OfficialVideo-964.mp3',
    },
    {
      title: 'Beso',
      artist: 'ROSALÍA y Rauw Alejandro',
      src: 'https://www.cjoint.com/doc/23_08/MHrc0zP0gG0_ROSAL%C3%8DA-RauwAlejandro-BESO-OfficialVideo-104.mp3',
    },
    {
      title: 'hey mor',
      artist: 'Ozuna Ft. Feid',
      src: 'https://www.cjoint.com/doc/23_08/MHrc1jWvBK0_OzunaFt.Feid-HeyMor-57.mp3',
    },
    {
      title: 'arena y sal',
      artist: 'Omar Montes, Saiko y Tunvao',
      src: 'https://www.cjoint.com/doc/23_08/MHrc2beBTQ0_OmarMontes-Saiko-Tunvao-ArenaySal-OfficialVideo-285.mp3',
    },
    {
      title: 'LALA',
      artist: 'Myke Towers',
      src: 'https://www.cjoint.com/doc/23_08/MHrc2LbOGs0_MykeTowers-Lala-VideoOficial-156.mp3',
    },
    {
      title: 'El Merengue',
      artist: 'Marshmello y Manuel Turizo',
      src: 'https://www.cjoint.com/doc/23_08/MHrc3pGQDJ0_Marshmello-ManuelTurizo-ElMerengue-OfficialVideo-595.mp3',
    },
    {
      title: 'Coco Loco',
      artist: 'Maluma',
      src: 'https://www.cjoint.com/doc/23_08/MHrc30AXWR0_Maluma-COCOLOCO-LetraLyrics-785.mp3',
    },
    {
      title: 'un x100to',
      artist: 'Grupo Frontera x Bad Bunny',
      src: 'https://www.cjoint.com/doc/23_08/MHrc4y6pIK0_GrupoFronteraxBadBunny-unx100to-506.mp3',
    },
    {
      title: 'ta ok',
      artist: 'DENNIS, Karol G y Maluma ft. MC Kevin o Chris',
      src: 'https://www.cjoint.com/doc/23_08/MHrc5GNvsZ0_DENNIS-KarolG-Maluma-T%C3%A1OK-Remix-LetraLyrics-ft.MCKevinoChris-767.mp3'
    }
  ];
  currentSongIndex = 0;
  audio = new Audio();
  isShuffle = false;
  isRepeatOne = false;
  isToastOpen = false;
  showMessage = false;
  shuffledSongs = [...this.songs];
  originalSongs = [...this.songs];
  isAleatorio = false;
  showAleatorio = false;
  constructor(private route: ActivatedRoute) {
    this.loadSong();
    this.audio.play();
    this.isPlaying = true;
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
      this.duration = this.audio.duration;
      this.setProgress(this.currentTime / this.duration * 100);
    });
    this.audio.addEventListener('ended', () =>{
      this.next();
    });
  }
  ngOnInit(){
    this.route.params.subscribe((params) => {
      const index = params['index'];
      this.currentSongIndex = index;
      this.loadSong();
      this.play();
    });
  }
  ngOnDestroy(){
    this.pause();
    this.currentSongIndex = 0;
    this.loadSong;
  }
  setUpen (open: boolean){
    this.isAleatorio = open;
  }
  setOpen(open: boolean) {
    this.isToastOpen = open;
  }
  toggleRepeat(){
    this.isRepeatOne = !this.isRepeatOne;
    if (this.isRepeatOne){
      this.audio.loop = true;
    } else {
      this.audio.loop = false;
    }
    this.showMessage = !this.showMessage;
    this.isToastOpen = this.showMessage;
  }
  toggleShuffle(){
    this.isShuffle = !this.isShuffle;
    if (this.isShuffle){
      this.shuffleSongs();
    } else {
      this.songs = [...this.originalSongs];
      this.currentSongIndex = this.songs.findIndex(song => song.src === this.audio.src);
    }
    this.isAleatorio = !this.isAleatorio;
    this.showAleatorio = !this.showAleatorio;
  }
  shuffleSongs() {
    for (let i = this.shuffledSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledSongs[i], this.shuffledSongs[j]] = [this.shuffledSongs[j], this.shuffledSongs[i]];
    }
    this.songs = [...this.shuffledSongs];
    this.currentSongIndex = this.songs.findIndex(song => song.src === this.audio.src);
  }
  updateHandlePosition(percent: number) {
    const progressHandle = this.progressHandle.nativeElement;
    const radius = 90;
    const angle = percent / 100 * 360 - 0;
    const x = radius * Math.cos(angle * Math.PI / 180);
    const y = radius * Math.sin(angle * Math.PI / 180);
    progressHandle.setAttribute('cx', x + 100);
    progressHandle.setAttribute('cy', y + 100);
  }
  ngAfterViewInit() {
    const progressCircle = this.progressCircle.nativeElement;
    const radius = progressCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;
    this.updateHandlePosition(0);
  }
  setProgress(percent: number) {
    const progressCircle = this.progressCircle.nativeElement;
    const radius = progressCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - percent / 100 * circumference;
    progressCircle.style.strokeDashoffset = offset;
    if (!isNaN(percent)) {
      this.updateHandlePosition(percent);
    }
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