import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-caroussel",
  templateUrl: "./caroussel.component.html",
  styleUrls: ["./caroussel.component.scss"],
})
export class CarousselComponent implements OnInit {
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      }
    },
    nav: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
