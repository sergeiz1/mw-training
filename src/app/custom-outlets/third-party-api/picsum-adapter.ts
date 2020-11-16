import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {PicsumImage} from './picsum-image';

@Injectable({
  providedIn: 'root'
})
export class PicsumAdapter {

  constructor(private httpClient: HttpClient) {}

  getImage(id: string): Observable<PicsumImage> {
    const url = `https://picsum.photos/id/${id}/info`;
    return this.httpClient.get<PicsumImage>(url).pipe(
      catchError((error) => of(null))
    );
  }
}
