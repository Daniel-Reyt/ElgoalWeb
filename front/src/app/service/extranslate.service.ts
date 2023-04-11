import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root"
})
export class ExtendedTranslateService {
  public constructor(private translateService: TranslateService) {}

  public translate(path: string, alernativeText: string, params?: {}) {
    const translation: string = this.translateService.instant(path, params);
    const keyExist = translation !== path;
    if (!keyExist) return alernativeText;
    return translation;
  }
}
