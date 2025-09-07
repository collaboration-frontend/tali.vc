import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
} from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  TranslateLoader,
  TranslateModule,
  TranslationObject,
} from "@ngx-translate/core";
import { Observable } from "rxjs";

import { routes } from "./app.routes";

class AssetTranslateLoader implements TranslateLoader {
  constructor(private httpClient: HttpClient) {}

  getTranslation(lang: string): Observable<TranslationObject> {
    return this.httpClient.get<TranslationObject>(`assets/i18n/${lang}.json`);
  }
}

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new AssetTranslateLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      }),
      //add hashing to the routes
      /* `withHashLocation()` is a function that configures the router to use hash-based routing in
      Angular applications. Hash-based routing involves adding a hash symbol (#) to the URL,
      followed by the route path. This approach is commonly used to support older browsers or server
      configurations that do not handle HTML5 pushState properly. */
      withHashLocation()
    ),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: "en",
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
