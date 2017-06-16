import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = []

  urlBusqueda = 'https://api.spotify.com/v1/search'
  urlArtista = 'https://api.spotify.com/v1/artists'
  constructor(private http: Http) { }

  getArtistas( termino: string ) {

    const headers =  new Headers();
    headers.append('authorization', 'Bearer BQC0aeFc34CjpBkRMQtT9kzFBzEURb9dg89_M2Kgcwk3l8-sw1sC7xHdkYqkiGG3gsMAJZ7Yy0otW1rzg7Abkw')

    const query = `?q=${ termino }&type=artist`;
    const url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
              .map ( res => {
                // console.log(res.json().artists)

                this.artistas = res.json().artists.items

              } )

  }

  getArtista( id: string ) {

    const headers =  new Headers();
    headers.append('authorization', 'Bearer BQBtblU_w0ap3KRn_bl2Iu41ekPLIcgVGZXCARZvsXcWtPCoGhGDwdN9yzDcxkjC_B7TjujcgnOtDg9tviQWDg')

    const query = `/${ id }`;
    const url = this.urlArtista + query;

    return this.http.get( url, { headers } )
              .map ( res => {
                console.log(res.json())

                return res.json()

              } )

  }

}
