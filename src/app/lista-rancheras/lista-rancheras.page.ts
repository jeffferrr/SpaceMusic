import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-rancheras',
  templateUrl: './lista-rancheras.page.html',
  styleUrls: ['./lista-rancheras.page.scss'],
})
export class ListaRancherasPage {
  public canciones: any[] = [
    {
      nombre: 'El Rey',
      artistas: 'Vicente Fernández',
      imagen: 'https://pics.filmaffinity.com/El_Rey_Vicente_Fernaandez_Serie_de_TV-463854064-large.jpg',
    },
    {
      nombre: 'Volver, Volver',
      artistas: 'Pedro Infante',
      imagen: 'https://cloud10.todocoleccion.online/discos-vinilo/tc/2011/07/15/27904924.jpg',
    },
    {
      nombre: 'De Qué Manera Te Olvido',
      artistas: 'Vicente Fernández',
      imagen: 'https://m.media-amazon.com/images/I/81eTDkpbK6L._UF1000,1000_QL80_.jpg',
    },
    {
      nombre: 'El Son de la Negra',
      artistas: 'Mariachi Vargas de Tecalitlán',
      imagen: 'https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/7vKXrRBPWm/size_l.jpg',
    },
    {
      nombre: 'Por Tu Maldito Amor',
      artistas: 'Vicente Fernández',
      imagen: 'https://akamai.sscdn.co/uploadfile/letras/albuns/6/4/7/1/915731593520025.jpg',
    },
    {
      nombre: 'Cielito Lindo',
      artistas: 'Mariachi Vargas de Tecalitlán',
      imagen: 'https://images.genius.com/899c41c8742934e52305d7f686a703d6.640x640x1.jpg',
    },
    {
      nombre: 'El Mariachi Loco',
      artistas: 'Mariachi Vargas de Tecalitlán',
      imagen: 'https://m.media-amazon.com/images/I/91yb7BxxRuL._UF1000,1000_QL80_.jpg',
    },
    {
      nombre: 'El Jinete',
      artistas: 'José Alfredo Jiménez',
      imagen: 'https://is4-ssl.mzstatic.com/image/thumb/Music/ab/7b/76/mzi.ovmierku.jpg/400x400cc.jpg'
    },
    {
      nombre: 'Amor Eterno',
      artistas: 'Rocío Dúrcal',
      imagen: 'https://cdns-images.dzcdn.net/images/cover/5f8418c8a3da31ef310312fbac67700c/500x500.jpg',
    },
    {
      nombre: 'Que Bonita Es Mi Tierra',
      artistas: 'Luis Aguilar',
      imagen: 'https://www.azlyrics.com/images/albums/185/f1ec3200ffce7b72c4fd27a8e62f6f72.jpg',
    },
    {
      nombre: 'El Cascabel',
      artistas: 'Lorenzo Barcelata (interpretada por Mariachi Vargas de Tecalitlán)',
      imagen: 'https://i.ytimg.com/vi/_8pXNo_n1lw/maxresdefault.jpg',
    },
    {
      nombre: 'Si Nos Dejan',
      artistas: 'Luis Miguel',
      imagen: 'https://cdns-images.dzcdn.net/images/cover/b172a827d6428d3905366a26cf5a2ee8/500x500.jpg',
    },
    {
      nombre: 'La Bikina',
      artistas: 'Rubén Fuentes (interpretada por Mariachi Vargas de Tecalitlán)',
      imagen: 'https://c.saavncdn.com/457/Fernando-de-la-Mora-Interpreta-a-Rub-n-Fuentes-Spanish-2009-20190909210121-500x500.jpg',
    },
    {
      nombre: 'La Media Vuelta',
      artistas: 'José Alfredo Jiménez',
      imagen: 'https://e.snmc.io/i/600/s/dc526ef4007ed10abb5d6c351d5b4507/7179275/jose-alfredo-jimenez-media-vuelta-Cover-Art.jpg',
    },
    {
      nombre: 'El Sinaloense',
      artistas: 'Severiano Briseño (interpretada por Banda El Recodo)',
      imagen: 'https://cdns-images.dzcdn.net/images/artist/c1b1a95cd0d29808f6b9bc34c70709da/500x500.jpg',
    },
    {
      nombre: 'La Malagueña',
      artistas: 'Elpidio Ramírez (interpretada por Pedro Infante)',
      imagen: 'https://c.saavncdn.com/221/Pedro-Infante-y-Mariachi-Silvestre-Vargas-Spanish-2011-20220310181633-500x500.jpg'
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

  irAreproRanch(index: number) {
    this.router.navigate(['/repro-ranch', { index: index }]);
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
