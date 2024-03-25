import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.page.html',
  styleUrls: ['./tendencias.page.scss'],
})
export class Tendenciaspage {
  public canciones: any[] = [
    {
      nombre: 'Copa vacia',
      artistas: 'Shakira y Manuel Turizo',
      imagen: 'https://pics.filmaffinity.com/El_Rey_Vicente_Fernaandez_Serie_de_TV-463854064-large.jpg',
    },
    {
      nombre: 'Beso',
      artistas: 'ROSALÍA y Rauw Alejandro',
      imagen: 'https://cloud10.todocoleccion.online/discos-vinilo/tc/2011/07/15/27904924.jpg',
    },
    {
      nombre: 'Hey Mor',
      artistas: 'Ozuna Ft. Feid',
      imagen: 'https://m.media-amazon.com/images/I/81eTDkpbK6L._UF1000,1000_QL80_.jpg',
    },
    {
      nombre: 'arena y sal',
      artistas: 'Omar Montes, Saiko y Tunvao',
      imagen: 'https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/7vKXrRBPWm/size_l.jpg',
    },
    {
      nombre: 'LALA',
      artistas: 'Myke Towers',
      imagen: 'https://akamai.sscdn.co/uploadfile/letras/albuns/6/4/7/1/915731593520025.jpg',
    },
    {
      nombre: 'El Merengue',
      artistas: 'Marshmello y Manuel Turizo',
      imagen: 'https://images.genius.com/899c41c8742934e52305d7f686a703d6.640x640x1.jpg',
    },
    {
      nombre: 'Coco Loco',
      artistas: 'Maluma',
      imagen: 'https://m.media-amazon.com/images/I/91yb7BxxRuL._UF1000,1000_QL80_.jpg',
    },
    {
      nombre: 'un x100to',
      artist: 'Grupo Frontera x Bad Bunny',
      imagen: 'https://is4-ssl.mzstatic.com/image/thumb/Music/ab/7b/76/mzi.ovmierku.jpg/400x400cc.jpg'
    },
    {
      nombre: 'Ta ok',
      artistas: 'DENNIS, Karol G y Maluma ft. MC Kevin o Chris',
      imagen: 'https://cdns-images.dzcdn.net/images/cover/5f8418c8a3da31ef310312fbac67700c/500x500.jpg',
    }

    // Agrega más canciones aquí...
  ];
  filteredCanciones: any[] = [];
  searchQuery: string = '';

  constructor(private router: Router) {
    this.filteredCanciones = this.canciones;
  }

  filterSongs() {
    this.filteredCanciones = this.canciones.filter(cancion =>
      cancion.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  irAreproTendencia(index: number) {
    this.router.navigate(['/repro-tendencia', { index: index }]);
  }

  cargarMasCanciones(event: any) {
    // Aquí deberías cargar más canciones desde tu fuente de datos y agregarlas al arreglo 'canciones'.
    // Por ejemplo, puedes hacer una petición HTTP o cargar más canciones desde un servicio.

    // Simulando una carga de más canciones (reemplaza esta parte con tu lógica real).
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.canciones.push({ nombre: 'Canción ' + (this.canciones.length + 1) });
      }
      event.target.complete();

      // Si ya no hay más canciones que cargar, deshabilita el Infinite Scroll.
      if (this.canciones.length >= 50) {
        event.target.disabled = true;
      }
    }, 1000);
  }

}
