import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.title = '';
        this.sidebarClicked = new EventEmitter();
    }
    toggleSidebar() {
        this.sidebarClicked.emit(true);
    }
};
__decorate([
    Input()
], NavbarComponent.prototype, "title", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "sidebarClicked", void 0);
NavbarComponent = __decorate([
    Component({
        selector: 'ak-navbar',
        template: "<ng-container>\r\n  <div class=\"nav acm-nav\">\r\n    <div class=\"header-container\">\r\n      <ak-icon-hamburger\r\n        class=\"nav-icon\"\r\n        (click)=\"toggleSidebar()\"\r\n      ></ak-icon-hamburger>\r\n      <div class=\"logo-container\">\r\n        <a href=\"#home\">{{ title }}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-container\">\r\n      <ak-icon-bell></ak-icon-bell>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
        styles: ["body{background-color:#edf1f7}.nav{display:flex;justify-content:space-between;max-width:1920px;margin-left:auto;margin-right:auto;width:100%}.nav-icon{color:#8f9bb3;cursor:pointer}.acm-nav{background-color:#fff;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);overflow:hidden;padding:1.25rem;height:4.75rem;position:fixed;top:0;left:0;right:0;z-index:1040}.acm-nav a{color:#222b45;text-align:center;padding:0 20px;text-decoration:none;font-size:28px}.header-container,.logo-container{display:flex;align-items:center;width:auto}@media only screen and (max-width:380px){.acm-nav a{font-size:25px}}"]
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRzFCO1FBRlMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNWLG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFDL0QsQ0FBQztJQUVoQixhQUFhO1FBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGLENBQUE7QUFQVTtJQUFSLEtBQUssRUFBRTs4Q0FBWTtBQUNWO0lBQVQsTUFBTSxFQUFFO3VEQUFxRTtBQUZuRSxlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLHNkQUFzQzs7S0FFdkMsQ0FBQztHQUNXLGVBQWUsQ0FRM0I7U0FSWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstbmF2YmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuICBAT3V0cHV0KCkgc2lkZWJhckNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICB0aGlzLnNpZGViYXJDbGlja2VkLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==