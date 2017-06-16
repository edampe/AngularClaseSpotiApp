import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = []

  urlBusqueda = 'https://api.spotify.com/v1/search'
  urlArtista = 'https://api.spotify.com/v1/artists'
  token = 'BQC2Xziy7gNKvYFW1VKXM4WzhcRoP2RLX2PbL9KWaF3vHIItWsgBeoWtIToW2UyKC4nzy6XAGE9QaM0Rbu-ywA'

  constructor(private http: Http) { }

  getArtistas( termino: string ) {

    const headers =  new Headers();
    headers.append('authorization', `Bearer ${ this.token }`)

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
    headers.append('authorization', `Bearer ${ this.token }`)

    const query = `/${ id }`;
    const url = this.urlArtista + query;

    return this.http.get( url, { headers } )
              .map ( res => {
                console.log(res.json())

                return res.json()

              } )

  }

}
