import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
  addclass: string | undefined;
  buttonShow: boolean = false;
  TopbarShow: boolean = false;
  footerClass: string | undefined;
  developerPage: boolean = false;
  hideFooter: boolean = false;
  shopPages: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Router activation
   */
  onActivate(componentReference: any) {
    this.addclass = componentReference.navClass;
    this.buttonShow = componentReference.buttonList;
    this.TopbarShow = componentReference.sliderTopbar;
    this.footerClass = componentReference.footerVariant;
    this.developerPage = componentReference.isdeveloper;
    this.hideFooter = componentReference.hideFooter;
    this.shopPages = componentReference.shopPages;
  }
}
