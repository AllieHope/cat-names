import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {CatOverviewComponent} from "./components/cat-overview/cat-overview.component";
import {CatService} from "./services/cat-service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    CatOverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
