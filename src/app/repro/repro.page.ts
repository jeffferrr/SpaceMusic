import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-repro',
  templateUrl: './repro.page.html',
  styleUrls: ['./repro.page.scss'],
})
export class  ReproPage {
  @ViewChild('progressCircle') progressCircle!: ElementRef;
  @ViewChild('progressHandle') progressHandle!: ElementRef;
  isPlaying = false;
  currentTime = 0;
  duration = 100;
  songs = [
    {
      title: 'Canción 1',
      artist: '5to baco',
      src: 'https://www.cjoint.com/doc/23_07/MGFaUz6VmrE_No-hay-Dios-como-mi-Dios-Fernel-monroy-letra.mp3'
    },
    {
      title: 'Canción 2',
      artist: '5to baco',
      src: 'https://www.cjoint.com/doc/23_07/MGFa1tV8NfE_Su-Nombre-Guerrero-Es-Jehova-En-Vivo-.mp3'
    },
    {
      title: 'Canción 3',
      artist: '5to baco',
      src: 'https://www.cjoint.com/doc/23_07/MGFa5zIO8IE_Atr%C3%A1eme-en-pos-de-Ti-Joaqu%C3%ADn-Maga%C3%B1a-Ministerios-Ebenezer-.mp3'
    },
    {
      title: 'Canción 4',
      artist: '5to baco',
      src: 'https://www.cjoint.com/doc/23_07/MGFbaKbD6iE_A-Quien-iremos-Se%C3%B1or---Ministerio-Visi%C3%B3n-Emanuel-feat.-Marvin-Cu%C3%A1.mp3'
    },
    {
      title: 'Canción 5',
      artist: '5to baco',
      src: 'https://www.cjoint.com/doc/23_07/MGFbc5OXj5E_Mi-Anhelo---Jaime-Murrell---Letra.mp3'
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