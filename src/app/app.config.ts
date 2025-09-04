import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslationObject } from '@ngx-translate/core';
import { IMAGE_CONFIG } from '@angular/common';
import { Observable } from 'rxjs';

import { routes } from './app.routes';

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
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }) ,
      //add hashing to the routes
      withHashLocation()
    ),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        fallbackLang: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
        placeholderResolution: 30
      }
    }
  ]
};
