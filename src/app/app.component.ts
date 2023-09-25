/*
 * File: c:\Users\tonyw\Desktop\MolexWorks NG\ng-molex-works\src\app\app.component.ts
 * Project: c:\Users\tonyw\Desktop\IOT_Panel\ng-molex-works
 * Created Date: Sunday August 13th 2023
 * Author: Tony Wiedman
 * -----
 * Last Modified: Mon September 25th 2023 2:32:37 
 * Modified By: Tony Wiedman
 * -----
 * Copyright (c) 2023 Tone Web Design, Molex
 */
import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "iot";
  @ViewChild("drawer") drawer!: MatDrawer;
  isDesktop: boolean = true;

  get isDrawerOpened(): boolean {
    return this.drawer ? this.drawer.opened : this.isDesktop;
  }
  
  set isDrawerOpened(value: boolean) {
    if (this.drawer) {
      this.drawer.opened = value;
    }
  }

  get contentClass(): string {
    return this.isDesktop || this.isDrawerOpened ? '' : 'mobile-nav-active';
  }
  
  get isMobileNavOpened(): boolean {
    return !this.isDesktop && this.isDrawerOpened;
  }
  
  constructor() {}

  ngOnInit() {
    this.isDesktop = window.innerWidth >= 1024;
    window.addEventListener("resize", this.onResize);
  }

  ngOnDestroy() {
    window.removeEventListener("resize", this.onResize);
  }

  toggleDrawer(): void {
    this.isDrawerOpened = !this.isDrawerOpened;
  }

  closeMobile(): void {
    if (!this.isDesktop) {
      this.isDrawerOpened = false;
    }
  }

  onResize = (): void => {
    this.isDesktop = window.innerWidth >= 1024;
    this.isDrawerOpened = this.isDesktop;
  };
}
