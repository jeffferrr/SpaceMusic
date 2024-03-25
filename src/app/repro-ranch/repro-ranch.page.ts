import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-repro-ranch',
  templateUrl: './repro-ranch.page.html',
  styleUrls: ['./repro-ranch.page.scss'],
})
export class ReproRanchPage {
  isPlaying = false;
  currentTime = 0;
  duration = 100;
  songs = [
    {
      title: 'El Rey',
      artist: 'Vicente Fernández',
      src: 'https://www.cjoint.com/doc/23_07/MGFazWHpGof_Vicente-Fernández---El-Rey-En-Vivo-Un-Azteca-en-el-Azteca-.mp3'
    },
    {
      title: 'Volver, Volver',
      artist: 'Pedro Infante',
      src: 'https://www.cjoint.com/doc/23_07/MGFaHzJ2tTf_Vicente-Fernu00e1ndez---Volver-Volver.mp3'
    },
    {
      title: 'De Qué Manera Te Olvido',
      artist: 'Vicente Fernández',
      src: 'https://www.cjoint.com/doc/23_07/MGFaJCLmLXf_DE-QUu00c9-MANERA-TE-OLVIDO---Vicente-Fernu00e1ndez-LETRA-.mp3'
    },
    {
      title: 'El Son de la Negra',
      artist: 'Mariachi Vargas de Tecalitlán',
      src: 'https://www.cjoint.com/doc/23_07/MGFaLSlr6Vf_Mariachi-Vargas-de-Tecalitlu00e1n---El-Son-De-La-Negra-Guadalajara-Video-Oficial-.mp3'
    },
    {
      title: 'Por Tu Maldito Amor',
      artist: 'Vicente Fernández',
      src: 'https://www.cjoint.com/doc/23_07/MGFaNPBMRGf_Vicente-Fernu00e1ndez---Por-Tu-Maldito-Amor.mp3'
    },
    {
      title: 'Cielito Lindo',
      artist: 'Mariachi Vargas de Tecalitlán',
      src: 'https://www.cjoint.com/doc/23_07/MGFaOVexv3f_MARIACHI-NUEVO-TECALITLu00c1N-CIELITO-LINDO.mp3'
    },
    {
      title: 'El Mariachi Loco',
      artist: 'Mariachi Vargas de Tecalitlán',
      src: 'https://www.cjoint.com/doc/23_07/MGFaQkv0NHf_EL-MARIACHI-LOCO-MARIACHI-VARGAS.mp3'
    },
    {
      title: 'El Jinete',
      artist: 'José Alfredo Jiménez',
      src: 'https://www.cjoint.com/doc/23_07/MGFaRyYeyOf_Don-Josu00e9-Alfredo-Jimu00e9nez-sings-.mp3'
    },
    {
      title: 'Amor Eterno',
      artist: 'Rocío Dúrcal',
      src: 'https://www.cjoint.com/doc/23_07/MGFa0w7hNAf_Rocu00edo-Du00farcal---Amor-eterno.mp3'
    },
    {
      title: 'Que Bonita Es Mi Tierra',
      artist: 'Luis Aguilar',
      src: 'https://www.cjoint.com/doc/23_07/MGFa1yz5rkf_DEMETRIO-GONZu00c1LEZ-LUIS-AGUILAR-Que-Bonita-Es-Mi-Tierra..mp3'
    },
    {
      title: 'El Cascabel',
      artist: 'Lorenzo Barcelata (interpretada por Mariachi Vargas de Tecalitlán)',
      src: 'https://www.cjoint.com/doc/23_07/MGFa4LD4Xaf_Voyager-s-Golden-Record-El-Cascabel-Lorenzo-Barcelata-and-the-Mariachi.mp3'
    },
    {
      title: 'Si Nos Dejan',
      artist: 'Luis Miguel',
      src: 'https://www.cjoint.com/doc/23_07/MGFa5UAwZqf_Si-Nos-Dejan---Luis-Miguel.mp3'
    },
    {
      title: 'La Bikina',
      artist: 'Rubén Fuentes (interpretada por Mariachi Vargas de Tecalitlán)',
      src: 'https://www.cjoint.com/doc/23_07/MGFa7xaKlIf_Luis-Miguel---.mp3'
    },
    {
      title: 'La Media Vuelta',
      artist: 'José Alfredo Jiménez',
      src: 'https://www.cjoint.com/doc/23_07/MGFbaZFIu4f_Josu00e9-Alfredo-Jimenez---La-Media-Vuelta-LETRA-.mp3'
    },
    {
      title: 'El Sinaloense',
      artist: 'Severiano Briseño (interpretada por Banda El Recodo)',
      src: 'https://www.cjoint.com/doc/23_07/MGFbckp1Emf_El-Mimoso---Julio-Preciado---El-Sinaloense---En-Vivo-Desde-Monterrey-Domo-Care.mp3'
    },
    {
      title: 'La Malagueña',
      artist: 'Elpidio Ramírez (interpretada por Pedro Infante)', src: 'https://www.cjoint.com/doc/23_07/MGFbevZwrtf_La-malaguenu0303a-Elpidio-Ramiu0301rez-Los-Calavera-en-Vivo.mp3'
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
      this.play();
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