import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../app.config";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UploadImageService {
  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any
  ) {}

  upload(image: any) {
    const url = `${this.config.imageapi}/upload?key=0b7f1a50288820e9fa8248fa27c30438`;
    const formData = new FormData();
    formData.append("image", image);
    return this.httpClient.post(url, formData);
  }
}
