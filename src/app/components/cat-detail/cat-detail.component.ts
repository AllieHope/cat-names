import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: "cat-detail",
  templateUrl: "./cat-detail.component.html",
  styleUrls: ["./cat-detail.component.scss"]
})
export class CatDetailComponent implements OnInit {
  catName: string;
  catDetailForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => params.getAll("cat"))
      .subscribe((cat: string) => this.catName = cat);

  }

}
