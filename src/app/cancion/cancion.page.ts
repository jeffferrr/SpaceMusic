import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cancion',
  templateUrl: 'cancion.page.html',
  styleUrls: ['cancion.page.scss'],
})
export class CancionPage {
  public canciones: any[] = [
    {
      nombre: 'Te boté',
      artistas: 'Bad Bunny, Casper Mágico y Nio García',
      imagen: 'https://i.ytimg.com/vi/1CZwGM0HMlE/maxresdefault.jpg',
    },
    {
      nombre: 'Baila Morena',
      artistas: 'Hector y Tito Ft.Don omar',
      imagen: 'https://i1.sndcdn.com/artworks-BPpfzlkQGyRHr7zq-taxM9Q-t500x500.jpg',
    },
    {
      nombre: 'Criminal',
      artistas: 'Natti Natasha y Ozuna',
      imagen: 'https://i.ytimg.com/vi/VqEbCxg2bNI/maxresdefault.jpg',
    },
    {
      nombre: 'Despacito',
      artistas: 'Luis Fonsi ft. Daddy Yankee',
      imagen: 'https://images.genius.com/736a05a3bfc3ae89af3d9b4d3e6c209d.1000x1000x1.jpg',
    },
    {
      nombre: 'Gasolina',
      artistas: 'Daddy Yankee',
      imagen: 'https://images.genius.com/9248cf2fc454ecd3443359f89ffd4633.600x598x1.jpg',
    },
    {
      nombre: 'Sexy movimiento',
      artistas: 'Wisin & Yandel',
      imagen: 'https://i1.sndcdn.com/artworks-TqlEH3YRmLacLyd2-3UlrAA-t500x500.jpg',
    },
    {
      nombre: 'Ella y yo',
      artistas: 'Don Omar ft. Aventura',
      imagen: 'https://i.ytimg.com/vi/jHo_EqCeBog/maxresdefault.jpg',
    },
    {
      nombre: 'Si no le contesto',
      artistas: 'Plan B',
      imagen: 'https://images.genius.com/d02a994ed2c3804870481fb8a3d9b4d7.500x500x1.jpg',
    },
    {
      nombre: 'Hasta el amanecer',
      artistas: 'Nicky Jam',
      imagen: 'https://i.ytimg.com/vi/kkx-7fsiWgg/maxresdefault.jpg',
    },
    {
      nombre: 'Yo te lo dije',
      artistas: 'J Balvin',
      imagen: 'https://i.ytimg.com/vi/-l9FX_H7DPo/maxresdefault.jpg',
    },
    {
      nombre: '5 letras',
      artistas: 'Alex & Fido',
      imagen: 'https://i.ytimg.com/vi/OK-yFyj-og8/maxresdefault.jpg',
    },
    {
      nombre: 'Andas en mi cabeza',
      artistas: 'Chino y Nacho ft. Daddy Yankee',
      imagen: 'https://i1.sndcdn.com/artworks-000141033168-7g6occ-t500x500.jpg',
    },
    {
      nombre: 'Dura',
      artistas: 'Daddy Yankee',
      imagen: 'https://i.ytimg.com/vi/j1W5An7eo2g/maxresdefault.jpg',
    },
    {
      nombre: 'No es justo',
      artistas: 'Zion & Lennox ft. J Balvin',
      imagen: 'https://i.ytimg.com/vi/y8tZfxM7_ac/maxresdefault.jpg',
    },
    {
      nombre: 'Quiero bailar',
      artistas: 'Ivy Queen',
      imagen: 'https://i.ytimg.com/vi/1pLyokW0O4I/maxresdefault.jpg'
    },
    {
      nombre: 'Métele sazón',
      artistas: 'Tego Calderón',
      imagen: 'https://i1.sndcdn.com/artworks-G2WljZRa01Bm0dgf-2orqwA-t500x500.jpg'
    },
    {
      nombre: 'Felices los 4',
      artistas: 'Maluma',
      imagen: 'https://pics.filmaffinity.com/Maluma_Felices_los_4_Vaideo_musical-673087853-large.jpg'
    },
    {
      nombre: 'Te boté (Remix)',
      artistas: 'Nio García, Casper Mágico, Darell, Nicky Jam, Ozuna, Bad Bunny ',
      imagen: 'https://cdn.albumoftheyear.org/album/111718-te-bot-remix.jpg'
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

  irAregue(index: number) {
    this.router.navigate(['/gadi', { index: index }]);
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
