import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Http} from "@angular/http";

export interface Cat {
  name: string,
  description?: string
}

@Injectable()
export class CatService {

  constructor(private http: Http) {
  }

  getCats(): Observable<string[]> {
    return this.http.get("./assets/cats.json")
      .map((res: any) => res.json());
  }

  saveCatDetails(cat: Cat) {
    // this is where the cat descriptions api endpoint would go
    return this.http.post("/endpoint", cat);
  }

}
