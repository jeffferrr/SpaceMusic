import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-rap',
  templateUrl: './lista-rap.page.html',
  styleUrls: ['./lista-rap.page.scss'],
})
export class ListaRapPage {
  public canciones: any[] = [
    {
      nombre: 'Lose Yourself',
      artistas: 'Eminem',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Lose_Yourself.jpg',
    },
    {
      nombre: 'Juicy',
      artistas: 'The Notorious B.I.G.',
      imagen: 'https://i1.sndcdn.com/artworks-000385957323-7iy0kx-t500x500.jpg',
    },
    {
      nombre: 'Sicko Mode',
      artistas: 'Travis Scott',
      imagen: 'https://i1.sndcdn.com/artworks-n3MWbF5LnpyPAVnc-JMd3mQ-t500x500.jpg',
    },
    {
      nombre: 'Hotline Bling',
      artistas: 'Drake',
      imagen: 'https://realworldmusictheory.com/content/images/2021/01/6e52acce958795508a7ecbf6a3656c0190-11-drake-hotline-bling.2x.rhorizontal.w700.jpg',
    },
    {
      nombre: 'HUMBLE.',
      artistas: 'Kendrick Lamar',
      imagen: 'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2017/04/1491915248_a256d15d921244757268e797ea1320d1-616x440-111.jpg',
    },
    {
      nombre: 'Gin and Juice',
      artistas: 'Snoop Dogg',
      imagen: 'https://i1.sndcdn.com/artworks-000343697226-0j3uhl-t500x500.jpg',
    },
    {
      nombre: 'Empire State of Mind',
      artistas: 'Jay-Z ft. Alicia Keys',
      imagen: 'https://m.media-amazon.com/images/M/MV5BMjliZDBlNzktYTU4NC00M2MxLWEwYWQtN2M0ZjcxYTFlNzI2XkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_.jpg',
    },
    {
      nombre: 'Stan',
      artistas: 'Eminem ft. Dido',
      imagen: 'https://i1.sndcdn.com/artworks-000174044097-rvolwv-t500x500.jpg'
    },
    {
      nombre: 'Black Skinhead',
      artistas: 'Kanye West',
      imagen: ''
    },
    {
      nombre: "God's Plan",
      artistas: 'Drake',
      imagen: ''
    },
    {
      nombre: "N.Y. State of Mind",
      artistas: "Nas",
      imagen: ''
    },
    {
      nombre: 'Bodak Yellow',
      artistas: 'Cardi B',
      imagen: ''
    },
    {
      nombre: 'Forgot About Dre',
      artistas: 'Dr. Dre ft. Eminem',
      imagen: ''
    },
    {
      nombre: 'The Way I Am',
      artistas: 'Eminem',
      imagen: ''
    },
    {
      nombre: 'Mo Money Mo Problems',
      artistas: 'The Notorious B.I.G. ft. Puff Daddy & Mase',
      imagen: ''
    },
    {
      nombre: 'All of the Lights',
      artistas: 'Kanye West',
      imagen: ''
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

  irArap(index: number) {
    this.router.navigate(['/rap-c', { index: index }]);
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
