import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-cristianas',
  templateUrl: './lista-cristianas.page.html',
  styleUrls: ['./lista-cristianas.page.scss'],
})
export class ListaCristianasPage implements OnInit {
  public canciones: any[] = [
    {
      nombre: 'No hay dios como mi Dios',
      artistas: '',
      imagen: 'https://m.media-amazon.com/images/I/61t-LcZUyGS._UXNaN_FMjpg_QL85_.jpg',
    },
    {
      nombre: 'Su nombre guerrero es Jehova',
      artistas: '',
      imagen: 'https://i.ytimg.com/vi/jgiNFm8SSYw/maxresdefault.jpg',
    },
    {
      nombre: 'Atraeme señor en pos de ti',
      artistas: '',
      imagen: 'https://i.ytimg.com/vi/eU1f-D-z_Qs/mqdefault.jpg',
    },
    {
      nombre: 'A quien iremos',
      artistas: '',
      imagen: 'https://hugolandolfi.com/wp-content/uploads/2021/11/a-quien-iremos.jpg',
    },
    {
      nombre: 'Mi Anhelo Es Jesus',
      artistas: '',
      imagen: 'https://i1.sndcdn.com/artworks-000078034468-6gghlb-t500x500.jpg',
    },
    {
      nombre: 'Here I Am to Worship',
      artistas: 'Tim Hughes',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Here_I_Am_to_Worship.jpg',
    },
    {
      nombre: 'I Can Only Imagine',
      artistas: 'MercyMe',
      imagen: 'https://mercyme.shop/wp-content/uploads/sites/7/2018/09/MM_ICOI_550.png',
    },
    {
      nombre: 'Great Are You Lord',
      artistas: 'All Sons & Daughters',
      imagen: 'https://images.genius.com/c0e9247f7b6446d50ca59b905324b8e8.500x500x1.jpg'
    },
    {
      nombre: 'Amazing Grace',
      artistas: 'Chris Tomlin',
      imagen: 'https://mtracks.azureedge.net/public/images/albums/568/50.jpg',
    },
    {
      nombre: 'What A Beautiful Name',
      artistas: 'Hillsong Worship',
      imagen: 'https://i.ytimg.com/vi/r5L6QlAH3L4/maxresdefault.jpg',
    },
    {
      nombre: 'Reckless Love',
      artistas: 'Cory Asbury',
      imagen: 'https://i.ytimg.com/vi/yynYrJw8o44/maxresdefault.jpg',
    },
    {
      nombre: 'Good Good Father',
      artistas: 'Chris Tomlin',
      imagen: 'https://i.ytimg.com/vi/06ZN4wC-ono/maxresdefault.jpg',
    },
    {
      nombre: 'How Great Is Our God',
      artistas: 'Chris Tomlin',
      imagen: 'https://www.louderthanthemusic.com/images/doc/51brljdzgbl.jpg',
    },
    {
      nombre: 'In Christ Alone',
      artistas: 'Keith & Kristyn Getty',
      imagen: 'https://i.ytimg.com/vi/hpe110ZiUik/maxresdefault.jpg',
    },
    {
      nombre: '10,000 Reasons (Bless the Lord)',
      artistas: 'Matt Redman',
      imagen: 'https://mtracks.azureedge.net/public/images/albums/284/87.jpg',
    },
    {
      nombre: 'Oceans (Where Feet May Fail)',
      artistas: 'Hillsong United',
      imagen: 'https://i.ytimg.com/vi/PfpEefKiG2I/sddefault.jpg',
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



  ngOnInit() {
    // Al inicio, mostrar todas las canciones
  }


  irARepro(index: number) {
    this.router.navigate(['/repro', { index: index }]);
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
