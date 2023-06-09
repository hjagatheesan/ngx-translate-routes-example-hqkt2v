import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NgxTranslateRoutesModule } from 'ngx-translate-routes';
import { NotFoundComponent } from './not-found/not-found.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    MyprofileComponent,
    MyaccountComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxTranslateRoutesModule.forRoot({
      enableRouteTranslate: true,
      enableTitleTranslate: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
