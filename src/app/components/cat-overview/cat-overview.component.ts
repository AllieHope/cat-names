import {Component, OnInit} from "@angular/core";
import {CatService} from "../../services/cat-service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: "cat-overview",
  templateUrl: "./cat-overview.component.html",
  styleUrls: ["./cat-overview.component.scss"]
})
export class CatOverviewComponent implements OnInit {
  cats$: Observable<string[]>;
  cats: string[];

  constructor(private catService: CatService) {
  }

  ngOnInit() {
    this.cats$ = this.catService.getCats();

    this.cats$.subscribe(cats => {
      this.cats = Array.from(cats).sort();
    });
  }

}
