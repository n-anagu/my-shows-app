import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowsModule } from './shows/shows.module';
import { ShowsRoutingModule } from './shows/shows-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShowsModule,
    ShowsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
