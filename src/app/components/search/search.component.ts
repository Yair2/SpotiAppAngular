import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artistas: any [];
  loading: boolean;
  constructor(private service: SpotifyService) { }
  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.service.getArtista(termino)
    .subscribe(data => {
      this.artistas = data;
      this.loading = false;
    });
  }

}
