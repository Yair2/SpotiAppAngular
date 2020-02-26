import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
   singelNews: any[] = [];
   loading: boolean;
  constructor(service: SpotifyService) {
     this.loading = true;
     service.getNewReleases()
    .subscribe((data ) => {
      console.log(data);
      this.singelNews = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
