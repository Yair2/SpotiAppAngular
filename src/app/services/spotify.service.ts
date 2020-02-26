import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }
  getQuery(query: string) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization : 'Bearer BQChCt-rNVo6505Mr6KUrcNg-SrbsyqBAiEmebxd2dWs56gzrmjvE1VZfDmH37DEnfxjfduTFU_Q92rRUHOkPwiS6d9aIoV_ykBo7sZBsgAHr4-ATjC4kac9vaVehGp2IvjACfIWkbVH7KpS'
    });
    return  this.http.get('https://api.spotify.com/v1/' + query, { headers } );
  }
  getNewReleases() {
      return this.getQuery('browse/new-releases?limit=50')
      .pipe( map ((data: any) => data.albums.items));
  }

  getArtista(termino: string ) {
      return this.getQuery(`search?q=${ termino }&type=artist&limit=50`)
      .pipe(map ((data: any) => data.artists.items));
  }
}
