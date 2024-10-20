import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component'
import { LoadingShimmerCardComponent } from "./components/loading-shimmer-card/loading-shimmer-card.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    LoadingShimmerCardComponent
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
