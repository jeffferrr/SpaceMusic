import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'cancion',
    loadChildren: () => import('./cancion/cancion.module').then(m => m.CancionPageModule)
  },
  {
    path: 'gadi',
    loadChildren: () => import('./gadi/gadi.module').then(m => m.GadiPageModule)
  },
  {
    path: 'lista-cristianas',
    loadChildren: () => import('./lista-cristianas/lista-cristianas.module').then(m => m.ListaCristianasPageModule)
  },
  {
    path: 'lista-rancheras',
    loadChildren: () => import('./lista-rancheras/lista-rancheras.module').then(m => m.ListaRancherasPageModule)
  },
  {
    path: 'lista-rap',
    loadChildren: () => import('./lista-rap/lista-rap.module').then(m => m.ListaRapPageModule)
  },
  {
    path: 'rap-c',
    loadChildren: () => import('./rap-c/rap-c.module').then(m => m.RapCPageModule)
  },
  {
    path: 'repro',
    loadChildren: () => import('./repro/repro.module').then(m => m.ReproPageModule)
  },
  {
    path: 'repro-ranch',
    loadChildren: () => import('./repro-ranch/repro-ranch.module').then(m => m.ReproRanchPageModule)
  },
  {
    path: 'ajuste',
    loadChildren: () => import('./ajuste/ajuste.module').then(m => m.AjustePageModule)
  },
  {
    path: 'tendencias',
    loadChildren: () => import('./tendencias/tendencias.module').then(m => m.TendenciasPageModule)
  },
  {
    path: 'repro-tendencia',
    loadChildren: () => import('./repro-tendencia/repro-tendencia.module').then( m => m.ReproTendenciaPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./compra/compra.module').then( m => m.CompraPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
