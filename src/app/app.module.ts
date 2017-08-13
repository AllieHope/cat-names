import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";


import {AppComponent} from "./app.component";
import {CatOverviewComponent} from "./components/cat-overview/cat-overview.component";
import {CatService} from "./services/cat-service";
import {CatDetailComponent} from "./components/cat-detail/cat-detail.component";
import {Form, FormBuilder} from "@angular/forms";

const appRoutes: Routes = [
  {
    path: "overview",
    component: CatOverviewComponent
  },
  {
    path: "",
    redirectTo: "/overview",
    pathMatch: "full"
  },
  {path: ":cat", component: CatDetailComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CatOverviewComponent,
    CatDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CatService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
