import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AppSettingsService {
  private configs: Object = {};

  constructor(private http: HttpClient) {}

  public getConfig(value: string) {
    // @ts-ignore
    return this.configs[value];
  }

  public async load() {
    await toPromise(
      this.http.get('./assets/app-config.json').pipe(
        map(data => {
          console.log('config json', data);
          this.configs = data;
        })
      )
    ).then(conf => {
      console.log('then config json', conf);
    });

    return this.configs;
  }
}

// @ts-ignore
const toPromise = obs =>
  new Promise((resolve, reject) => {
    obs.subscribe({
      complete: resolve,
      error: reject
    });
  });
