import { __decorate, __awaiter } from 'tslib';
import { Component, Input, NgModule, Injectable, ViewChild, HostListener, EventEmitter, Output, ɵɵdefineInjectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { RxStompService, InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { map } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';
import * as ɵngcc3 from '@angular/common/http';

function IconComponent_ak_icon_house_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-house");
} }
function IconComponent_ak_icon_bell_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-bell");
} }
function IconComponent_ak_icon_hamburger_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-hamburger");
} }
function IconComponent_ak_icon_video_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-video");
} }
function IconComponent_ak_icon_classroom_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-classroom");
} }
function IconComponent_ak_icon_resources_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-resources");
} }
function IconComponent_ak_icon_teachers_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-teachers");
} }
function IconComponent_ak_icon_board_members_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-board-members");
} }
function IconComponent_ak_icon_contract_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-contract", 3);
} }
function IconComponent_ak_icon_calendar_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-calendar");
} }
function IconComponent_ak_icon_info_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-info");
} }
function IconComponent_ak_icon_robot_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-robot");
} }
function IconComponent_ak_icon_question_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-question");
} }
function IconComponent_ak_icon_contact_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ak-icon-contact");
} }
const _c0 = ["*"];
function CardComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 6);
} }
function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, CardComponent_div_1_div_3_Template, 1, 0, "div", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.editRoute);
} }
const _c1 = function (a0) { return { "card-padding": a0 }; };
const _c2 = ["home"];
const _c3 = ["about"];
const _c4 = ["feature"];
const _c5 = ["team"];
const _c6 = function (a0) { return { active: a0 }; };
function LoginCardComponent_input_25_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 33);
    ɵngcc0.ɵɵlistener("click", function LoginCardComponent_input_25_Template_input_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); const _r0 = ɵngcc0.ɵɵreference(15); const _r1 = ɵngcc0.ɵɵreference(20); return ctx_r9.onSignIn(_r0.value, _r1.value); });
    ɵngcc0.ɵɵelementEnd();
} }
function LoginCardComponent_input_60_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 34);
    ɵngcc0.ɵɵlistener("click", function LoginCardComponent_input_60_Template_input_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); const _r3 = ɵngcc0.ɵɵreference(48); const _r4 = ɵngcc0.ɵɵreference(53); const _r5 = ɵngcc0.ɵɵreference(58); return ctx_r11.onSignUp(_r3.value, _r4.value, _r5.value); });
    ɵngcc0.ɵɵelementEnd();
} }
function LoginCardComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 35);
} }
const _c7 = function (a0) { return { "item-selected": a0 }; };
function SiderbarComponent_li_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c7, ctx_r2.path === item_r1.link));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.name);
} }
function SiderbarComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵlistener("click", function SiderbarComponent_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const item_r1 = ctx.$implicit; const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.route(item_r1); });
    ɵngcc0.ɵɵelementStart(1, "a");
    ɵngcc0.ɵɵelement(2, "ak-icon", 5);
    ɵngcc0.ɵɵtemplate(3, SiderbarComponent_li_1_span_3_Template, 2, 4, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("icon", item_r1.icon)("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c7, ctx_r0.path === item_r1.link));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.sidebarOpen);
} }
let AcmkitLibComponent = class AcmkitLibComponent {
    constructor() { }
    ngOnInit() { }
};
AcmkitLibComponent.ɵfac = function AcmkitLibComponent_Factory(t) { return new (t || AcmkitLibComponent)(); };
AcmkitLibComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AcmkitLibComponent, selectors: [["ak-test-component"]], decls: 2, vars: 0, template: function AcmkitLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " Library is Working! On Version 1.0.3 Finally ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let BellIconComponent = class BellIconComponent {
    constructor() { }
};
BellIconComponent.ɵfac = function BellIconComponent_Factory(t) { return new (t || BellIconComponent)(); };
BellIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BellIconComponent, selectors: [["ak-icon-bell"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", "width", "32px", "height", "32px"], ["d", "M12,24c1.6,0,2.9-1.1,3.3-2.6H8.7C9.1,22.9,10.4,24,12,24z M18.9,14.6v-6c0-2.8-1.8-5.4-4.5-6.4L13.7,0h-3.5\n  \tL9.5,2.2c-2.7,1-4.5,3.6-4.5,6.4v6c0,1.4-1.2,2.6-2.6,2.6v2.6h19v-2.6C20.1,17.1,18.9,16,18.9,14.6z", "fill", "#A8A8A8"]], template: function BellIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelement(1, "path", 1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let BoardMemebersIconComponent = class BoardMemebersIconComponent {
    constructor() { }
};
BoardMemebersIconComponent.ɵfac = function BoardMemebersIconComponent_Factory(t) { return new (t || BoardMemebersIconComponent)(); };
BoardMemebersIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BoardMemebersIconComponent, selectors: [["ak-icon-board-members"]], decls: 10, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "width", "24px", "height", "24px", "fill", "currentColor"], ["d", "m25 15c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z"], ["d", "m41 22c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z"], ["d", "m48 41c-2.20557 0-4 1.79395-4 4 0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405 0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4zm-2 4c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm6.89941 8h-9.79883c.46436-2.2793 2.48486-4 4.89941-4s4.43507 1.7207 4.89942 4z"], ["d", "m25 61c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z"], ["d", "m57.96027 31.66595c.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405 0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405zm-4.96027-2.66595c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm-2.89941 8c.46436-2.2793 2.48486-4 4.89941-4s4.43506 1.7207 4.89941 4z"], ["d", "m9 22c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z"], ["d", "m9 54c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z"], ["d", "m2 38c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79882c.46435-2.2793 2.48486-4 4.89941-4z"], ["d", "m21 32c0 6.06543 4.93457 11 11 11s11-4.93457 11-11-4.93457-11-11-11-11 4.93457-11 11zm11-9c4.9624 0 9 4.03711 9 9s-4.0376 9-9 9-9-4.03711-9-9 4.0376-9 9-9z"]], template: function BoardMemebersIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelement(1, "path", 1);
        ɵngcc0.ɵɵelement(2, "path", 2);
        ɵngcc0.ɵɵelement(3, "path", 3);
        ɵngcc0.ɵɵelement(4, "path", 4);
        ɵngcc0.ɵɵelement(5, "path", 5);
        ɵngcc0.ɵɵelement(6, "path", 6);
        ɵngcc0.ɵɵelement(7, "path", 7);
        ɵngcc0.ɵɵelement(8, "path", 8);
        ɵngcc0.ɵɵelement(9, "path", 9);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let CalendarIconComponent = class CalendarIconComponent {
    constructor() { }
};
CalendarIconComponent.ɵfac = function CalendarIconComponent_Factory(t) { return new (t || CalendarIconComponent)(); };
CalendarIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarIconComponent, selectors: [["ak-icon-calendar"]], decls: 46, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 512 512", "width", "24px", "height", "24px", "fill", "currentColor"], ["d", "M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392\n\t\t\tc33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188\n\t\t\th432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z"], ["x", "76", "y", "230", "width", "40", "height", "40"], ["x", "156", "y", "230", "width", "40", "height", "40"], ["x", "236", "y", "230", "width", "40", "height", "40"], ["x", "316", "y", "230", "width", "40", "height", "40"], ["x", "396", "y", "230", "width", "40", "height", "40"], ["x", "76", "y", "310", "width", "40", "height", "40"], ["x", "156", "y", "310", "width", "40", "height", "40"], ["x", "236", "y", "310", "width", "40", "height", "40"], ["x", "316", "y", "310", "width", "40", "height", "40"], ["x", "76", "y", "390", "width", "40", "height", "40"], ["x", "156", "y", "390", "width", "40", "height", "40"], ["x", "236", "y", "390", "width", "40", "height", "40"], ["x", "316", "y", "390", "width", "40", "height", "40"], ["x", "396", "y", "310", "width", "40", "height", "40"]], template: function CalendarIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g");
        ɵngcc0.ɵɵelementStart(2, "g");
        ɵngcc0.ɵɵelement(3, "path", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "g");
        ɵngcc0.ɵɵelementStart(5, "g");
        ɵngcc0.ɵɵelement(6, "rect", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "g");
        ɵngcc0.ɵɵelementStart(8, "g");
        ɵngcc0.ɵɵelement(9, "rect", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "g");
        ɵngcc0.ɵɵelementStart(11, "g");
        ɵngcc0.ɵɵelement(12, "rect", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "g");
        ɵngcc0.ɵɵelementStart(14, "g");
        ɵngcc0.ɵɵelement(15, "rect", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "g");
        ɵngcc0.ɵɵelementStart(17, "g");
        ɵngcc0.ɵɵelement(18, "rect", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "g");
        ɵngcc0.ɵɵelementStart(20, "g");
        ɵngcc0.ɵɵelement(21, "rect", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "g");
        ɵngcc0.ɵɵelementStart(23, "g");
        ɵngcc0.ɵɵelement(24, "rect", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(25, "g");
        ɵngcc0.ɵɵelementStart(26, "g");
        ɵngcc0.ɵɵelement(27, "rect", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(28, "g");
        ɵngcc0.ɵɵelementStart(29, "g");
        ɵngcc0.ɵɵelement(30, "rect", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(31, "g");
        ɵngcc0.ɵɵelementStart(32, "g");
        ɵngcc0.ɵɵelement(33, "rect", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(34, "g");
        ɵngcc0.ɵɵelementStart(35, "g");
        ɵngcc0.ɵɵelement(36, "rect", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(37, "g");
        ɵngcc0.ɵɵelementStart(38, "g");
        ɵngcc0.ɵɵelement(39, "rect", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(40, "g");
        ɵngcc0.ɵɵelementStart(41, "g");
        ɵngcc0.ɵɵelement(42, "rect", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(43, "g");
        ɵngcc0.ɵɵelementStart(44, "g");
        ɵngcc0.ɵɵelement(45, "rect", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let ClassroomIconComponent = class ClassroomIconComponent {
    constructor() { }
};
ClassroomIconComponent.ɵfac = function ClassroomIconComponent_Factory(t) { return new (t || ClassroomIconComponent)(); };
ClassroomIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ClassroomIconComponent, selectors: [["ak-icon-classroom"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "width", "24px", "height", "24px", "fill", "currentColor"], ["id", "blackboard-board-classroom-presentation-chalkboard"], ["d", "M60,38.18V11.82A3,3,0,0,0,59,6H35V5a3,3,0,0,0-6,0V6H5a3,3,0,0,0-1,5.82V38.18A3,3,0,0,0,5,44H8v6.18a3,3,0,1,0,2,0V44H22.96L10.21,60.39a1,1,0,0,0-.11,1.05A1.012,1.012,0,0,0,11,62h5a.985.985,0,0,0,.79-.39L29,45.91V61a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V45.91l12.21,15.7A.985.985,0,0,0,48,62h5a1.012,1.012,0,0,0,.9-.56,1,1,0,0,0-.11-1.05L41.04,44H59a3,3,0,0,0,1-5.82ZM31,5a1,1,0,0,1,2,0V6H31ZM5,8H59a1,1,0,0,1,0,2H5A1,1,0,0,1,5,8Zm53,4V38H6V12ZM9,54a1,1,0,1,1,1-1A1,1,0,0,1,9,54Zm6.51,6H13.04L25.49,44h2.47ZM33,60H31V44h2Zm17.96,0H48.49L36.04,44h2.47ZM59,42H5a1,1,0,0,1,0-2H59a1,1,0,0,1,0,2Z"]], template: function ClassroomIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelement(2, "path", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let ContactIconComponent = class ContactIconComponent {
    constructor() { }
};
ContactIconComponent.ɵfac = function ContactIconComponent_Factory(t) { return new (t || ContactIconComponent)(); };
ContactIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContactIconComponent, selectors: [["ak-icon-contact"]], decls: 5, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", "width", "24px", "height", "24px", "fill", "currentColor"], ["id", "XMLID_1750_"], ["id", "XMLID_831_"], ["id", "XMLID_834_", "d", "m354.404 344.404h-30.689l-15.942-7.095v-19.357c22.321-12.297 39.832-32.285 48.944-56.368h13.676c32.567 0 59.063-26.496 59.063-59.063 0-21.029-11.056-39.515-27.652-49.982v-6.735c.001-80.397-65.407-145.804-145.804-145.804s-145.805 65.407-145.805 145.805v6.73c-16.6 10.467-27.659 28.954-27.659 49.986 0 32.567 26.496 59.063 59.063 59.063h13.683c9.112 24.083 26.623 44.071 48.944 56.368v19.277l-16.121 7.174h-30.51c-86.898.001-157.595 70.699-157.595 157.597 0 5.522 4.477 10 10 10h201c5.523 0 10-4.478 10-10s-4.477-10-10-10h-190.641c4.986-69.108 61.239-124.232 130.816-127.444-.026.084-.062.164-.086.248-.811 2.85-.316 5.912 1.35 8.362l47.305 69.544c1.676 2.464 4.363 4.052 7.329 4.332.314.029.628.044.941.044 2.639 0 5.186-1.045 7.07-2.929l40.827-40.827 40.826 40.827c1.884 1.884 4.432 2.929 7.07 2.929.312 0 .626-.015.94-.044 2.967-.28 5.654-1.868 7.33-4.332l47.306-69.544c1.666-2.449 2.16-5.513 1.35-8.362-.025-.087-.061-.168-.088-.254 69.66 3.125 126.006 58.284 130.996 127.451h-190.641c-5.522 0-10 4.478-10 10s4.478 10 10 10h201c5.522 0 10-4.478 10-10 0-86.899-70.697-157.597-157.596-157.597zm-10.967-188.787c-20.545-2.821-39.825-11.007-56.206-23.967-3.591-2.842-8.656-2.88-12.291-.091-21.482 16.482-47.18 25.194-74.314 25.194-10.89 0-21.628-1.451-32.029-4.27v-5.084c0-48.192 39.207-87.399 87.399-87.399s87.4 39.207 87.4 87.399c.001 0 .02 7.95.041 8.218zm26.957 85.968h-6.757v-78.127h6.757c21.54 0 39.063 17.523 39.063 39.064 0 21.539-17.523 39.063-39.063 39.063zm-114.394-221.585c68.957 0 125.124 55.769 125.789 124.572-3.689-.724-7.497-1.114-11.396-1.114h-7.077c-2.082-57.401-49.419-103.458-107.32-103.458s-105.238 46.057-107.32 103.458h-7.076c-3.896 0-7.701.389-11.389 1.113.666-68.802 56.833-124.571 125.789-124.571zm-107.644 221.585h-6.756c-21.54 0-39.063-17.524-39.063-39.064s17.523-39.064 39.063-39.064h6.757v78.128zm20-17.98v-50.54c10.536 2.448 21.341 3.688 32.27 3.688 29.018 0 56.629-8.565 80.319-24.845 18.62 13.124 40.042 21.272 62.691 23.886v48.349c-.057 9.374-1.593 18.403-4.386 26.866h-47.754c-4.132-11.684-15.284-20.08-28.364-20.08h-13.387c-16.586 0-30.079 13.494-30.079 30.08s13.493 30.08 30.079 30.08h13.387c13.081 0 24.233-8.396 28.364-20.08h38.188c-15.615 24.191-42.81 40.239-73.684 40.239-48.327 0-87.644-39.316-87.644-87.643zm104.857 37.404c0 5.559-4.521 10.08-10.08 10.08h-13.387c-5.558 0-10.079-4.521-10.079-10.08s4.521-10.08 10.079-10.08h13.387c5.558 0 10.08 4.521 10.08 10.08zm-17.213 70.239c11.056 0 21.726-1.678 31.773-4.788v16.722l-31.862 31.862-31.685-31.684v-16.9c10.048 3.11 20.718 4.788 31.774 4.788zm-46.515 90.223-33.778-49.658 33.692-14.994 32.369 32.369zm92.851 0-32.283-32.283 32.369-32.369 33.693 14.994z"], ["id", "XMLID_843_", "d", "m256 492c-2.63 0-5.21 1.069-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.069-2.931c1.861-1.859 2.931-4.439 2.931-7.069s-1.07-5.21-2.931-7.07c-1.859-1.861-4.439-2.93-7.069-2.93z"]], template: function ContactIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelementStart(2, "g", 2);
        ɵngcc0.ɵɵelement(3, "path", 3);
        ɵngcc0.ɵɵelement(4, "path", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let ContractIconComponent = class ContractIconComponent {
    constructor() { }
};
ContractIconComponent.ɵfac = function ContractIconComponent_Factory(t) { return new (t || ContractIconComponent)(); };
ContractIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContractIconComponent, selectors: [["ak-icon-contract"]], decls: 19, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 512 512", "width", "24px", "height", "24px", "fill", "currentColor"], ["d", "M498.791,161.127c-17.545-17.546-46.094-17.545-63.645,0.004c-5.398,5.403-39.863,39.896-45.128,45.166V87.426\n\t\t\tc0-12.02-4.681-23.32-13.181-31.819L334.412,13.18C325.913,4.68,314.612,0,302.592,0H45.018c-24.813,0-45,20.187-45,45v422\n\t\t\tc0,24.813,20.187,45,45,45h300c24.813,0,45-20.187,45-45V333.631L498.79,224.767C516.377,207.181,516.381,178.715,498.791,161.127\n\t\t\tz M300.019,30c2.834,0,8.295-0.491,13.18,4.393l42.426,42.427c4.76,4.761,4.394,9.978,4.394,13.18h-60V30z M360.018,467\n\t\t\tc0,8.271-6.728,15-15,15h-300c-8.271,0-15-6.729-15-15V45c0-8.271,6.729-15,15-15h225v75c0,8.284,6.716,15,15,15h75v116.323\n\t\t\tc0,0-44.254,44.292-44.256,44.293l-21.203,21.204c-1.646,1.646-2.888,3.654-3.624,5.863l-21.214,63.64\n\t\t\tc-1.797,5.39-0.394,11.333,3.624,15.35c4.023,4.023,9.968,5.419,15.35,3.624l63.64-21.213c2.209-0.736,4.217-1.977,5.863-3.624\n\t\t\tl1.82-1.82V467z M326.378,312.427l21.213,21.213l-8.103,8.103l-31.819,10.606l10.606-31.82L326.378,312.427z M368.8,312.422\n\t\t\tl-21.213-21.213c11.296-11.305,61.465-61.517,72.105-72.166l21.213,21.213L368.8,312.422z M477.573,203.558l-15.463,15.476\n\t\t\tl-21.213-21.213l15.468-15.481c5.852-5.849,15.366-5.848,21.214,0C483.426,188.19,483.457,197.673,477.573,203.558z"], ["d", "M285.018,150h-210c-8.284,0-15,6.716-15,15s6.716,15,15,15h210c8.284,0,15-6.716,15-15S293.302,150,285.018,150z"], ["d", "M225.018,210h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,210,225.018,210z"], ["d", "M225.018,270h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,270,225.018,270z"], ["d", "M225.018,330h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,330,225.018,330z"], ["d", "M285.018,422h-90c-8.284,0-15,6.716-15,15s6.716,15,15,15h90c8.284,0,15-6.716,15-15S293.302,422,285.018,422z"]], template: function ContractIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g");
        ɵngcc0.ɵɵelementStart(2, "g");
        ɵngcc0.ɵɵelement(3, "path", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "g");
        ɵngcc0.ɵɵelementStart(5, "g");
        ɵngcc0.ɵɵelement(6, "path", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "g");
        ɵngcc0.ɵɵelementStart(8, "g");
        ɵngcc0.ɵɵelement(9, "path", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "g");
        ɵngcc0.ɵɵelementStart(11, "g");
        ɵngcc0.ɵɵelement(12, "path", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "g");
        ɵngcc0.ɵɵelementStart(14, "g");
        ɵngcc0.ɵɵelement(15, "path", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "g");
        ɵngcc0.ɵɵelementStart(17, "g");
        ɵngcc0.ɵɵelement(18, "path", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let HamburgerIconComponent = class HamburgerIconComponent {
    constructor() { }
};
HamburgerIconComponent.ɵfac = function HamburgerIconComponent_Factory(t) { return new (t || HamburgerIconComponent)(); };
HamburgerIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HamburgerIconComponent, selectors: [["ak-icon-hamburger"]], decls: 8, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "2rem", "height", "2rem", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "eva", "eva-menu-2-outline"], ["data-name", "Layer 2"], ["data-name", "menu-2"], ["width", "24", "height", "24", "transform", "rotate(180 12 12)", "opacity", "0"], ["cx", "4", "cy", "12", "r", "1"], ["x", "7", "y", "11", "width", "14", "height", "2", "rx", ".94", "ry", ".94"], ["x", "3", "y", "16", "width", "18", "height", "2", "rx", ".94", "ry", ".94"], ["x", "3", "y", "6", "width", "18", "height", "2", "rx", ".94", "ry", ".94"]], template: function HamburgerIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelementStart(2, "g", 2);
        ɵngcc0.ɵɵelement(3, "rect", 3);
        ɵngcc0.ɵɵelement(4, "circle", 4);
        ɵngcc0.ɵɵelement(5, "rect", 5);
        ɵngcc0.ɵɵelement(6, "rect", 6);
        ɵngcc0.ɵɵelement(7, "rect", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let HouseIconComponent = class HouseIconComponent {
    constructor() { }
};
HouseIconComponent.ɵfac = function HouseIconComponent_Factory(t) { return new (t || HouseIconComponent)(); };
HouseIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HouseIconComponent, selectors: [["ak-icon-house"]], decls: 4, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "eva", "eva-home-outline"], ["data-name", "Layer 2"], ["data-name", "home"], ["d", "M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"]], template: function HouseIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelementStart(2, "g", 2);
        ɵngcc0.ɵɵelement(3, "path", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let IconComponent = class IconComponent {
    constructor() {
        this.icon = '';
    }
};
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: IconComponent, selectors: [["ak-icon"]], inputs: { icon: "icon" }, decls: 15, vars: 14, consts: [[2, "display", "inline-block"], [4, "ngIf"], ["style", "margin-left: 2px;", 4, "ngIf"], [2, "margin-left", "2px"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, IconComponent_ak_icon_house_1_Template, 1, 0, "ak-icon-house", 1);
        ɵngcc0.ɵɵtemplate(2, IconComponent_ak_icon_bell_2_Template, 1, 0, "ak-icon-bell", 1);
        ɵngcc0.ɵɵtemplate(3, IconComponent_ak_icon_hamburger_3_Template, 1, 0, "ak-icon-hamburger", 1);
        ɵngcc0.ɵɵtemplate(4, IconComponent_ak_icon_video_4_Template, 1, 0, "ak-icon-video", 1);
        ɵngcc0.ɵɵtemplate(5, IconComponent_ak_icon_classroom_5_Template, 1, 0, "ak-icon-classroom", 1);
        ɵngcc0.ɵɵtemplate(6, IconComponent_ak_icon_resources_6_Template, 1, 0, "ak-icon-resources", 1);
        ɵngcc0.ɵɵtemplate(7, IconComponent_ak_icon_teachers_7_Template, 1, 0, "ak-icon-teachers", 1);
        ɵngcc0.ɵɵtemplate(8, IconComponent_ak_icon_board_members_8_Template, 1, 0, "ak-icon-board-members", 1);
        ɵngcc0.ɵɵtemplate(9, IconComponent_ak_icon_contract_9_Template, 1, 0, "ak-icon-contract", 2);
        ɵngcc0.ɵɵtemplate(10, IconComponent_ak_icon_calendar_10_Template, 1, 0, "ak-icon-calendar", 1);
        ɵngcc0.ɵɵtemplate(11, IconComponent_ak_icon_info_11_Template, 1, 0, "ak-icon-info", 1);
        ɵngcc0.ɵɵtemplate(12, IconComponent_ak_icon_robot_12_Template, 1, 0, "ak-icon-robot", 1);
        ɵngcc0.ɵɵtemplate(13, IconComponent_ak_icon_question_13_Template, 1, 0, "ak-icon-question", 1);
        ɵngcc0.ɵɵtemplate(14, IconComponent_ak_icon_contact_14_Template, 1, 0, "ak-icon-contact", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "house");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "bell");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "hamburger");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "video");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "classroom");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "resources");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "teachers");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "board-members");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "contract");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "calendar");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "info");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "robot");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "question");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon === "contact");
    } }, directives: function () { return [ɵngcc1.NgIf, HouseIconComponent,
        BellIconComponent,
        HamburgerIconComponent,
        VideoIconComponent,
        ClassroomIconComponent,
        ResourcesIconComponent,
        TeachersIconComponent,
        BoardMemebersIconComponent,
        ContractIconComponent,
        CalendarIconComponent,
        InfoIconComponent,
        RobotIconComponent,
        QuestionIconComponent,
        ContactIconComponent]; }, encapsulation: 2 });
__decorate([
    Input()
], IconComponent.prototype, "icon", void 0);

let InfoIconComponent = class InfoIconComponent {
    constructor() { }
};
InfoIconComponent.ɵfac = function InfoIconComponent_Factory(t) { return new (t || InfoIconComponent)(); };
InfoIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InfoIconComponent, selectors: [["ak-icon-info"]], decls: 5, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 330 330", "width", "24px", "height", "24px", "fill", "currentColor"], ["d", "M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z\n\t\t M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"], ["d", "M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991\n\t\tc11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"], ["d", "M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z\n\t\t"]], template: function InfoIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g");
        ɵngcc0.ɵɵelement(2, "path", 1);
        ɵngcc0.ɵɵelement(3, "path", 2);
        ɵngcc0.ɵɵelement(4, "path", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let QuestionIconComponent = class QuestionIconComponent {
    constructor() { }
};
QuestionIconComponent.ɵfac = function QuestionIconComponent_Factory(t) { return new (t || QuestionIconComponent)(); };
QuestionIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: QuestionIconComponent, selectors: [["ak-icon-question"]], decls: 5, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", "width", "24px", "height", "24px", "fill", "currentColor"], ["d", "m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z"], ["d", "m256 368c-8.836 0-16-7.164-16-16 0-40.386 15.727-78.354 44.285-106.912 17.872-17.873 27.715-41.635 27.715-66.911 0-27.668-22.509-50.177-50.177-50.177h-3.646c-27.668 0-50.177 22.509-50.177 50.177v5.823c0 8.836-7.164 16-16 16s-16-7.164-16-16v-5.823c0-45.313 36.864-82.177 82.177-82.177h3.646c45.313 0 82.177 36.864 82.177 82.177 0 33.823-13.171 65.622-37.088 89.539-22.514 22.513-34.912 52.446-34.912 84.284 0 8.836-7.164 16-16 16z"], ["d", "m256.02 432c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16z"]], template: function QuestionIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g");
        ɵngcc0.ɵɵelement(2, "path", 1);
        ɵngcc0.ɵɵelement(3, "path", 2);
        ɵngcc0.ɵɵelement(4, "path", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let ResourcesIconComponent = class ResourcesIconComponent {
    constructor() { }
};
ResourcesIconComponent.ɵfac = function ResourcesIconComponent_Factory(t) { return new (t || ResourcesIconComponent)(); };
ResourcesIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ResourcesIconComponent, selectors: [["ak-icon-resources"]], decls: 9, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "width", "24px", "height", "24px", "fill", "currentColor"], ["d", "m26 14c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"], ["d", "m61.879 56.464-10.879-10.878v-39.586c0-.552-.447-1-1-1h-3v-3c0-.552-.447-1-1-1h-34c-.266 0-.52.105-.707.293l-10 10c-.188.187-.293.442-.293.707v46c0 .552.447 1 1 1h3v3c0 .552.447 1 1 1h44c.553 0 1-.448 1-1v-5.587l5.465 5.465c.723.724 1.683 1.122 2.707 1.122 2.11 0 3.828-1.717 3.828-3.829 0-1.022-.398-1.983-1.121-2.707zm-12.879-49.464v36.586l-2-2v-34.586zm-38-2.586v6.586h-6.586zm-8 8.586h9c.553 0 1-.448 1-1v-9h32v36.586l-1.655-1.655c.399-.755.29-1.71-.345-2.345l-2.619-2.619c1.026-2.11 1.619-4.468 1.619-6.967 0-8.822-7.178-16-16-16s-16 7.178-16 16 7.178 16 16 16c2.499 0 4.857-.593 6.967-1.619l2.619 2.619c.39.39.902.585 1.414.585.321 0 .64-.086.931-.24l7.069 7.069v6.586h-42zm34 28.586-2.223-2.223c1.823-1.201 3.385-2.763 4.586-4.586l2.223 2.223zm-11-1.586c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14zm23 21h-42v-2h39c.553 0 1-.448 1-1v-5.586l2 2zm10.172 0c-.481 0-.952-.195-1.293-.536l-18.465-18.464 2.586-2.586 18.465 18.464c.345.346.535.805.535 1.293 0 1.009-.82 1.829-1.828 1.829z"], ["d", "m17 7h24v2h-24z"], ["d", "m7 51h34v2h-34z"], ["d", "m7 47h34v2h-34z"], ["d", "m7 43h26v2h-26z"], ["d", "m28.793 24.855c.743-.727 1.207-1.736 1.207-2.855 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.119.464 2.128 1.207 2.855-1.331.9-2.207 2.422-2.207 4.145v3c0 .552.447 1 1 1h8c.553 0 1-.448 1-1v-3c0-1.723-.876-3.245-2.207-4.145zm-4.793-2.855c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zm5 9h-6v-2c0-1.654 1.346-3 3-3s3 1.346 3 3z"]], template: function ResourcesIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g");
        ɵngcc0.ɵɵelement(2, "path", 1);
        ɵngcc0.ɵɵelement(3, "path", 2);
        ɵngcc0.ɵɵelement(4, "path", 3);
        ɵngcc0.ɵɵelement(5, "path", 4);
        ɵngcc0.ɵɵelement(6, "path", 5);
        ɵngcc0.ɵɵelement(7, "path", 6);
        ɵngcc0.ɵɵelement(8, "path", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let RobotIconComponent = class RobotIconComponent {
    constructor() { }
};
RobotIconComponent.ɵfac = function RobotIconComponent_Factory(t) { return new (t || RobotIconComponent)(); };
RobotIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RobotIconComponent, selectors: [["ak-icon-robot"]], decls: 8, vars: 0, consts: [["viewBox", "0 0 128 128", "xmlns", "http://www.w3.org/2000/svg", "width", "26px", "height", "26px", "fill", "currentColor"], ["d", "m89.917 75.305a7.759 7.759 0 0 0 7.75-7.75v-.385h6.143a1.751 1.751 0 0 0 1.75-1.75v-23.54a1.751 1.751 0 0 0 -1.75-1.75h-6.143v-.383a7.759 7.759 0 0 0 -7.75-7.747h-21.167v-6.871a10.75 10.75 0 1 0 -9.5 0v6.871h-21.167a7.759 7.759 0 0 0 -7.75 7.75v.383h-6.143a1.751 1.751 0 0 0 -1.75 1.75v23.537a1.751 1.751 0 0 0 1.75 1.75h6.143v.385a7.759 7.759 0 0 0 7.75 7.75h12.167v5.316h-20.058a7.759 7.759 0 0 0 -7.75 7.75v33.129a1.751 1.751 0 0 0 1.75 1.75h79.616a1.751 1.751 0 0 0 1.75-1.75v-33.129a7.759 7.759 0 0 0 -7.75-7.75h-20.058v-5.316zm12.143-31.675v20.04h-4.393v-20.04zm-45.31-28.13a7.25 7.25 0 1 1 7.25 7.25 7.258 7.258 0 0 1 -7.25-7.25zm6 10.671a9.929 9.929 0 0 0 2.5 0v5.829h-2.5zm-36.81 37.499v-20.04h4.393v20.04zm7.893 3.885v-27.808a4.255 4.255 0 0 1 4.25-4.25h22.888.029s.019 0 .029 0h5.942.029s.019 0 .029 0h22.888a4.255 4.255 0 0 1 4.25 4.25v27.808a4.255 4.255 0 0 1 -4.25 4.25h-13.869c-.016 0-.031-.005-.048-.005s-.032 0-.048.005h-23.9c-.016 0-.031-.005-.048-.005s-.032 0-.048.005h-13.873a4.255 4.255 0 0 1 -4.25-4.25zm50.916 52.195h-41.5v-14.437h41.5zm17.309-31.379v31.379h-13.809v-16.187a1.75 1.75 0 0 0 -1.75-1.75h-45a1.751 1.751 0 0 0 -1.75 1.75v16.187h-13.807v-31.379a4.255 4.255 0 0 1 4.25-4.25h67.616a4.255 4.255 0 0 1 4.25 4.25zm-27.808-7.75h-20.5v-5.316h20.5z"], ["d", "m55.251 49.648a7.75 7.75 0 1 0 -7.751 7.752 7.759 7.759 0 0 0 7.751-7.752zm-7.751 4.252a4.25 4.25 0 1 1 4.25-4.25 4.255 4.255 0 0 1 -4.25 4.25z"], ["d", "m80.5 57.4a7.75 7.75 0 1 0 -7.75-7.75 7.759 7.759 0 0 0 7.75 7.75zm0-12a4.25 4.25 0 1 1 -4.25 4.25 4.255 4.255 0 0 1 4.25-4.25z"], ["d", "m51.875 64.875a1.751 1.751 0 0 0 1.75 1.75h20.75a1.75 1.75 0 0 0 0-3.5h-20.75a1.751 1.751 0 0 0 -1.75 1.75z"], ["d", "m94.808 96.121a4.75 4.75 0 1 0 -4.75-4.75 4.756 4.756 0 0 0 4.75 4.75zm0-6a1.25 1.25 0 1 1 -1.25 1.25 1.251 1.251 0 0 1 1.25-1.25z"], ["d", "m28.442 91.371a4.75 4.75 0 1 0 4.75-4.75 4.756 4.756 0 0 0 -4.75 4.75zm4.75-1.25a1.25 1.25 0 1 1 -1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"]], template: function RobotIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g");
        ɵngcc0.ɵɵelement(2, "path", 1);
        ɵngcc0.ɵɵelement(3, "path", 2);
        ɵngcc0.ɵɵelement(4, "path", 3);
        ɵngcc0.ɵɵelement(5, "path", 4);
        ɵngcc0.ɵɵelement(6, "path", 5);
        ɵngcc0.ɵɵelement(7, "path", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let TeachersIconComponent = class TeachersIconComponent {
    constructor() { }
};
TeachersIconComponent.ɵfac = function TeachersIconComponent_Factory(t) { return new (t || TeachersIconComponent)(); };
TeachersIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TeachersIconComponent, selectors: [["ak-icon-teachers"]], decls: 7, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 512 512", "width", "24px", "height", "24px", "fill", "currentColor"], ["d", "M135,0c-33.358,0-60,28.006-60,61c0,33.084,26.916,60,60,60s60-26.916,60-60C195,27.98,168.324,0,135,0z M135,91\n\t\t\tc-16.542,0-30-13.458-30-30c0-16.804,13.738-31,30-31s30,14.196,30,31C165,77.542,151.542,91,135,91z"], ["d", "M467,0H255c-24.813,0-45,20.187-45,45v102.365l-13.183-13.182C188.317,125.682,177.017,121,165,121h-30\n\t\t\tc-6.359,0-53.641,0-60,0c-41.355,0-75,33.645-75,75c0,8.529,0,77.68,0,90c0,24.813,20.187,45,45,45c5.257,0,10.307-0.906,15-2.57\n\t\t\tV467c0,24.813,20.187,45,45,45c11.515,0,22.033-4.347,30-11.486c7.967,7.139,18.485,11.486,30,11.486c24.813,0,45-20.187,45-45\n\t\t\tV268.444c11.469,4.045,24.174,3.266,35.126-2.191L295.631,241H467c24.813,0,45-20.187,45-45V45C512,20.187,491.813,0,467,0z\n\t\t\t M291.709,209.419l-59.982,29.991c-5.627,2.804-12.616,1.91-17.333-2.806l-8.786-8.787c-9.276-9.276-25.567-2.967-25.607,10.56\n\t\t\tc0,0.015-0.002,0.029-0.002,0.044V467c0,8.271-6.729,15-15,15s-15-6.729-15-15V316c0-8.284-6.716-15-15-15s-15,6.716-15,15v151\n\t\t\tc0,8.271-6.729,15-15,15s-15-6.729-15-15V286c0-11.31,0-80.756,0-90c0-8.284-6.716-15-15-15s-15,6.716-15,15c0,8.529,0,77.68,0,90\n\t\t\tc0,8.271-6.729,15-15,15c-8.271,0-15-6.729-15-15C30,274.69,30,205.244,30,196c0-24.813,20.187-45,45-45c11.31,0,80.756,0,90,0\n\t\t\tc4.004,0,7.77,1.561,10.604,4.396l44.707,44.707c4.564,4.565,11.54,5.696,17.314,2.81l40.669-20.335\n\t\t\tc7.444-3.725,16.415-0.714,20.124,6.712C302.128,196.711,299.13,205.709,291.709,209.419z M482,196c0,8.271-6.729,15-15,15\n\t\t\tH327.419c0.091-0.257,0.191-0.509,0.277-0.768c2.16-6.48,2.808-13.218,1.982-19.8l82.03-41.015\n\t\t\tc7.41-3.705,10.413-12.715,6.708-20.125c-3.705-7.41-12.716-10.414-20.125-6.708l-82.025,41.013\n\t\t\tc-13.142-12.712-33.613-16.747-51.393-7.849L240,168.185V45c0-8.271,6.729-15,15-15h212c8.271,0,15,6.729,15,15V196z"]], template: function TeachersIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g");
        ɵngcc0.ɵɵelementStart(2, "g");
        ɵngcc0.ɵɵelement(3, "path", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "g");
        ɵngcc0.ɵɵelementStart(5, "g");
        ɵngcc0.ɵɵelement(6, "path", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let VideoIconComponent = class VideoIconComponent {
    constructor() { }
};
VideoIconComponent.ɵfac = function VideoIconComponent_Factory(t) { return new (t || VideoIconComponent)(); };
VideoIconComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: VideoIconComponent, selectors: [["ak-icon-video"]], decls: 4, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 277.392 277.392", "width", "24px", "height", "24px", "fill", "currentColor"], ["d", "M46.232,213.541h119.659c25.493,0,46.232-20.739,46.232-46.232v-10.106l51.339,51.345\n\t\t\tc1.561,1.561,3.65,2.388,5.771,2.388c1.05,0,2.116-0.201,3.122-0.62c3.051-1.262,5.037-4.237,5.037-7.539V72.011\n\t\t\tc0-3.302-1.985-6.277-5.037-7.539c-3.04-1.262-6.554-0.566-8.893,1.768l-51.377,51.383c-0.397-25.15-20.951-45.498-46.194-45.498\n\t\t\tH46.232C20.739,72.125,0,92.864,0,118.357v48.952C0,192.802,20.739,213.541,46.232,213.541z M261.075,91.711v91.371\n\t\t\tl-45.683-45.688L261.075,91.711z M16.317,118.357c0-16.497,13.424-29.915,29.915-29.915h119.659\n\t\t\tc16.491,0,29.915,13.418,29.915,29.915v18.466v1.148v29.338c0,16.497-13.424,29.915-29.915,29.915H46.232\n\t\t\tc-16.491,0-29.915-13.418-29.915-29.915V118.357z"]], template: function VideoIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g");
        ɵngcc0.ɵɵelementStart(2, "g");
        ɵngcc0.ɵɵelement(3, "path", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let IconsModule = class IconsModule {
};
IconsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: IconsModule });
IconsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[BrowserModule]] });

let BasePageComponent = class BasePageComponent {
    constructor() { }
    ngOnInit() { }
};
BasePageComponent.ɵfac = function BasePageComponent_Factory(t) { return new (t || BasePageComponent)(); };
BasePageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BasePageComponent, selectors: [["ak-base-page"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "global-app-background"]], template: function BasePageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });

let CardComponent = class CardComponent {
    constructor(router) {
        this.router = router;
        this.editRoute = '/';
    }
    ngOnInit() { }
    onEditClick() {
        this.router.navigate([this.editRoute]);
    }
};
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
CardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardComponent, selectors: [["ak-card"]], inputs: { editRoute: "editRoute", title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 4, consts: [[1, "card", "column-half", 3, "ngClass"], ["class", "header", 4, "ngIf"], [1, "content-padding"], [1, "header"], [1, "title"], ["class", "edit-icon", 4, "ngIf"], [1, "edit-icon"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, CardComponent_div_1_Template, 4, 2, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, !ctx.title));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".card[_ngcontent-%COMP%]{width:100%;display:inline-block;height:auto;border-radius:8px;text-align:left;background:linear-gradient(to bottom,#fff 12%,#fffff5 100%);margin-bottom:15px}.header[_ngcontent-%COMP%]{display:inline-block;height:auto;width:100%;border-radius:8px 8px 0 0;background:#eeeff0;border-bottom:1px solid #d2d4d6;padding:10px 15px}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;font-family:ColinSerifWeb-Bold,Georgia,\"Times New Roman\",Times,serif;color:#363b42;display:inline-block}.card-padding[_ngcontent-%COMP%]{padding:20px}.content-padding[_ngcontent-%COMP%]{padding:10px}"] });
CardComponent.ctorParameters = () => [
    { type: Router }
];
__decorate([
    Input()
], CardComponent.prototype, "title", void 0);
__decorate([
    Input()
], CardComponent.prototype, "editRoute", void 0);

/**
 * Class to help manage a particle config.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let ParticlesService = class ParticlesService {
    constructor() { }
    /**
     * Initializes the particlesJS based on the passed in config file
     *
     * @param configFile - The particle config file we want to initialize
     */
    init(configFile) {
        particlesJS('particles-js', configFile, () => { });
    }
};
ParticlesService.ɵfac = function ParticlesService_Factory(t) { return new (t || ParticlesService)(); };
ParticlesService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ParticlesService, factory: ParticlesService.ɵfac });

const LandingParticleConfig = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1500,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'polygon',
            stroke: {
                width: 1,
                color: '#ffffff',
            },
            polygon: {
                nb_sides: 10,
            },
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1.0,
                opacity_min: 0.25,
                sync: true,
            },
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 1.25,
                sync: true,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 1,
            width: 1,
        },
        move: {
            enable: true,
            speed: 8,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 2000,
                rotateY: 2000,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 3,
                },
            },
            repulse: {
                distance: 250,
                duration: 2,
            },
        },
    },
    retina_detect: true,
};

let LandingComponent = class LandingComponent {
    constructor(router, particleService) {
        this.router = router;
        this.particleService = particleService;
        this.currentActive = 0;
        this.homeOffset = null;
        this.aboutOffset = null;
        this.featureOffset = null;
        this.teamOffset = null;
    }
    ngOnInit() {
        this.particleService.init(LandingParticleConfig);
    }
    ngAfterViewInit() {
        this.homeOffset = this.homeElement.nativeElement.offsetTop;
        this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 500;
        this.featureOffset = this.featureElemet.nativeElement.offsetTop - 500;
        this.teamOffset = this.teamElement.nativeElement.offsetTop - 500;
    }
    scrollHandler() {
        if (window.pageYOffset < 625) {
            this.currentActive = 0;
        }
        else if (window.pageYOffset >= 625 && window.pageYOffset < 1200) {
            this.currentActive = 1;
        }
        else if (window.pageYOffset >= 1200 && window.pageYOffset < 1800) {
            this.currentActive = 2;
        }
        else {
            this.currentActive = 3;
        }
    }
    onSignIn() {
        this.router.navigate(['/login']);
    }
};
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router), ɵngcc0.ɵɵdirectiveInject(ParticlesService)); };
LandingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LandingComponent, selectors: [["ak-landing"]], viewQuery: function LandingComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.homeElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.aboutElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.featureElemet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.teamElement = _t.first);
    } }, hostBindings: function LandingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("scroll", function LandingComponent_scroll_HostBindingHandler($event) { return ctx.scrollHandler($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, decls: 171, vars: 12, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "header", "sticky", "global-font"], ["href", "/", 1, "navbar-brand", "logo-text"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse", "text-center", "header-text"], [1, "mainmenu"], ["id", "primary-menu", 1, "navbar-nav", "text-center"], ["href", "landing#home", 1, "nav-link", "text-light", 3, "ngClass"], ["href", "landing#about", 1, "nav-link", "text-light", 3, "ngClass"], ["href", "landing#feature", 1, "nav-link", "text-light", 3, "ngClass"], ["href", "landing#team", 1, "nav-link", "text-light", 3, "ngClass"], ["href", "#contact", 1, "nav-link", "text-light"], ["id", "home", 1, "hero-area"], ["home", ""], ["id", "particles-js"], [1, "container", "hero-area-wrapper"], [1, "row"], [1, "col-lg-7"], [1, "hero-area-content"], [1, "radius-btn", 3, "click"], ["id", "about", 1, "about-area", "ptb-90"], ["about", ""], [1, "container", "about-area-wrapper"], [1, "col-lg-12"], [1, "sec-title"], ["data-aos", "fade-up"], [1, "sec-title-border"], ["data-aos", "fade-up", 1, "col-lg-4"], [1, "single-about-box"], [1, "icofont", "icofont-ruler-pencil"], [1, "icofont", "icofont-computer"], [1, "icofont", "icofont-headphone-alt"], ["id", "feature", 1, "feature-area", "ptb-90"], ["feature", ""], [1, "container", "feature-area-wrapper"], [1, "row", "flexbox-center"], [1, "col-lg-4"], [1, "single-feature-box", "text-lg-right", "text-center"], ["data-aos", "fade-right", 1, "feature-box-info"], ["data-aos", "fade-right", 1, "feature-box-icon"], [1, "feature-box-icon"], [1, "single-feature-box", "text-lg-left", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "500", 1, "feature-box-info"], ["id", "team", 1, "team-area", "ptb-90"], ["team", ""], [1, "container"], [1, "col-lg-3", "col-sm-6"], [1, "single-team-member"], [1, "team-member-info"], [2, "font-size", "20px"], ["id", "contact", 1, "footer"], [1, "copyright-area"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nav", 0);
        ɵngcc0.ɵɵelementStart(1, "a", 1);
        ɵngcc0.ɵɵtext(2, " ACM Website ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "ul", 4);
        ɵngcc0.ɵɵelementStart(6, "li");
        ɵngcc0.ɵɵelementStart(7, "a", 5);
        ɵngcc0.ɵɵtext(8, "Home");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "li");
        ɵngcc0.ɵɵelementStart(10, "a", 6);
        ɵngcc0.ɵɵtext(11, "About Us");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "li");
        ɵngcc0.ɵɵelementStart(13, "a", 7);
        ɵngcc0.ɵɵtext(14, "Features");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "li");
        ɵngcc0.ɵɵelementStart(16, "a", 8);
        ɵngcc0.ɵɵtext(17, "Team");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "li");
        ɵngcc0.ɵɵelementStart(19, "a", 9);
        ɵngcc0.ɵɵtext(20, "Contact Us");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "section", 10, 11);
        ɵngcc0.ɵɵelement(23, "div", 12);
        ɵngcc0.ɵɵelementStart(24, "div", 13);
        ɵngcc0.ɵɵelementStart(25, "div", 14);
        ɵngcc0.ɵɵelementStart(26, "div", 15);
        ɵngcc0.ɵɵelementStart(27, "div", 16);
        ɵngcc0.ɵɵelementStart(28, "h1");
        ɵngcc0.ɵɵtext(29, "Welcome to ACM!");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(30, "p");
        ɵngcc0.ɵɵtext(31, " Offical University of Toledo UPRC Campus ACM Chapter website to help you keep up to date on the latest events, meetings, and sessions throughout the year. ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(32, "div", 17);
        ɵngcc0.ɵɵlistener("click", function LandingComponent_Template_div_click_32_listener() { return ctx.onSignIn(); });
        ɵngcc0.ɵɵtext(33, "Sign In");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(34, "section", 18, 19);
        ɵngcc0.ɵɵelementStart(36, "div", 20);
        ɵngcc0.ɵɵelementStart(37, "div", 14);
        ɵngcc0.ɵɵelementStart(38, "div", 21);
        ɵngcc0.ɵɵelementStart(39, "div", 22);
        ɵngcc0.ɵɵelementStart(40, "h2", 23);
        ɵngcc0.ɵɵtext(41, " About ACM");
        ɵngcc0.ɵɵelement(42, "span", 24);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(43, "p", 23);
        ɵngcc0.ɵɵtext(44, " A little information about what ACM is and what we do. ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(45, "div", 14);
        ɵngcc0.ɵɵelementStart(46, "div", 25);
        ɵngcc0.ɵɵelementStart(47, "div", 26);
        ɵngcc0.ɵɵelement(48, "i", 27);
        ɵngcc0.ɵɵelementStart(49, "h4");
        ɵngcc0.ɵɵtext(50, "What is ACM?");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(51, "p");
        ɵngcc0.ɵɵtext(52, " The Association for Computing Machinery is a US-based international learned society for computing. It was founded in 1947, and is the world's largest scientific and educational computing society. ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(53, "div", 25);
        ɵngcc0.ɵɵelementStart(54, "div", 26);
        ɵngcc0.ɵɵelement(55, "i", 28);
        ɵngcc0.ɵɵelementStart(56, "h4");
        ɵngcc0.ɵɵtext(57, "What to expect to learn?");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(58, "p");
        ɵngcc0.ɵɵtext(59, " You will learn a variety of skills and techniques through ACM. You can learn both software and hardware from our Chief Software and Chief Hardware officers Sam Butler and Kiyle Winborne ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(60, "div", 25);
        ɵngcc0.ɵɵelementStart(61, "div", 26);
        ɵngcc0.ɵɵelement(62, "i", 29);
        ɵngcc0.ɵɵelementStart(63, "h4");
        ɵngcc0.ɵɵtext(64, "When we meet?");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(65, "p");
        ɵngcc0.ɵɵtext(66, " We meet every other Friday for meetings and talks about information that might be useful to tell people. We meet for coding sessions every other Wednesday to learn about other languages and platforms. ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(67, "section", 30, 31);
        ɵngcc0.ɵɵelementStart(69, "div", 32);
        ɵngcc0.ɵɵelementStart(70, "div", 33);
        ɵngcc0.ɵɵelementStart(71, "div", 34);
        ɵngcc0.ɵɵelementStart(72, "div", 35);
        ɵngcc0.ɵɵelementStart(73, "ul");
        ɵngcc0.ɵɵelementStart(74, "li");
        ɵngcc0.ɵɵelementStart(75, "div", 36);
        ɵngcc0.ɵɵelementStart(76, "h4");
        ɵngcc0.ɵɵtext(77, "Calendar");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(78, "p");
        ɵngcc0.ɵɵtext(79, "Keep Up to date on what events are coming up.");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(80, "div", 37);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(81, "li");
        ɵngcc0.ɵɵelementStart(82, "div", 36);
        ɵngcc0.ɵɵelementStart(83, "h4");
        ɵngcc0.ɵɵtext(84, "Meetings");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(85, "p");
        ɵngcc0.ɵɵtext(86, "When we have meetings for topics and events.");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(87, "div", 38);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(88, "li");
        ɵngcc0.ɵɵelementStart(89, "div", 36);
        ɵngcc0.ɵɵelementStart(90, "h4");
        ɵngcc0.ɵɵtext(91, "Code Documentation");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(92, "p");
        ɵngcc0.ɵɵtext(93, " What is used to help manage source code and documentation. ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(94, "div", 38);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(95, "div", 34);
        ɵngcc0.ɵɵelementStart(96, "div", 39);
        ɵngcc0.ɵɵelementStart(97, "ul");
        ɵngcc0.ɵɵelementStart(98, "li");
        ɵngcc0.ɵɵelement(99, "div", 38);
        ɵngcc0.ɵɵelementStart(100, "div", 40);
        ɵngcc0.ɵɵelementStart(101, "h4");
        ɵngcc0.ɵɵtext(102, "Projects");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(103, "p");
        ɵngcc0.ɵɵtext(104, "What projects we are currently working on or updating.");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(105, "li");
        ɵngcc0.ɵɵelement(106, "div", 38);
        ɵngcc0.ɵɵelementStart(107, "div", 40);
        ɵngcc0.ɵɵelementStart(108, "h4");
        ɵngcc0.ɵɵtext(109, "Session Links");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(110, "p");
        ɵngcc0.ɵɵtext(111, "Informative talks or information for learning purposes.");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(112, "li");
        ɵngcc0.ɵɵelement(113, "div", 38);
        ɵngcc0.ɵɵelementStart(114, "div", 40);
        ɵngcc0.ɵɵelementStart(115, "h4");
        ɵngcc0.ɵɵtext(116, "Ideas");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(117, "p");
        ɵngcc0.ɵɵtext(118, " Section to keep track of project ideas and upcoming projects. ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(119, "section", 41, 42);
        ɵngcc0.ɵɵelementStart(121, "div", 43);
        ɵngcc0.ɵɵelementStart(122, "div", 14);
        ɵngcc0.ɵɵelementStart(123, "div", 21);
        ɵngcc0.ɵɵelementStart(124, "div", 22);
        ɵngcc0.ɵɵelementStart(125, "h2");
        ɵngcc0.ɵɵtext(126, "Meet Our Team");
        ɵngcc0.ɵɵelement(127, "span", 24);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(128, "p");
        ɵngcc0.ɵɵtext(129, " These are the current board memebers of ACM. You can click on them to learn more information and contact them if need be. ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(130, "div", 14);
        ɵngcc0.ɵɵelementStart(131, "div", 44);
        ɵngcc0.ɵɵelementStart(132, "div", 45);
        ɵngcc0.ɵɵelementStart(133, "div", 46);
        ɵngcc0.ɵɵelementStart(134, "strong");
        ɵngcc0.ɵɵelementStart(135, "div", 47);
        ɵngcc0.ɵɵtext(136, "Josue Van Dyke");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(137, "p");
        ɵngcc0.ɵɵtext(138, "Chair");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(139, "div", 44);
        ɵngcc0.ɵɵelementStart(140, "div", 45);
        ɵngcc0.ɵɵelementStart(141, "div", 46);
        ɵngcc0.ɵɵelementStart(142, "strong");
        ɵngcc0.ɵɵelementStart(143, "div", 47);
        ɵngcc0.ɵɵtext(144, "Sam Butler");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(145, "p");
        ɵngcc0.ɵɵtext(146, "Chief Software Engineer");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(147, "div", 44);
        ɵngcc0.ɵɵelementStart(148, "div", 45);
        ɵngcc0.ɵɵelementStart(149, "div", 46);
        ɵngcc0.ɵɵelementStart(150, "strong");
        ɵngcc0.ɵɵelementStart(151, "div", 47);
        ɵngcc0.ɵɵtext(152, "Luke Lengel");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(153, "p");
        ɵngcc0.ɵɵtext(154, "Treasurer/Secretary");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(155, "div", 44);
        ɵngcc0.ɵɵelementStart(156, "div", 45);
        ɵngcc0.ɵɵelementStart(157, "div", 46);
        ɵngcc0.ɵɵelementStart(158, "strong");
        ɵngcc0.ɵɵelementStart(159, "div", 47);
        ɵngcc0.ɵɵtext(160, "Kiyle Winborne");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(161, "p");
        ɵngcc0.ɵɵtext(162, "Chief Hardware Engineer");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(163, "footer", 48);
        ɵngcc0.ɵɵelementStart(164, "div", 43);
        ɵngcc0.ɵɵelementStart(165, "div", 14);
        ɵngcc0.ɵɵelementStart(166, "div", 21);
        ɵngcc0.ɵɵelementStart(167, "div", 49);
        ɵngcc0.ɵɵelement(168, "br");
        ɵngcc0.ɵɵelementStart(169, "p");
        ɵngcc0.ɵɵtext(170, " Copyright \u00A9 2020 All rights reserved ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c6, ctx.currentActive == 0));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c6, ctx.currentActive == 1));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c6, ctx.currentActive == 2));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c6, ctx.currentActive == 3));
    } }, directives: [ɵngcc1.NgClass], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-weight:500}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}h1[_ngcontent-%COMP%]{font-size:48px}h2[_ngcontent-%COMP%]{font-size:30px;color:#232323}h4[_ngcontent-%COMP%]{font-size:18px;color:#232323}h6[_ngcontent-%COMP%]{font-size:14px;color:#232323}h5[_ngcontent-%COMP%]{color:#232323}a[_ngcontent-%COMP%]{transition:.6s}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{color:#666}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus{text-decoration:none;border:none;outline:0}ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.sec-title[_ngcontent-%COMP%]{text-align:center;max-width:400px;margin:0 auto 40px}.sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-bottom:20px;margin-bottom:20px;position:relative;top:-6px}.sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .sec-title-border[_ngcontent-%COMP%]{width:100px;position:absolute;bottom:0;left:0;border-top:4px solid #222;right:0;height:0;margin:auto}.sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .sec-title-border[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:9px;height:9px;position:relative;display:inline-block;margin:0 1px;bottom:23.3px}.sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .sec-title-border[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{background:#222;content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;transform:rotate(45deg)}.mt-100[_ngcontent-%COMP%]{margin-top:100px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.ptb-100[_ngcontent-%COMP%]{padding:100px 0}.ptb-90[_ngcontent-%COMP%]{padding:90px 0}.header[_ngcontent-%COMP%]{display:inline-block}.header.sticky[_ngcontent-%COMP%]   .mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.radius-btn[_ngcontent-%COMP%], .mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.radius-btn[_ngcontent-%COMP%], .radius-btn[_ngcontent-%COMP%]{border:1px solid #fff;color:#fff;border-radius:15px;padding:6px 25px;display:inline-block;text-transform:uppercase;cursor:pointer;font-weight:500;transition:75ms linear}.header.sticky[_ngcontent-%COMP%]   .mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.radius-btn[_ngcontent-%COMP%]:hover, .mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.radius-btn[_ngcontent-%COMP%]:hover, .radius-btn[_ngcontent-%COMP%]:hover{background:#fff;border:1px solid #fff;color:#666}.flexbox-center[_ngcontent-%COMP%]{display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;justify-content:center;align-items:center}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#666}.header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;transition:.4s;width:100%;z-index:99;padding:18px 15px}.mainmenu[_ngcontent-%COMP%]{text-align:left;display:block}.mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;text-transform:uppercase}.mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;color:#fff;position:relative;padding:5px 16px;margin:0 3px;border:1px solid transparent}.slicknav_menu[_ngcontent-%COMP%]{padding:0;background:0 0;display:none}.mainmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .mainmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .slicknav_menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border:1px solid #fff}.header.sticky[_ngcontent-%COMP%]{border-radius:0;border-bottom:transparent;background:linear-gradient(to left,rgba(0,32,85,.8),rgba(0,93,181,.8));background:-moz-linear-gradient(to left,rgba(0,32,85,.8),rgba(0,93,181,.8));padding:20px}.mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.radius-btn[_ngcontent-%COMP%]{margin-left:55px}.hero-area[_ngcontent-%COMP%]{height:100vh;transform:scale(1.1);z-index:1;position:relative;background-image:url(https://3dprintingindustry.com/wp-content/uploads/2014/09/lccc-ridge-campus-3d-printing-industry.png);background-repeat:no-repeat;background-position:center;background-attachment:fixed;background-size:cover;overflow:hidden}.hero-area-wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.hero-area[_ngcontent-%COMP%]::before{content:\"\";top:0;left:0;opacity:.85;right:0;bottom:0;z-index:-1;position:absolute;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%)}.hero-area-content[_ngcontent-%COMP%]{color:#fff;padding:80px 0 170px}.hero-area-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff}.hero-area-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:28px 0 25px}.hero-area-content[_ngcontent-%COMP%]   .radius-btn[_ngcontent-%COMP%]{margin-top:15px;margin-right:15px}.about-area[_ngcontent-%COMP%]{text-align:center;height:100vh;transform:scale(1.2)}.about-area-wrapper[_ngcontent-%COMP%]{margin:0;padding:0;position:relative;top:50%;left:50%;transform:translate(-50%,-50%)}.single-about-box[_ngcontent-%COMP%]{padding:25px;transition:250ms}.single-about-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::before{color:#0074da;font-size:40px;transition:250ms;display:block}.single-about-box.active[_ngcontent-%COMP%], .single-about-box[_ngcontent-%COMP%]:hover{transform:scale(1.025);box-shadow:0 0 5px #ccc}.single-about-box.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::before, .single-about-box[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]::before{color:#000}.single-about-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:25px 0 15px}.feature-area[_ngcontent-%COMP%]{z-index:1;height:100vh;position:relative;background-image:url(https://www.sasaki.com/wp-content/uploads/2019/10/IMG_0046_website-1800x1200.jpg);background-repeat:no-repeat;background-position:center;background-size:cover}.feature-area-wrapper[_ngcontent-%COMP%]{position:relative;margin:0;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.1)}.feature-area[_ngcontent-%COMP%]::before{content:\"\";top:0;left:0;opacity:.85;right:0;bottom:0;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);z-index:-1;position:absolute}.single-feature-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;margin-bottom:5px}.single-feature-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:45px;display:flex}.single-feature-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.feature-box-info[_ngcontent-%COMP%]{flex:5}.feature-box-icon[_ngcontent-%COMP%]{flex:1;font-size:20px;transition:.4s}.single-feature-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .feature-box-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::before{border-radius:0}.single-feature-box[_ngcontent-%COMP%], .single-feature-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .single-feature-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .single-feature-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fff}.feature-box-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::before{border:2px dashed #fff;width:40px;display:inline-block;height:40px;text-align:center;line-height:38px;border-radius:100%;transition:.4s}.single-team-member[_ngcontent-%COMP%]{text-align:center;box-shadow:0 2px 15px -5px #222;background:#fff;transition:.5s}.single-team-member[_ngcontent-%COMP%]:hover{color:#fff;background:linear-gradient(to right,#005db5 67%,#0074d9 100%)}.team-member-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px}.team-member-info[_ngcontent-%COMP%]{padding:20px 10px}.team-member-img[_ngcontent-%COMP%]{position:relative;z-index:1;overflow:hidden;background:#fff;transition:750ms}.team-member-icon[_ngcontent-%COMP%]{position:absolute;top:0;left:-100%;height:100%;width:100%}.team-member-img[_ngcontent-%COMP%]::before{content:\"\";background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);top:0;right:0;width:0;height:100%;position:absolute;opacity:.85}.team-member-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;width:30px;height:30px;display:inline-block;line-height:30px;border:1px solid transparent}.team-member-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border:1px solid #fff}.single-team-member[_ngcontent-%COMP%]:hover   .team-member-img[_ngcontent-%COMP%]::before{width:100%}.single-team-member[_ngcontent-%COMP%]:hover   .team-member-icon[_ngcontent-%COMP%]{left:0}.footer[_ngcontent-%COMP%]{position:relative;z-index:1;padding-bottom:27.5px}.footer[_ngcontent-%COMP%]::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);opacity:.85;z-index:-1}.copyright-area[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.copyright-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.copyright-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:35px;height:35px;color:#0074da;background:#fff;display:inline-block;line-height:35px;font-size:16px;border-radius:100%;margin:0 5px}.copyright-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#0074da;color:#fff}.copyright-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:30px}.copyright-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}.copyright-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;border-bottom:1px solid #fff}.nav-icon[_ngcontent-%COMP%]{float:right}.header-text[_ngcontent-%COMP%]{float:right;margin-right:90px;font-weight:500;font-size:20px}.nav-link[_ngcontent-%COMP%]{padding:.5rem!important;transition:250ms}.nav-link[_ngcontent-%COMP%]:hover{transform:scale(1.05)}@media only screen and (max-width:767px){.header-text[_ngcontent-%COMP%]{float:none!important;margin-right:0}}.logo-text[_ngcontent-%COMP%]{font-size:25px;font-weight:400;padding-top:10px}"] });
LandingComponent.ctorParameters = () => [
    { type: Router },
    { type: ParticlesService }
];
__decorate([
    ViewChild('home')
], LandingComponent.prototype, "homeElement", void 0);
__decorate([
    ViewChild('about')
], LandingComponent.prototype, "aboutElement", void 0);
__decorate([
    ViewChild('feature')
], LandingComponent.prototype, "featureElemet", void 0);
__decorate([
    ViewChild('team')
], LandingComponent.prototype, "teamElement", void 0);
__decorate([
    HostListener('window:scroll', ['$event'])
], LandingComponent.prototype, "scrollHandler", null);

class Environment {
}
Environment.PRODUCTION_HOST = 'acm-microservice-prod';
Environment.DEVELOPMENT_HOST = 'acm-microservice-dev';
Environment.LOCAL_HOST = 'localhost:8080';
Environment.HEROKU_URI = 'herokuapp.com';
Environment.PRODUCTION_PATH = 'acm-web';
Environment.DEVELOPMENT_PATH = 'acm-ui-dev';
Environment.LOCAL_PATH = 'localhost:4200';
Environment.SOCKET_ENDPOINT = '/api/web-notification-app/websocket';

/**
 * URL Service
 *
 * @author Sam Butler
 * @since Dec 15, 2020
 */
let UrlService = class UrlService {
    constructor() {
        this.urlPath = window.location.href;
    }
    /**
     * Get's the host environment
     *
     * @returns string of the host path
     */
    getHost() {
        if (this.urlPath.includes(Environment.PRODUCTION_PATH)) {
            return Environment.PRODUCTION_HOST;
        }
        else if (this.urlPath.includes(Environment.DEVELOPMENT_PATH)) {
            return Environment.DEVELOPMENT_HOST;
        }
        return Environment.LOCAL_HOST;
    }
    /**
     * Get's the web path of the url
     *
     * @returns string of the web path
     */
    getPath() {
        if (this.urlPath.includes(Environment.PRODUCTION_PATH)) {
            return Environment.PRODUCTION_PATH;
        }
        else if (this.urlPath.includes(Environment.DEVELOPMENT_PATH)) {
            return Environment.DEVELOPMENT_PATH;
        }
        return Environment.LOCAL_PATH;
    }
    /**
     * Get's the full web URL
     *
     * @returns string of the full web url
     */
    getWebUrl() {
        if (this.isHttps()) {
            return `https://${this.getPath()}.${Environment.HEROKU_URI}`;
        }
        else if (this.isLocal()) {
            return `http://${this.getPath()}`;
        }
        return `http://${this.getPath()}.${Environment.HEROKU_URI}`;
    }
    /**
     * Get's the full API URL
     *
     * @returns string of the full API url
     */
    getAPIUrl() {
        if (this.isHttps()) {
            return `https://${this.getHost()}.${Environment.HEROKU_URI}`;
        }
        else if (this.isLocal()) {
            return `http://${this.getHost()}`;
        }
        return `http://${this.getHost()}.${Environment.HEROKU_URI}`;
    }
    /**
     * Get's the socket environment
     *
     * @returns string of the socket path
     */
    getSocketPath() {
        const socketType = this.isHttps() ? 'wss://' : 'ws://';
        if (this.isLocal()) {
            return `${socketType}${this.getHost()}${Environment.SOCKET_ENDPOINT}`;
        }
        return `${socketType}${this.getHost()}.${Environment.HEROKU_URI}${Environment.SOCKET_ENDPOINT}`;
    }
    /**
     * Determines if the url is https or http
     *
     * @returns boolean of logical comparison
     */
    isHttps() {
        return this.urlPath.includes('https');
    }
    /**
     * Determines if the url is local
     *
     * @returns boolean of logical comparison
     */
    isLocal() {
        return this.urlPath.includes('localhost');
    }
};
UrlService.ɵfac = function UrlService_Factory(t) { return new (t || UrlService)(); };
UrlService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: UrlService, factory: UrlService.ɵfac });

/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let AuthService = class AuthService {
    constructor(http, urlService, router) {
        this.http = http;
        this.urlService = urlService;
        this.router = router;
    }
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    authenticate(username, password) {
        console.log(`${this.urlService.getAPIUrl()}/authenticate`);
        this.http
            .post(`${this.urlService.getAPIUrl()}/authenticate`, {
            username,
            password,
        })
            .subscribe(() => this.router.navigate(['home']));
    }
};
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(ɵngcc0.ɵɵinject(ɵngcc3.HttpClient), ɵngcc0.ɵɵinject(UrlService), ɵngcc0.ɵɵinject(ɵngcc2.Router)); };
AuthService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac });
AuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: UrlService },
    { type: Router }
];

/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
let UserService = class UserService {
    constructor(http, urlService, router) {
        this.http = http;
        this.urlService = urlService;
        this.router = router;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    createUser(newUser) {
        this.http
            .post(`${this.urlService.getAPIUrl()}/api/acm/users`, newUser)
            .subscribe((r) => this.router.navigate(['/landing']));
    }
};
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(ɵngcc0.ɵɵinject(ɵngcc3.HttpClient), ɵngcc0.ɵɵinject(UrlService), ɵngcc0.ɵɵinject(ɵngcc2.Router)); };
UserService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: UrlService },
    { type: Router }
];

let LoginCardComponent = class LoginCardComponent {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.twitterLink = '';
        this.twitterIcon = 'https://cdn4.iconfinder.com/data/icons/miu-hexagon-flat-social/60/twitter-hexagon-social-media-32.png';
        this.githubLink = 'https://github.com/cse-uprc';
        this.githubIcon = 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_six_gray-256.png';
        this.facebookLink = '';
        this.facebookIcon = 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/Untitled-16-32.png';
        this.loading = false;
    }
    onSignIn(username, password) {
        this.loading = true;
        this.authService.authenticate(username, password);
    }
    onSignUp(firstName, lastName, email) {
        this.loading = true;
        const newUser = {
            firstName,
            lastName,
            email,
        };
        this.userService.createUser(newUser);
    }
};
LoginCardComponent.ɵfac = function LoginCardComponent_Factory(t) { return new (t || LoginCardComponent)(ɵngcc0.ɵɵdirectiveInject(AuthService), ɵngcc0.ɵɵdirectiveInject(UserService)); };
LoginCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LoginCardComponent, selectors: [["ak-login-card"]], decls: 67, vars: 15, consts: [[1, "placeholder-padding", "login-container"], [1, "login-wrap"], [1, "login-html"], ["id", "tab-1", "type", "radio", "name", "tab", "checked", "", 1, "sign-in"], ["for", "tab-1", 1, "tab"], ["id", "tab-2", "type", "radio", "name", "tab", 1, "sign-up"], ["for", "tab-2", 1, "tab"], [1, "login-form"], [1, "sign-in-htm"], [1, "group"], ["for", "user", 1, "label"], ["type", "text", 1, "input", 3, "disabled"], ["username", ""], ["for", "pass", 1, "label"], ["type", "password", "data-type", "password", 1, "input", 3, "disabled"], ["pass", ""], [1, "forgot"], ["type", "submit", "class", "button", "value", "Sign In", 3, "click", 4, "ngIf", "ngIfElse"], [1, "hr"], [1, "social"], [1, "inline-block"], ["target", "_blank", 1, "target-pointer", 3, "href"], [1, "social-icon", 3, "src"], [1, "social-text"], [1, "sign-up-htm"], ["first", ""], ["last", ""], ["type", "email", 1, "input", 3, "disabled"], ["email", ""], ["type", "submit", "class", "button", "value", "Sign Up", 3, "click", 4, "ngIf", "ngIfElse"], [1, "foot-lnk"], ["for", "tab-1", 1, "target-pointer"], ["loader", ""], ["type", "submit", "value", "Sign In", 1, "button", 3, "click"], ["type", "submit", "value", "Sign Up", 1, "button", 3, "click"], [1, "loader"]], template: function LoginCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "input", 3);
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵtext(5, "Sign In");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(6, "input", 5);
        ɵngcc0.ɵɵelementStart(7, "label", 6);
        ɵngcc0.ɵɵtext(8, "Sign Up");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 7);
        ɵngcc0.ɵɵelementStart(10, "div", 8);
        ɵngcc0.ɵɵelementStart(11, "div", 9);
        ɵngcc0.ɵɵelementStart(12, "label", 10);
        ɵngcc0.ɵɵtext(13, "Username");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(14, "input", 11, 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "div", 9);
        ɵngcc0.ɵɵelementStart(17, "label", 13);
        ɵngcc0.ɵɵtext(18, "Password");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(19, "input", 14, 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "div", 9);
        ɵngcc0.ɵɵelementStart(22, "label", 16);
        ɵngcc0.ɵɵtext(23, "Forgot Password?");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "div", 9);
        ɵngcc0.ɵɵtemplate(25, LoginCardComponent_input_25_Template, 1, 0, "input", 17);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(26, "div", 18);
        ɵngcc0.ɵɵelementStart(27, "div", 19);
        ɵngcc0.ɵɵelementStart(28, "div", 20);
        ɵngcc0.ɵɵelementStart(29, "a", 21);
        ɵngcc0.ɵɵelement(30, "img", 22);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(31, "div", 23);
        ɵngcc0.ɵɵtext(32, "Twitter");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(33, "div", 20);
        ɵngcc0.ɵɵelementStart(34, "a", 21);
        ɵngcc0.ɵɵelement(35, "img", 22);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(36, "div", 23);
        ɵngcc0.ɵɵtext(37, "Github");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(38, "div", 20);
        ɵngcc0.ɵɵelementStart(39, "a", 21);
        ɵngcc0.ɵɵelement(40, "img", 22);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(41, "div", 23);
        ɵngcc0.ɵɵtext(42, "Facebook");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(43, "div", 24);
        ɵngcc0.ɵɵelementStart(44, "div", 9);
        ɵngcc0.ɵɵelementStart(45, "label", 10);
        ɵngcc0.ɵɵtext(46, "First Name");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(47, "input", 11, 25);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(49, "div", 9);
        ɵngcc0.ɵɵelementStart(50, "label", 13);
        ɵngcc0.ɵɵtext(51, "Last Name");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(52, "input", 11, 26);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(54, "div", 9);
        ɵngcc0.ɵɵelementStart(55, "label", 13);
        ɵngcc0.ɵɵtext(56, "Email Address");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(57, "input", 27, 28);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(59, "div", 9);
        ɵngcc0.ɵɵtemplate(60, LoginCardComponent_input_60_Template, 1, 0, "input", 29);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(61, "div", 18);
        ɵngcc0.ɵɵelementStart(62, "div", 30);
        ɵngcc0.ɵɵelementStart(63, "label", 31);
        ɵngcc0.ɵɵtext(64, "Already Member?");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(65, LoginCardComponent_ng_template_65_Template, 1, 0, "ng-template", null, 32, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r7 = ɵngcc0.ɵɵreference(66);
        ɵngcc0.ɵɵadvance(14);
        ɵngcc0.ɵɵproperty("disabled", ctx.loading);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("disabled", ctx.loading);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.loading)("ngIfElse", _r7);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("href", ctx.twitterLink, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.twitterIcon, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("href", ctx.githubLink, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.githubIcon, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("href", ctx.facebookLink, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.facebookIcon, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("disabled", ctx.loading);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("disabled", ctx.loading);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("disabled", ctx.loading);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.loading)("ngIfElse", _r7);
    } }, directives: [ɵngcc1.NgIf], styles: [".login-container[_ngcontent-%COMP%]{margin:0;color:#6a6f8c;font:600 16px/18px \"Open Sans\",sans-serif}.clearfix[_ngcontent-%COMP%]:after, .clearfix[_ngcontent-%COMP%]:before{content:\"\";display:table}.clearfix[_ngcontent-%COMP%]:after{clear:both;display:block}.login-wrap[_ngcontent-%COMP%]{width:100%;margin:auto;max-width:525px;min-height:670px;position:relative;background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) center/cover no-repeat;box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.login-html[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;padding:90px 70px 50px;background:rgba(40,57,101,.9)}.login-html[_ngcontent-%COMP%]   .sign-in-htm[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up-htm[_ngcontent-%COMP%]{top:0;left:0;right:0;bottom:0;position:absolute;transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:.4s linear}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]{display:none}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{text-transform:uppercase}.login-html[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{cursor:pointer;font-size:22px;padding-bottom:5px;margin:0 15px 10px 0;display:inline-block;border-bottom:2px solid transparent}.login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%]{color:#fff;border-color:#1161ee}.login-form[_ngcontent-%COMP%]{margin-top:20px;min-height:345px;position:relative;perspective:1000px;transform-style:preserve-3d}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{margin-bottom:15px}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{width:100%;color:#fff;display:block}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:none;padding:15px 20px;border-radius:25px;background:rgba(255,255,255,.1)}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   input[data-type=password][_ngcontent-%COMP%]{-webkit-text-security:circle}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#aaa;font-size:12px}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background:#1161ee}.button[_ngcontent-%COMP%]{transition:.5s}.button[_ngcontent-%COMP%]:hover{background:#1153c4!important}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:15px;height:15px;border-radius:2px;position:relative;display:inline-block;background:rgba(255,255,255,.1)}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after, .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before{content:\"\";width:10px;height:2px;background:#fff;position:absolute;transition:.2s ease-in-out}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before{left:3px;width:5px;bottom:6px;transform:scale(0) rotate(0)}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after{top:6px;right:0;transform:scale(0) rotate(0)}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{color:#fff}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background:#1161ee}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before{transform:scale(1) rotate(45deg)}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after{transform:scale(1) rotate(-45deg)}.login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%] + .sign-up[_ngcontent-%COMP%] + .tab[_ngcontent-%COMP%] + .login-form[_ngcontent-%COMP%]   .sign-in-htm[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%] + .login-form[_ngcontent-%COMP%]   .sign-up-htm[_ngcontent-%COMP%]{transform:rotate(0)}.hr[_ngcontent-%COMP%]{height:2px;margin:30px 0;background:rgba(255,255,255,.2)}.foot-lnk[_ngcontent-%COMP%]{text-align:center;cursor:pointer;color:#fff}.forgot[_ngcontent-%COMP%]{cursor:pointer;transition:.2s ease-in}.forgot[_ngcontent-%COMP%]:hover{color:#fff}.social[_ngcontent-%COMP%]{text-align:center}.social-icon[_ngcontent-%COMP%]{width:50px;margin:0 15px;transition:transform .1s}.social-icon[_ngcontent-%COMP%]:hover{transform:scale(1.5)}.social-text[_ngcontent-%COMP%]{margin:10px}.placeholder-padding[_ngcontent-%COMP%]{padding:100px 0}@media only screen and (max-width:525px){.placeholder-padding[_ngcontent-%COMP%]{padding:0}.login-wrap[_ngcontent-%COMP%]{min-height:100vh}}"] });
LoginCardComponent.ctorParameters = () => [
    { type: AuthService },
    { type: UserService }
];

let NavbarComponent = class NavbarComponent {
    constructor() {
        this.title = '';
        this.sidebarClicked = new EventEmitter();
    }
    toggleSidebar() {
        this.sidebarClicked.emit(true);
    }
};
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["ak-navbar"]], inputs: { title: "title" }, outputs: { sidebarClicked: "sidebarClicked" }, decls: 9, vars: 1, consts: [[1, "nav", "acm-nav"], [1, "header-container"], [1, "nav-icon", 3, "click"], [1, "logo-container"], ["href", "#home"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "ak-icon-hamburger", 2);
        ɵngcc0.ɵɵlistener("click", function NavbarComponent_Template_ak_icon_hamburger_click_3_listener() { return ctx.toggleSidebar(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "a", 4);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 1);
        ɵngcc0.ɵɵelement(8, "ak-icon-bell");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
    } }, directives: [HamburgerIconComponent,
        BellIconComponent], styles: ["body[_ngcontent-%COMP%]{background-color:#edf1f7}.nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;max-width:1920px;margin-left:auto;margin-right:auto;width:100%}.nav-icon[_ngcontent-%COMP%]{color:#8f9bb3;cursor:pointer}.acm-nav[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);overflow:hidden;padding:1.25rem;height:4.75rem;position:fixed;top:0;left:0;right:0;z-index:1040}.acm-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#222b45;text-align:center;padding:0 20px;text-decoration:none;font-size:28px}.header-container[_ngcontent-%COMP%], .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}@media only screen and (max-width:380px){.acm-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px}}"] });
__decorate([
    Input()
], NavbarComponent.prototype, "title", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "sidebarClicked", void 0);

let SiderbarComponent = class SiderbarComponent {
    constructor(router) {
        this.router = router;
        this.items = [
            { name: 'Dashboard', icon: 'house', link: '/home/dashboard' },
            { name: 'Classroom', icon: 'classroom', link: '/home/classroom' },
            { name: 'Resources', icon: 'resources', link: '/home/resources' },
            { name: 'Teachers', icon: 'teachers', link: '/home/teachers' },
            {
                name: 'Student Advisors',
                icon: 'board-members',
                link: '/home/student-advisors',
            },
            { name: 'Video Lectures', icon: 'video', link: '/home/video-lectures' },
            { name: 'Calendar', icon: 'calendar', link: '/home/calendar' },
            { name: 'Event Sign Up', icon: 'contract', link: '/home/event-sign-up' },
            { name: 'ACM Information', icon: 'info', link: '/home/acm-information' },
            { name: 'Bot Service Info', icon: 'robot', link: '/home/bot-service-info' },
            { name: 'About Us', icon: 'question', link: '/home/about-us' },
            {
                name: 'Contact Services',
                icon: 'contact',
                link: '/home/contact-services',
            },
        ];
        this.sidebarOpen = true;
    }
    ngOnInit() {
        this.path = window.location.pathname;
    }
    route(item) {
        this.path = item.link;
        this.router.navigate([item.link]);
    }
    open() {
        document.getElementById('sidebar').style.width = '16rem';
        this.sidebarOpen = true;
    }
    close() {
        document.getElementById('sidebar').style.width = '3.5rem';
        this.sidebarOpen = false;
    }
    toggle() {
        if (this.sidebarOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    isOpen() {
        return this.sidebarOpen;
    }
};
SiderbarComponent.ɵfac = function SiderbarComponent_Factory(t) { return new (t || SiderbarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
SiderbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SiderbarComponent, selectors: [["ak-sidebar"]], inputs: { items: "items" }, decls: 6, vars: 1, consts: [["id", "sidebar", 1, "menu-items", "scrollable"], ["class", "menu-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "menu-item"], [1, "title"], [1, "menu-item", 3, "click"], [1, "icon", 3, "icon", "ngClass"], ["class", "title", 3, "ngClass", 4, "ngIf"], [1, "title", 3, "ngClass"]], template: function SiderbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, SiderbarComponent_li_1_Template, 4, 5, "li", 1);
        ɵngcc0.ɵɵelementStart(2, "li", 2);
        ɵngcc0.ɵɵelementStart(3, "a");
        ɵngcc0.ɵɵelement(4, "ak-icon");
        ɵngcc0.ɵɵelement(5, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [ɵngcc1.NgForOf, IconComponent, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: ["li[_ngcontent-%COMP%]{border-bottom:1px solid #edf1f7}.fixed[_ngcontent-%COMP%]{position:fixed}.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.scrollable[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.menu-items[_ngcontent-%COMP%]{overflow-y:scroll;color:#222b45;top:0;left:0;bottom:0;height:100%;width:16rem;z-index:0;font-weight:400;margin:4.75rem 0 0;padding:0;position:fixed;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;transition:.5s}.menu-item[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex:1 0 auto;vertical-align:text-top}.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:#8f9bb3;margin:0 .5rem 0 0;transition:.4s}.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover, .menu-item[_ngcontent-%COMP%]:hover{color:#36f}.item-selected[_ngcontent-%COMP%]{color:#36f!important}"] });
SiderbarComponent.ctorParameters = () => [
    { type: Router }
];
__decorate([
    Input()
], SiderbarComponent.prototype, "items", void 0);

const TOKEN_NAME = 'token';
/**
 * JWT class to handle all the modifications of a users jwt token
 * and handling the storing and retrieval of the token.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let JwtService = class JwtService {
    constructor(router) {
        this.router = router;
    }
    /**
     * Get the current cached token
     *
     * @return String value of the token
     */
    getToken() {
        return localStorage.getItem(TOKEN_NAME);
    }
    /**
     * Sets the jwt token for the current active user
     *
     * @param token - the token to store in the local cache
     */
    setToken(token) {
        localStorage.setItem(TOKEN_NAME, token);
    }
    /**
     * Get the expiration date of the currently stored token
     *
     * @return Tokens expiration date
     */
    getTokenExpirationDate() {
        const exp = this.getDecodedToken().exp;
        if (exp === undefined) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(exp);
        return date;
    }
    /**
     * Checks to see if the users token is expired
     *
     * @return Boolean indicating if the token is expired
     */
    isTokenExpired() {
        const date = this.getTokenExpirationDate();
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    }
    /**
     * Confirms that the users token is valid
     *
     * @return Boolean saying if the token is valid or not
     */
    isValidToken() {
        if (localStorage.getItem(TOKEN_NAME) != null) {
            if (this.isTokenExpired()) {
                localStorage.removeItem(TOKEN_NAME);
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Gets the decoded token object
     *
     * @return Object of the decoded token
     */
    getDecodedToken() {
        return jwt_decode(this.getToken());
    }
    /**
     * Get method to get a certain field from the users token
     *
     * @param field - The field we want to get from the token
     * @return the object the field contains
     */
    get(field) {
        const decoded = jwt_decode(this.getToken());
        return decoded[field];
    }
    /**
     * Checks to see if the user is logged in
     *
     * @return A boolean value indicating that status of the user
     */
    isUserLoggedIn() {
        return localStorage.getItem(TOKEN_NAME) !== null;
    }
    /**
     * Logs the user out and deletes their token from the local cache
     */
    logout() {
        localStorage.removeItem(TOKEN_NAME);
        this.router.navigate(['login']);
    }
};
JwtService.ɵfac = function JwtService_Factory(t) { return new (t || JwtService)(ɵngcc0.ɵɵinject(ɵngcc2.Router)); };
JwtService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: JwtService, factory: JwtService.ɵfac });
JwtService.ctorParameters = () => [
    { type: Router }
];

const defaultStompConfig = {
    // Which server?
    brokerURL: '',
    // How often to heartbeat?
    // Interval in milliseconds, set to 0 to disable
    heartbeatIncoming: 20000,
    heartbeatOutgoing: 20000,
    // Wait in milliseconds before attempting auto reconnect
    // Set to 0 to disable
    // Typical value 500 (500 milli seconds)
    reconnectDelay: 5000,
};
let StompUrlService = class StompUrlService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    /**
     * Builds the broker URL.
     * @param subdomain The subdomain.
     */
    buildBrokerUrl() {
        return this.urlService.getSocketPath();
    }
};
StompUrlService.ɵfac = function StompUrlService_Factory(t) { return new (t || StompUrlService)(ɵngcc0.ɵɵinject(UrlService)); };
StompUrlService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: StompUrlService, factory: StompUrlService.ɵfac });
StompUrlService.ctorParameters = () => [
    { type: UrlService }
];
/**
 * A factory for creating an InjectableRxStompConfig for use with Insite notifications.
 * @param stompUrlService The STOMP URL service
 */
const stompConfigFactory = (stompUrlService) => {
    return Object.assign(Object.assign({}, defaultStompConfig), { brokerURL: stompUrlService.buildBrokerUrl() });
};

/**
 * Stomp Service
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
let StompWebsocketService = class StompWebsocketService extends RxStompService {
    constructor() {
        super();
        this.isActivated = false;
    }
    /**
     * Initiate the connection with the broker.
     * If the connection breaks, as per reconnectDelay,it will keep trying to reconnect.
     */
    activate() {
        if (!this.isActivated) {
            this.isActivated = true;
            super.activate();
        }
    }
    /**
     * Disconnect if connected and stop auto reconnect loop.
     * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
     *
     * To reactivate you can call activate.
     */
    deactivate() {
        this.isActivated = false;
        super.deactivate();
    }
    watch(destination) {
        return super.watch(destination).pipe(map((message) => this.parse(message)));
    }
    /**
     * Parses an IMessage into an StompMessage.
     * @param message The message to parse
     */
    parse(message) {
        const instance = message.body ? JSON.parse(message.body) : null;
        return Object.assign(Object.assign({}, message), { data: instance });
    }
};
StompWebsocketService.ɵfac = function StompWebsocketService_Factory(t) { return new (t || StompWebsocketService)(); };
StompWebsocketService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: StompWebsocketService, factory: StompWebsocketService.ɵfac });
/**
 * Factory to create an setup the StompWebsocketService.
 * @param authService The AuthService
 */
const stompWebsocketServiceFactory = (stompConfig) => {
    const service = new StompWebsocketService();
    service.configure(stompConfig);
    return service;
};

const ɵ0 = stompWebsocketServiceFactory, ɵ1 = stompConfigFactory;
let StompWebsocketModule = class StompWebsocketModule {
};
StompWebsocketModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: StompWebsocketModule });
StompWebsocketModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function StompWebsocketModule_Factory(t) { return new (t || StompWebsocketModule)(); }, providers: [
        StompUrlService,
        {
            provide: StompWebsocketService,
            useFactory: ɵ0,
            deps: [InjectableRxStompConfig]
        },
        {
            provide: InjectableRxStompConfig,
            useFactory: ɵ1,
            deps: [StompUrlService]
        },
    ] });

let ServicesModule = class ServicesModule {
};
ServicesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ServicesModule });
ServicesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, providers: [
        AuthService,
        ParticlesService,
        UserService,
        JwtService,
        UrlService,
    ], imports: [[BrowserModule, HttpClientModule],
        StompWebsocketModule] });

let AcmkitLibModule = class AcmkitLibModule {
};
AcmkitLibModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AcmkitLibModule });
AcmkitLibModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AcmkitLibModule_Factory(t) { return new (t || AcmkitLibModule)(); }, imports: [[
            BrowserModule,
            RouterModule,
            BrowserAnimationsModule,
            HttpClientModule,
            ServicesModule,
            IconsModule,
        ],
        ServicesModule,
        IconsModule] });

let AcmkitLibService = class AcmkitLibService {
    constructor() { }
};
AcmkitLibService.ɵfac = function AcmkitLibService_Factory(t) { return new (t || AcmkitLibService)(); };
AcmkitLibService.ɵprov = ɵɵdefineInjectable({ factory: function AcmkitLibService_Factory() { return new AcmkitLibService(); }, token: AcmkitLibService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AcmkitLibComponent, [{
        type: Component,
        args: [{
                selector: 'ak-test-component',
                template: `
    <p>
      Library is Working! On Version 1.0.3 Finally
    </p>
  `
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BellIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-bell',
                template: "<svg\r\n  viewBox=\"0 0 24 24\"\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"32px\"\r\n  height=\"32px\"\r\n>\r\n  <path\r\n    d=\"M12,24c1.6,0,2.9-1.1,3.3-2.6H8.7C9.1,22.9,10.4,24,12,24z M18.9,14.6v-6c0-2.8-1.8-5.4-4.5-6.4L13.7,0h-3.5\r\n  \tL9.5,2.2c-2.7,1-4.5,3.6-4.5,6.4v6c0,1.4-1.2,2.6-2.6,2.6v2.6h19v-2.6C20.1,17.1,18.9,16,18.9,14.6z\"\r\n    fill=\"#A8A8A8\"\r\n  />\r\n</svg>"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BoardMemebersIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-board-members',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 64 64\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <path\r\n    d=\"m25 15c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m41 22c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m48 41c-2.20557 0-4 1.79395-4 4 0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405 0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4zm-2 4c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm6.89941 8h-9.79883c.46436-2.2793 2.48486-4 4.89941-4s4.43507 1.7207 4.89942 4z\"\r\n  />\r\n  <path\r\n    d=\"m25 61c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m57.96027 31.66595c.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405 0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405zm-4.96027-2.66595c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm-2.89941 8c.46436-2.2793 2.48486-4 4.89941-4s4.43506 1.7207 4.89941 4z\"\r\n  />\r\n  <path\r\n    d=\"m9 22c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m9 54c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79883c.46436-2.2793 2.48487-4 4.89942-4z\"\r\n  />\r\n  <path\r\n    d=\"m2 38c0 .55273.44775 1 1 1h12c.55225 0 1-.44727 1-1 0-2.80066-1.65747-5.21588-4.03973-6.33405.63922-.70916 1.03973-1.63806 1.03973-2.66595 0-2.20605-1.79443-4-4-4s-4 1.79395-4 4c0 1.02789.40051 1.95679 1.03973 2.66595-2.38226 1.11817-4.03973 3.53339-4.03973 6.33405zm5-9c0-1.10254.89697-2 2-2s2 .89746 2 2-.89697 2-2 2-2-.89746-2-2zm2 4c2.41455 0 4.43506 1.7207 4.89941 4h-9.79882c.46435-2.2793 2.48486-4 4.89941-4z\"\r\n  />\r\n  <path\r\n    d=\"m21 32c0 6.06543 4.93457 11 11 11s11-4.93457 11-11-4.93457-11-11-11-11 4.93457-11 11zm11-9c4.9624 0 9 4.03711 9 9s-4.0376 9-9 9-9-4.03711-9-9 4.0376-9 9-9z\"\r\n  />\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-calendar',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392\r\n\t\t\tc33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188\r\n\t\t\th432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"76\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"156\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"236\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"316\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"396\" y=\"230\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"76\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"156\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"236\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"316\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"76\" y=\"390\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"156\" y=\"390\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"236\" y=\"390\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"316\" y=\"390\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <rect x=\"396\" y=\"310\" width=\"40\" height=\"40\" />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClassroomIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-classroom',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 64 64\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g id=\"blackboard-board-classroom-presentation-chalkboard\">\r\n    <path\r\n      d=\"M60,38.18V11.82A3,3,0,0,0,59,6H35V5a3,3,0,0,0-6,0V6H5a3,3,0,0,0-1,5.82V38.18A3,3,0,0,0,5,44H8v6.18a3,3,0,1,0,2,0V44H22.96L10.21,60.39a1,1,0,0,0-.11,1.05A1.012,1.012,0,0,0,11,62h5a.985.985,0,0,0,.79-.39L29,45.91V61a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V45.91l12.21,15.7A.985.985,0,0,0,48,62h5a1.012,1.012,0,0,0,.9-.56,1,1,0,0,0-.11-1.05L41.04,44H59a3,3,0,0,0,1-5.82ZM31,5a1,1,0,0,1,2,0V6H31ZM5,8H59a1,1,0,0,1,0,2H5A1,1,0,0,1,5,8Zm53,4V38H6V12ZM9,54a1,1,0,1,1,1-1A1,1,0,0,1,9,54Zm6.51,6H13.04L25.49,44h2.47ZM33,60H31V44h2Zm17.96,0H48.49L36.04,44h2.47ZM59,42H5a1,1,0,0,1,0-2H59a1,1,0,0,1,0,2Z\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContactIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-contact',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g id=\"XMLID_1750_\">\r\n    <g id=\"XMLID_831_\">\r\n      <path\r\n        id=\"XMLID_834_\"\r\n        d=\"m354.404 344.404h-30.689l-15.942-7.095v-19.357c22.321-12.297 39.832-32.285 48.944-56.368h13.676c32.567 0 59.063-26.496 59.063-59.063 0-21.029-11.056-39.515-27.652-49.982v-6.735c.001-80.397-65.407-145.804-145.804-145.804s-145.805 65.407-145.805 145.805v6.73c-16.6 10.467-27.659 28.954-27.659 49.986 0 32.567 26.496 59.063 59.063 59.063h13.683c9.112 24.083 26.623 44.071 48.944 56.368v19.277l-16.121 7.174h-30.51c-86.898.001-157.595 70.699-157.595 157.597 0 5.522 4.477 10 10 10h201c5.523 0 10-4.478 10-10s-4.477-10-10-10h-190.641c4.986-69.108 61.239-124.232 130.816-127.444-.026.084-.062.164-.086.248-.811 2.85-.316 5.912 1.35 8.362l47.305 69.544c1.676 2.464 4.363 4.052 7.329 4.332.314.029.628.044.941.044 2.639 0 5.186-1.045 7.07-2.929l40.827-40.827 40.826 40.827c1.884 1.884 4.432 2.929 7.07 2.929.312 0 .626-.015.94-.044 2.967-.28 5.654-1.868 7.33-4.332l47.306-69.544c1.666-2.449 2.16-5.513 1.35-8.362-.025-.087-.061-.168-.088-.254 69.66 3.125 126.006 58.284 130.996 127.451h-190.641c-5.522 0-10 4.478-10 10s4.478 10 10 10h201c5.522 0 10-4.478 10-10 0-86.899-70.697-157.597-157.596-157.597zm-10.967-188.787c-20.545-2.821-39.825-11.007-56.206-23.967-3.591-2.842-8.656-2.88-12.291-.091-21.482 16.482-47.18 25.194-74.314 25.194-10.89 0-21.628-1.451-32.029-4.27v-5.084c0-48.192 39.207-87.399 87.399-87.399s87.4 39.207 87.4 87.399c.001 0 .02 7.95.041 8.218zm26.957 85.968h-6.757v-78.127h6.757c21.54 0 39.063 17.523 39.063 39.064 0 21.539-17.523 39.063-39.063 39.063zm-114.394-221.585c68.957 0 125.124 55.769 125.789 124.572-3.689-.724-7.497-1.114-11.396-1.114h-7.077c-2.082-57.401-49.419-103.458-107.32-103.458s-105.238 46.057-107.32 103.458h-7.076c-3.896 0-7.701.389-11.389 1.113.666-68.802 56.833-124.571 125.789-124.571zm-107.644 221.585h-6.756c-21.54 0-39.063-17.524-39.063-39.064s17.523-39.064 39.063-39.064h6.757v78.128zm20-17.98v-50.54c10.536 2.448 21.341 3.688 32.27 3.688 29.018 0 56.629-8.565 80.319-24.845 18.62 13.124 40.042 21.272 62.691 23.886v48.349c-.057 9.374-1.593 18.403-4.386 26.866h-47.754c-4.132-11.684-15.284-20.08-28.364-20.08h-13.387c-16.586 0-30.079 13.494-30.079 30.08s13.493 30.08 30.079 30.08h13.387c13.081 0 24.233-8.396 28.364-20.08h38.188c-15.615 24.191-42.81 40.239-73.684 40.239-48.327 0-87.644-39.316-87.644-87.643zm104.857 37.404c0 5.559-4.521 10.08-10.08 10.08h-13.387c-5.558 0-10.079-4.521-10.079-10.08s4.521-10.08 10.079-10.08h13.387c5.558 0 10.08 4.521 10.08 10.08zm-17.213 70.239c11.056 0 21.726-1.678 31.773-4.788v16.722l-31.862 31.862-31.685-31.684v-16.9c10.048 3.11 20.718 4.788 31.774 4.788zm-46.515 90.223-33.778-49.658 33.692-14.994 32.369 32.369zm92.851 0-32.283-32.283 32.369-32.369 33.693 14.994z\"\r\n      />\r\n      <path\r\n        id=\"XMLID_843_\"\r\n        d=\"m256 492c-2.63 0-5.21 1.069-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.069-2.931c1.861-1.859 2.931-4.439 2.931-7.069s-1.07-5.21-2.931-7.07c-1.859-1.861-4.439-2.93-7.069-2.93z\"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContractIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-contract',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M498.791,161.127c-17.545-17.546-46.094-17.545-63.645,0.004c-5.398,5.403-39.863,39.896-45.128,45.166V87.426\r\n\t\t\tc0-12.02-4.681-23.32-13.181-31.819L334.412,13.18C325.913,4.68,314.612,0,302.592,0H45.018c-24.813,0-45,20.187-45,45v422\r\n\t\t\tc0,24.813,20.187,45,45,45h300c24.813,0,45-20.187,45-45V333.631L498.79,224.767C516.377,207.181,516.381,178.715,498.791,161.127\r\n\t\t\tz M300.019,30c2.834,0,8.295-0.491,13.18,4.393l42.426,42.427c4.76,4.761,4.394,9.978,4.394,13.18h-60V30z M360.018,467\r\n\t\t\tc0,8.271-6.728,15-15,15h-300c-8.271,0-15-6.729-15-15V45c0-8.271,6.729-15,15-15h225v75c0,8.284,6.716,15,15,15h75v116.323\r\n\t\t\tc0,0-44.254,44.292-44.256,44.293l-21.203,21.204c-1.646,1.646-2.888,3.654-3.624,5.863l-21.214,63.64\r\n\t\t\tc-1.797,5.39-0.394,11.333,3.624,15.35c4.023,4.023,9.968,5.419,15.35,3.624l63.64-21.213c2.209-0.736,4.217-1.977,5.863-3.624\r\n\t\t\tl1.82-1.82V467z M326.378,312.427l21.213,21.213l-8.103,8.103l-31.819,10.606l10.606-31.82L326.378,312.427z M368.8,312.422\r\n\t\t\tl-21.213-21.213c11.296-11.305,61.465-61.517,72.105-72.166l21.213,21.213L368.8,312.422z M477.573,203.558l-15.463,15.476\r\n\t\t\tl-21.213-21.213l15.468-15.481c5.852-5.849,15.366-5.848,21.214,0C483.426,188.19,483.457,197.673,477.573,203.558z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M285.018,150h-210c-8.284,0-15,6.716-15,15s6.716,15,15,15h210c8.284,0,15-6.716,15-15S293.302,150,285.018,150z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M225.018,210h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,210,225.018,210z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M225.018,270h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,270,225.018,270z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M225.018,330h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15S233.302,330,225.018,330z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M285.018,422h-90c-8.284,0-15,6.716-15,15s6.716,15,15,15h90c8.284,0,15-6.716,15-15S293.302,422,285.018,422z\"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HamburgerIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-hamburger',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"2rem\"\r\n  height=\"2rem\"\r\n  viewBox=\"0 0 24 24\"\r\n  class=\"eva eva-menu-2-outline\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g data-name=\"Layer 2\">\r\n    <g data-name=\"menu-2\">\r\n      <rect\r\n        width=\"24\"\r\n        height=\"24\"\r\n        transform=\"rotate(180 12 12)\"\r\n        opacity=\"0\"\r\n      ></rect>\r\n      <circle cx=\"4\" cy=\"12\" r=\"1\"></circle>\r\n      <rect x=\"7\" y=\"11\" width=\"14\" height=\"2\" rx=\".94\" ry=\".94\"></rect>\r\n      <rect x=\"3\" y=\"16\" width=\"18\" height=\"2\" rx=\".94\" ry=\".94\"></rect>\r\n      <rect x=\"3\" y=\"6\" width=\"18\" height=\"2\" rx=\".94\" ry=\".94\"></rect>\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HouseIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-house',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  viewBox=\"0 0 24 24\"\r\n  class=\"eva eva-home-outline\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g data-name=\"Layer 2\">\r\n    <g data-name=\"home\">\r\n      <path\r\n        d=\"M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z\"\r\n      ></path>\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon',
                template: "<div style=\"display: inline-block;\">\r\n  <ak-icon-house *ngIf=\"icon === 'house'\"></ak-icon-house>\r\n  <ak-icon-bell *ngIf=\"icon === 'bell'\"></ak-icon-bell>\r\n  <ak-icon-hamburger *ngIf=\"icon === 'hamburger'\"></ak-icon-hamburger>\r\n  <ak-icon-video *ngIf=\"icon === 'video'\"></ak-icon-video>\r\n  <ak-icon-classroom *ngIf=\"icon === 'classroom'\"></ak-icon-classroom>\r\n  <ak-icon-resources *ngIf=\"icon === 'resources'\"></ak-icon-resources>\r\n  <ak-icon-teachers *ngIf=\"icon === 'teachers'\"></ak-icon-teachers>\r\n  <ak-icon-board-members\r\n    *ngIf=\"icon === 'board-members'\"\r\n  ></ak-icon-board-members>\r\n  <ak-icon-contract\r\n    style=\"margin-left: 2px;\"\r\n    *ngIf=\"icon === 'contract'\"\r\n  ></ak-icon-contract>\r\n  <ak-icon-calendar *ngIf=\"icon === 'calendar'\"></ak-icon-calendar>\r\n  <ak-icon-info *ngIf=\"icon === 'info'\"></ak-icon-info>\r\n  <ak-icon-robot *ngIf=\"icon === 'robot'\"></ak-icon-robot>\r\n  <ak-icon-question *ngIf=\"icon === 'question'\"></ak-icon-question>\r\n  <ak-icon-contact *ngIf=\"icon === 'contact'\"></ak-icon-contact>\r\n</div>\r\n"
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InfoIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-info',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 330 330\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <path\r\n      d=\"M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z\r\n\t\t M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z\"\r\n    />\r\n    <path\r\n      d=\"M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991\r\n\t\tc11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z\"\r\n    />\r\n    <path\r\n      d=\"M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z\r\n\t\t\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(QuestionIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-question',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <path\r\n      d=\"m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z\"\r\n    />\r\n    <path\r\n      d=\"m256 368c-8.836 0-16-7.164-16-16 0-40.386 15.727-78.354 44.285-106.912 17.872-17.873 27.715-41.635 27.715-66.911 0-27.668-22.509-50.177-50.177-50.177h-3.646c-27.668 0-50.177 22.509-50.177 50.177v5.823c0 8.836-7.164 16-16 16s-16-7.164-16-16v-5.823c0-45.313 36.864-82.177 82.177-82.177h3.646c45.313 0 82.177 36.864 82.177 82.177 0 33.823-13.171 65.622-37.088 89.539-22.514 22.513-34.912 52.446-34.912 84.284 0 8.836-7.164 16-16 16z\"\r\n    />\r\n    <path\r\n      d=\"m256.02 432c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16z\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResourcesIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-resources',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  viewBox=\"0 0 64 64\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <path\r\n      d=\"m26 14c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z\"\r\n    />\r\n    <path\r\n      d=\"m61.879 56.464-10.879-10.878v-39.586c0-.552-.447-1-1-1h-3v-3c0-.552-.447-1-1-1h-34c-.266 0-.52.105-.707.293l-10 10c-.188.187-.293.442-.293.707v46c0 .552.447 1 1 1h3v3c0 .552.447 1 1 1h44c.553 0 1-.448 1-1v-5.587l5.465 5.465c.723.724 1.683 1.122 2.707 1.122 2.11 0 3.828-1.717 3.828-3.829 0-1.022-.398-1.983-1.121-2.707zm-12.879-49.464v36.586l-2-2v-34.586zm-38-2.586v6.586h-6.586zm-8 8.586h9c.553 0 1-.448 1-1v-9h32v36.586l-1.655-1.655c.399-.755.29-1.71-.345-2.345l-2.619-2.619c1.026-2.11 1.619-4.468 1.619-6.967 0-8.822-7.178-16-16-16s-16 7.178-16 16 7.178 16 16 16c2.499 0 4.857-.593 6.967-1.619l2.619 2.619c.39.39.902.585 1.414.585.321 0 .64-.086.931-.24l7.069 7.069v6.586h-42zm34 28.586-2.223-2.223c1.823-1.201 3.385-2.763 4.586-4.586l2.223 2.223zm-11-1.586c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14zm23 21h-42v-2h39c.553 0 1-.448 1-1v-5.586l2 2zm10.172 0c-.481 0-.952-.195-1.293-.536l-18.465-18.464 2.586-2.586 18.465 18.464c.345.346.535.805.535 1.293 0 1.009-.82 1.829-1.828 1.829z\"\r\n    />\r\n    <path d=\"m17 7h24v2h-24z\" />\r\n    <path d=\"m7 51h34v2h-34z\" />\r\n    <path d=\"m7 47h34v2h-34z\" />\r\n    <path d=\"m7 43h26v2h-26z\" />\r\n    <path\r\n      d=\"m28.793 24.855c.743-.727 1.207-1.736 1.207-2.855 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.119.464 2.128 1.207 2.855-1.331.9-2.207 2.422-2.207 4.145v3c0 .552.447 1 1 1h8c.553 0 1-.448 1-1v-3c0-1.723-.876-3.245-2.207-4.145zm-4.793-2.855c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zm5 9h-6v-2c0-1.654 1.346-3 3-3s3 1.346 3 3z\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RobotIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-robot',
                template: "<svg\r\n  viewBox=\"0 0 128 128\"\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  width=\"26px\"\r\n  height=\"26px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <path\r\n      d=\"m89.917 75.305a7.759 7.759 0 0 0 7.75-7.75v-.385h6.143a1.751 1.751 0 0 0 1.75-1.75v-23.54a1.751 1.751 0 0 0 -1.75-1.75h-6.143v-.383a7.759 7.759 0 0 0 -7.75-7.747h-21.167v-6.871a10.75 10.75 0 1 0 -9.5 0v6.871h-21.167a7.759 7.759 0 0 0 -7.75 7.75v.383h-6.143a1.751 1.751 0 0 0 -1.75 1.75v23.537a1.751 1.751 0 0 0 1.75 1.75h6.143v.385a7.759 7.759 0 0 0 7.75 7.75h12.167v5.316h-20.058a7.759 7.759 0 0 0 -7.75 7.75v33.129a1.751 1.751 0 0 0 1.75 1.75h79.616a1.751 1.751 0 0 0 1.75-1.75v-33.129a7.759 7.759 0 0 0 -7.75-7.75h-20.058v-5.316zm12.143-31.675v20.04h-4.393v-20.04zm-45.31-28.13a7.25 7.25 0 1 1 7.25 7.25 7.258 7.258 0 0 1 -7.25-7.25zm6 10.671a9.929 9.929 0 0 0 2.5 0v5.829h-2.5zm-36.81 37.499v-20.04h4.393v20.04zm7.893 3.885v-27.808a4.255 4.255 0 0 1 4.25-4.25h22.888.029s.019 0 .029 0h5.942.029s.019 0 .029 0h22.888a4.255 4.255 0 0 1 4.25 4.25v27.808a4.255 4.255 0 0 1 -4.25 4.25h-13.869c-.016 0-.031-.005-.048-.005s-.032 0-.048.005h-23.9c-.016 0-.031-.005-.048-.005s-.032 0-.048.005h-13.873a4.255 4.255 0 0 1 -4.25-4.25zm50.916 52.195h-41.5v-14.437h41.5zm17.309-31.379v31.379h-13.809v-16.187a1.75 1.75 0 0 0 -1.75-1.75h-45a1.751 1.751 0 0 0 -1.75 1.75v16.187h-13.807v-31.379a4.255 4.255 0 0 1 4.25-4.25h67.616a4.255 4.255 0 0 1 4.25 4.25zm-27.808-7.75h-20.5v-5.316h20.5z\"\r\n    />\r\n    <path\r\n      d=\"m55.251 49.648a7.75 7.75 0 1 0 -7.751 7.752 7.759 7.759 0 0 0 7.751-7.752zm-7.751 4.252a4.25 4.25 0 1 1 4.25-4.25 4.255 4.255 0 0 1 -4.25 4.25z\"\r\n    />\r\n    <path\r\n      d=\"m80.5 57.4a7.75 7.75 0 1 0 -7.75-7.75 7.759 7.759 0 0 0 7.75 7.75zm0-12a4.25 4.25 0 1 1 -4.25 4.25 4.255 4.255 0 0 1 4.25-4.25z\"\r\n    />\r\n    <path\r\n      d=\"m51.875 64.875a1.751 1.751 0 0 0 1.75 1.75h20.75a1.75 1.75 0 0 0 0-3.5h-20.75a1.751 1.751 0 0 0 -1.75 1.75z\"\r\n    />\r\n    <path\r\n      d=\"m94.808 96.121a4.75 4.75 0 1 0 -4.75-4.75 4.756 4.756 0 0 0 4.75 4.75zm0-6a1.25 1.25 0 1 1 -1.25 1.25 1.251 1.251 0 0 1 1.25-1.25z\"\r\n    />\r\n    <path\r\n      d=\"m28.442 91.371a4.75 4.75 0 1 0 4.75-4.75 4.756 4.756 0 0 0 -4.75 4.75zm4.75-1.25a1.25 1.25 0 1 1 -1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z\"\r\n    />\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TeachersIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-teachers',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 512 512\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M135,0c-33.358,0-60,28.006-60,61c0,33.084,26.916,60,60,60s60-26.916,60-60C195,27.98,168.324,0,135,0z M135,91\r\n\t\t\tc-16.542,0-30-13.458-30-30c0-16.804,13.738-31,30-31s30,14.196,30,31C165,77.542,151.542,91,135,91z\"\r\n      />\r\n    </g>\r\n  </g>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M467,0H255c-24.813,0-45,20.187-45,45v102.365l-13.183-13.182C188.317,125.682,177.017,121,165,121h-30\r\n\t\t\tc-6.359,0-53.641,0-60,0c-41.355,0-75,33.645-75,75c0,8.529,0,77.68,0,90c0,24.813,20.187,45,45,45c5.257,0,10.307-0.906,15-2.57\r\n\t\t\tV467c0,24.813,20.187,45,45,45c11.515,0,22.033-4.347,30-11.486c7.967,7.139,18.485,11.486,30,11.486c24.813,0,45-20.187,45-45\r\n\t\t\tV268.444c11.469,4.045,24.174,3.266,35.126-2.191L295.631,241H467c24.813,0,45-20.187,45-45V45C512,20.187,491.813,0,467,0z\r\n\t\t\t M291.709,209.419l-59.982,29.991c-5.627,2.804-12.616,1.91-17.333-2.806l-8.786-8.787c-9.276-9.276-25.567-2.967-25.607,10.56\r\n\t\t\tc0,0.015-0.002,0.029-0.002,0.044V467c0,8.271-6.729,15-15,15s-15-6.729-15-15V316c0-8.284-6.716-15-15-15s-15,6.716-15,15v151\r\n\t\t\tc0,8.271-6.729,15-15,15s-15-6.729-15-15V286c0-11.31,0-80.756,0-90c0-8.284-6.716-15-15-15s-15,6.716-15,15c0,8.529,0,77.68,0,90\r\n\t\t\tc0,8.271-6.729,15-15,15c-8.271,0-15-6.729-15-15C30,274.69,30,205.244,30,196c0-24.813,20.187-45,45-45c11.31,0,80.756,0,90,0\r\n\t\t\tc4.004,0,7.77,1.561,10.604,4.396l44.707,44.707c4.564,4.565,11.54,5.696,17.314,2.81l40.669-20.335\r\n\t\t\tc7.444-3.725,16.415-0.714,20.124,6.712C302.128,196.711,299.13,205.709,291.709,209.419z M482,196c0,8.271-6.729,15-15,15\r\n\t\t\tH327.419c0.091-0.257,0.191-0.509,0.277-0.768c2.16-6.48,2.808-13.218,1.982-19.8l82.03-41.015\r\n\t\t\tc7.41-3.705,10.413-12.715,6.708-20.125c-3.705-7.41-12.716-10.414-20.125-6.708l-82.025,41.013\r\n\t\t\tc-13.142-12.712-33.613-16.747-51.393-7.849L240,168.185V45c0-8.271,6.729-15,15-15h212c8.271,0,15,6.729,15,15V196z\"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VideoIconComponent, [{
        type: Component,
        args: [{
                selector: 'ak-icon-video',
                template: "<svg\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  viewBox=\"0 0 277.392 277.392\"\r\n  width=\"24px\"\r\n  height=\"24px\"\r\n  fill=\"currentColor\"\r\n>\r\n  <g>\r\n    <g>\r\n      <path\r\n        d=\"M46.232,213.541h119.659c25.493,0,46.232-20.739,46.232-46.232v-10.106l51.339,51.345\r\n\t\t\tc1.561,1.561,3.65,2.388,5.771,2.388c1.05,0,2.116-0.201,3.122-0.62c3.051-1.262,5.037-4.237,5.037-7.539V72.011\r\n\t\t\tc0-3.302-1.985-6.277-5.037-7.539c-3.04-1.262-6.554-0.566-8.893,1.768l-51.377,51.383c-0.397-25.15-20.951-45.498-46.194-45.498\r\n\t\t\tH46.232C20.739,72.125,0,92.864,0,118.357v48.952C0,192.802,20.739,213.541,46.232,213.541z M261.075,91.711v91.371\r\n\t\t\tl-45.683-45.688L261.075,91.711z M16.317,118.357c0-16.497,13.424-29.915,29.915-29.915h119.659\r\n\t\t\tc16.491,0,29.915,13.418,29.915,29.915v18.466v1.148v29.338c0,16.497-13.424,29.915-29.915,29.915H46.232\r\n\t\t\tc-16.491,0-29.915-13.418-29.915-29.915V118.357z\"\r\n      />\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(IconsModule, { declarations: function () { return [BellIconComponent,
        HouseIconComponent,
        IconComponent,
        HamburgerIconComponent,
        VideoIconComponent,
        ClassroomIconComponent,
        ResourcesIconComponent,
        TeachersIconComponent,
        BoardMemebersIconComponent,
        ContractIconComponent,
        CalendarIconComponent,
        InfoIconComponent,
        RobotIconComponent,
        QuestionIconComponent,
        ContactIconComponent]; }, imports: function () { return [BrowserModule]; }, exports: function () { return [BellIconComponent,
        HouseIconComponent,
        IconComponent,
        HamburgerIconComponent,
        VideoIconComponent,
        ClassroomIconComponent,
        ResourcesIconComponent,
        TeachersIconComponent,
        BoardMemebersIconComponent,
        ContractIconComponent,
        CalendarIconComponent,
        InfoIconComponent,
        RobotIconComponent,
        QuestionIconComponent,
        ContactIconComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(IconsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BellIconComponent,
                    HouseIconComponent,
                    IconComponent,
                    HamburgerIconComponent,
                    VideoIconComponent,
                    ClassroomIconComponent,
                    ResourcesIconComponent,
                    TeachersIconComponent,
                    BoardMemebersIconComponent,
                    ContractIconComponent,
                    CalendarIconComponent,
                    InfoIconComponent,
                    RobotIconComponent,
                    QuestionIconComponent,
                    ContactIconComponent,
                ],
                exports: [
                    BellIconComponent,
                    HouseIconComponent,
                    IconComponent,
                    HamburgerIconComponent,
                    VideoIconComponent,
                    ClassroomIconComponent,
                    ResourcesIconComponent,
                    TeachersIconComponent,
                    BoardMemebersIconComponent,
                    ContractIconComponent,
                    CalendarIconComponent,
                    InfoIconComponent,
                    RobotIconComponent,
                    QuestionIconComponent,
                    ContactIconComponent,
                ],
                imports: [BrowserModule]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BasePageComponent, [{
        type: Component,
        args: [{
                selector: 'ak-base-page',
                template: "<div class=\"global-app-background\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'ak-card',
                template: "<div class=\"card column-half\" [ngClass]=\"{ 'card-padding': !title }\">\r\n  <div *ngIf=\"title\" class=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n    <div *ngIf=\"editRoute\" class=\"edit-icon\"></div>\r\n  </div>\r\n  <div class=\"content-padding\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".card{width:100%;display:inline-block;height:auto;border-radius:8px;text-align:left;background:linear-gradient(to bottom,#fff 12%,#fffff5 100%);margin-bottom:15px}.header{display:inline-block;height:auto;width:100%;border-radius:8px 8px 0 0;background:#eeeff0;border-bottom:1px solid #d2d4d6;padding:10px 15px}.header .title{font-size:20px;font-weight:600;font-family:ColinSerifWeb-Bold,Georgia,\"Times New Roman\",Times,serif;color:#363b42;display:inline-block}.card-padding{padding:20px}.content-padding{padding:10px}"]
            }]
    }], function () { return [{ type: ɵngcc2.Router }]; }, { editRoute: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ParticlesService, [{
        type: Injectable
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LandingComponent, [{
        type: Component,
        args: [{
                selector: 'ak-landing',
                template: "<nav class=\"navbar navbar-expand-md navbar-dark header sticky global-font\">\r\n  <a href=\"/\" class=\"navbar-brand logo-text\">\r\n    ACM Website\r\n  </a>\r\n  <div\r\n    class=\"collapse navbar-collapse text-center header-text\"\r\n    id=\"collapsibleNavbar\"\r\n  >\r\n    <div class=\"mainmenu\">\r\n      <ul class=\"navbar-nav text-center\" id=\"primary-menu\">\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 0 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#home\"\r\n            >Home</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 1 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#about\"\r\n            >About Us</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 2 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#feature\"\r\n            >Features</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngClass]=\"{ active: currentActive == 3 }\"\r\n            class=\"nav-link text-light\"\r\n            href=\"landing#team\"\r\n            >Team</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-light\" href=\"#contact\">Contact Us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- header section end -->\r\n<!-- hero area start -->\r\n<section class=\"hero-area\" id=\"home\" #home>\r\n  <div id=\"particles-js\"></div>\r\n  <div class=\"container hero-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n        <div class=\"hero-area-content\">\r\n          <h1>Welcome to ACM!</h1>\r\n          <p>\r\n            Offical University of Toledo UPRC Campus ACM Chapter website to help\r\n            you keep up to date on the latest events, meetings, and sessions\r\n            throughout the year.\r\n          </p>\r\n          <div (click)=\"onSignIn()\" class=\"radius-btn\">Sign In</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- hero area end -->\r\n\r\n<!-- about section start -->\r\n<section class=\"about-area ptb-90\" id=\"about\" #about>\r\n  <div class=\"container about-area-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2 data-aos=\"fade-up\">\r\n            About ACM<span class=\"sec-title-border\"></span>\r\n          </h2>\r\n          <p data-aos=\"fade-up\">\r\n            A little information about what ACM is and what we do.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-ruler-pencil\"></i>\r\n          <h4>What is ACM?</h4>\r\n          <p>\r\n            The Association for Computing Machinery is a US-based international\r\n            learned society for computing. It was founded in 1947, and is the\r\n            world's largest scientific and educational computing society.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-computer\"></i>\r\n          <h4>What to expect to learn?</h4>\r\n          <p>\r\n            You will learn a variety of skills and techniques through ACM. You\r\n            can learn both software and hardware from our Chief Software and\r\n            Chief Hardware officers Sam Butler and Kiyle Winborne\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div data-aos=\"fade-up\" class=\"col-lg-4\">\r\n        <div class=\"single-about-box\">\r\n          <i class=\"icofont icofont-headphone-alt\"></i>\r\n          <h4>When we meet?</h4>\r\n          <p>\r\n            We meet every other Friday for meetings and talks about information\r\n            that might be useful to tell people. We meet for coding sessions\r\n            every other Wednesday to learn about other languages and platforms.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"feature-area ptb-90\" id=\"feature\" #feature>\r\n  <div class=\"container feature-area-wrapper\">\r\n    <div class=\"row flexbox-center\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-right text-center\">\r\n          <ul>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Calendar</h4>\r\n                <p>Keep Up to date on what events are coming up.</p>\r\n              </div>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Meetings</h4>\r\n                <p>When we have meetings for topics and events.</p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n            <li>\r\n              <div data-aos=\"fade-right\" class=\"feature-box-info\">\r\n                <h4>Code Documentation</h4>\r\n                <p>\r\n                  What is used to help manage source code and documentation.\r\n                </p>\r\n              </div>\r\n              <div class=\"feature-box-icon\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"single-feature-box text-lg-left text-center\">\r\n          <ul>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Projects</h4>\r\n                <p>What projects we are currently working on or updating.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Session Links</h4>\r\n                <p>Informative talks or information for learning purposes.</p>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"feature-box-icon\"></div>\r\n              <div\r\n                data-aos=\"fade-left\"\r\n                data-aos-duration=\"500\"\r\n                class=\"feature-box-info\"\r\n              >\r\n                <h4>Ideas</h4>\r\n                <p>\r\n                  Section to keep track of project ideas and upcoming projects.\r\n                </p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- feature section end -->\r\n\r\n<!-- team section start -->\r\n<section class=\"team-area ptb-90\" id=\"team\" #team>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"sec-title\">\r\n          <h2>Meet Our Team<span class=\"sec-title-border\"></span></h2>\r\n          <p>\r\n            These are the current board memebers of ACM. You can click on them\r\n            to learn more information and contact them if need be.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Josue Van Dyke</div></strong>\r\n            <p>Chair</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Sam Butler</div></strong>\r\n            <p>Chief Software Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Luke Lengel</div></strong>\r\n            <p>Treasurer/Secretary</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6\">\r\n        <div class=\"single-team-member\">\r\n          <div class=\"team-member-info\">\r\n            <strong><div style=\"font-size: 20px;\">Kiyle Winborne</div></strong>\r\n            <p>Chief Hardware Engineer</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- footer section start -->\r\n<footer class=\"footer\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"copyright-area\">\r\n          <br />\r\n          <p>\r\n            Copyright &copy; 2020 All rights reserved\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n",
                styles: ["h1,h2,h3,h4,h5,h6{font-weight:500}h1,h2,h3,h4,h5,h6,p{margin:0}h1{font-size:48px}h2{font-size:30px;color:#232323}h4{font-size:18px;color:#232323}h6{font-size:14px;color:#232323}h5{color:#232323}a{transition:.6s}a,a:hover{color:#666}a,a:active,a:focus,a:hover,button:focus{text-decoration:none;border:none;outline:0}ul{list-style:none;margin:0;padding:0}.sec-title{text-align:center;max-width:400px;margin:0 auto 40px}.sec-title h2{padding-bottom:20px;margin-bottom:20px;position:relative;top:-6px}.sec-title h2 .sec-title-border{width:100px;position:absolute;bottom:0;left:0;border-top:4px solid #222;right:0;height:0;margin:auto}.sec-title h2 .sec-title-border span{width:9px;height:9px;position:relative;display:inline-block;margin:0 1px;bottom:23.3px}.sec-title h2 .sec-title-border span::before{background:#222;content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;transform:rotate(45deg)}.mt-100{margin-top:100px}.mt-30{margin-top:30px}.ptb-100{padding:100px 0}.ptb-90{padding:90px 0}.header{display:inline-block}.header.sticky .mainmenu li a.radius-btn,.mainmenu li a.radius-btn,.radius-btn{border:1px solid #fff;color:#fff;border-radius:15px;padding:6px 25px;display:inline-block;text-transform:uppercase;cursor:pointer;font-weight:500;transition:75ms linear}.header.sticky .mainmenu li a.radius-btn:hover,.mainmenu li a.radius-btn:hover,.radius-btn:hover{background:#fff;border:1px solid #fff;color:#666}.flexbox-center{display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;justify-content:center;align-items:center}input::-webkit-input-placeholder{color:#666}.header{position:fixed;top:0;left:0;transition:.4s;width:100%;z-index:99;padding:18px 15px}.mainmenu{text-align:left;display:block}.mainmenu li{display:inline-block;text-transform:uppercase}.mainmenu li a{display:inline-block;color:#fff;position:relative;padding:5px 16px;margin:0 3px;border:1px solid transparent}.slicknav_menu{padding:0;background:0 0;display:none}.mainmenu ul li a.active,.mainmenu ul li a:hover,.slicknav_menu a.active{border:1px solid #fff}.header.sticky{border-radius:0;border-bottom:transparent;background:linear-gradient(to left,rgba(0,32,85,.8),rgba(0,93,181,.8));background:-moz-linear-gradient(to left,rgba(0,32,85,.8),rgba(0,93,181,.8));padding:20px}.mainmenu li a.radius-btn{margin-left:55px}.hero-area{height:100vh;transform:scale(1.1);z-index:1;position:relative;background-image:url(https://3dprintingindustry.com/wp-content/uploads/2014/09/lccc-ridge-campus-3d-printing-industry.png);background-repeat:no-repeat;background-position:center;background-attachment:fixed;background-size:cover;overflow:hidden}.hero-area-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.hero-area::before{content:\"\";top:0;left:0;opacity:.85;right:0;bottom:0;z-index:-1;position:absolute;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%)}.hero-area-content{color:#fff;padding:80px 0 170px}.hero-area-content h1{color:#fff}.hero-area-content p{margin:28px 0 25px}.hero-area-content .radius-btn{margin-top:15px;margin-right:15px}.about-area{text-align:center;height:100vh;transform:scale(1.2)}.about-area-wrapper{margin:0;padding:0;position:relative;top:50%;left:50%;transform:translate(-50%,-50%)}.single-about-box{padding:25px;transition:250ms}.single-about-box i::before{color:#0074da;font-size:40px;transition:250ms;display:block}.single-about-box.active,.single-about-box:hover{transform:scale(1.025);box-shadow:0 0 5px #ccc}.single-about-box.active i::before,.single-about-box:hover i::before{color:#000}.single-about-box h4{margin:25px 0 15px}.feature-area{z-index:1;height:100vh;position:relative;background-image:url(https://www.sasaki.com/wp-content/uploads/2019/10/IMG_0046_website-1800x1200.jpg);background-repeat:no-repeat;background-position:center;background-size:cover}.feature-area-wrapper{position:relative;margin:0;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.1)}.feature-area::before{content:\"\";top:0;left:0;opacity:.85;right:0;bottom:0;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);z-index:-1;position:absolute}.single-feature-box h4{font-size:20px;margin-bottom:5px}.single-feature-box li{margin-bottom:45px;display:flex}.single-feature-box li:last-child{margin-bottom:0}.feature-box-info{flex:5}.feature-box-icon{flex:1;font-size:20px;transition:.4s}.single-feature-box li:hover .feature-box-icon i::before{border-radius:0}.single-feature-box,.single-feature-box h2,.single-feature-box h3,.single-feature-box h4{color:#fff}.feature-box-icon i::before{border:2px dashed #fff;width:40px;display:inline-block;height:40px;text-align:center;line-height:38px;border-radius:100%;transition:.4s}.single-team-member{text-align:center;box-shadow:0 2px 15px -5px #222;background:#fff;transition:.5s}.single-team-member:hover{color:#fff;background:linear-gradient(to right,#005db5 67%,#0074d9 100%)}.team-member-info h4{font-size:20px}.team-member-info{padding:20px 10px}.team-member-img{position:relative;z-index:1;overflow:hidden;background:#fff;transition:750ms}.team-member-icon{position:absolute;top:0;left:-100%;height:100%;width:100%}.team-member-img::before{content:\"\";background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);top:0;right:0;width:0;height:100%;position:absolute;opacity:.85}.team-member-icon a{color:#fff;width:30px;height:30px;display:inline-block;line-height:30px;border:1px solid transparent}.team-member-icon a:hover{border:1px solid #fff}.single-team-member:hover .team-member-img::before{width:100%}.single-team-member:hover .team-member-icon{left:0}.footer{position:relative;z-index:1;padding-bottom:27.5px}.footer::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:#000529;background:linear-gradient(to right,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);background:-webkit-linear-gradient(left,#000529 1%,#002055 24%,#005db5 67%,#0074d9 100%);opacity:.85;z-index:-1}.copyright-area{text-align:center;margin-top:10px}.copyright-area ul li{display:inline-block}.copyright-area ul li a{width:35px;height:35px;color:#0074da;background:#fff;display:inline-block;line-height:35px;font-size:16px;border-radius:100%;margin:0 5px}.copyright-area ul li a:hover{background:#0074da;color:#fff}.copyright-area ul{margin-bottom:30px}.copyright-area p{color:#fff}.copyright-area p a{color:#fff;border-bottom:1px solid #fff}.nav-icon{float:right}.header-text{float:right;margin-right:90px;font-weight:500;font-size:20px}.nav-link{padding:.5rem!important;transition:250ms}.nav-link:hover{transform:scale(1.05)}@media only screen and (max-width:767px){.header-text{float:none!important;margin-right:0}}.logo-text{font-size:25px;font-weight:400;padding-top:10px}"]
            }]
    }], function () { return [{ type: ɵngcc2.Router }, { type: ParticlesService }]; }, { scrollHandler: [{
            type: HostListener,
            args: ['window:scroll', ['$event']]
        }], homeElement: [{
            type: ViewChild,
            args: ['home']
        }], aboutElement: [{
            type: ViewChild,
            args: ['about']
        }], featureElemet: [{
            type: ViewChild,
            args: ['feature']
        }], teamElement: [{
            type: ViewChild,
            args: ['team']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UrlService, [{
        type: Injectable
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AuthService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc3.HttpClient }, { type: UrlService }, { type: ɵngcc2.Router }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UserService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc3.HttpClient }, { type: UrlService }, { type: ɵngcc2.Router }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LoginCardComponent, [{
        type: Component,
        args: [{
                selector: 'ak-login-card',
                template: "<div class=\"placeholder-padding login-container\">\r\n  <div class=\"login-wrap\">\r\n    <div class=\"login-html\">\r\n      <input id=\"tab-1\" type=\"radio\" name=\"tab\" class=\"sign-in\" checked />\r\n      <label for=\"tab-1\" class=\"tab\">Sign In</label>\r\n\r\n      <input id=\"tab-2\" type=\"radio\" name=\"tab\" class=\"sign-up\" />\r\n      <label for=\"tab-2\" class=\"tab\">Sign Up</label>\r\n      <div class=\"login-form\">\r\n        <div class=\"sign-in-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">Username</label>\r\n            <input [disabled]=\"loading\" #username type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Password</label>\r\n            <input\r\n              [disabled]=\"loading\"\r\n              #pass\r\n              type=\"password\"\r\n              class=\"input\"\r\n              data-type=\"password\"\r\n            />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label class=\"forgot\">Forgot Password?</label>\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              *ngIf=\"!loading; else loader\"\r\n              (click)=\"onSignIn(username.value, pass.value)\"\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign In\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"social\">\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"twitterLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"twitterIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Twitter</div>\r\n            </div>\r\n\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"githubLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"githubIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Github</div>\r\n            </div>\r\n            <div class=\"inline-block\">\r\n              <a [href]=\"facebookLink\" class=\"target-pointer\" target=\"_blank\">\r\n                <img class=\"social-icon\" [src]=\"facebookIcon\" />\r\n              </a>\r\n              <div class=\"social-text\">Facebook</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sign-up-htm\">\r\n          <div class=\"group\">\r\n            <label for=\"user\" class=\"label\">First Name</label>\r\n            <input [disabled]=\"loading\" #first type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Last Name</label>\r\n            <input [disabled]=\"loading\" #last type=\"text\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <label for=\"pass\" class=\"label\">Email Address</label>\r\n            <input [disabled]=\"loading\" #email type=\"email\" class=\"input\" />\r\n          </div>\r\n          <div class=\"group\">\r\n            <input\r\n              *ngIf=\"!loading; else loader\"\r\n              type=\"submit\"\r\n              class=\"button\"\r\n              value=\"Sign Up\"\r\n              (click)=\"onSignUp(first.value, last.value, email.value)\"\r\n            />\r\n          </div>\r\n          <div class=\"hr\"></div>\r\n          <div class=\"foot-lnk\">\r\n            <label class=\"target-pointer\" for=\"tab-1\">Already Member?</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loader>\r\n  <div class=\"loader\"></div>\r\n</ng-template>\r\n",
                styles: [".login-container{margin:0;color:#6a6f8c;font:600 16px/18px \"Open Sans\",sans-serif}.clearfix:after,.clearfix:before{content:\"\";display:table}.clearfix:after{clear:both;display:block}.login-wrap{width:100%;margin:auto;max-width:525px;min-height:670px;position:relative;background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) center/cover no-repeat;box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.login-html{width:100%;height:100%;position:absolute;padding:90px 70px 50px;background:rgba(40,57,101,.9)}.login-html .sign-in-htm,.login-html .sign-up-htm{top:0;left:0;right:0;bottom:0;position:absolute;transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:.4s linear}.login-form .group .check,.login-html .sign-in,.login-html .sign-up{display:none}.login-form .group .button,.login-form .group .label,.login-html .tab{text-transform:uppercase}.login-html .tab{cursor:pointer;font-size:22px;padding-bottom:5px;margin:0 15px 10px 0;display:inline-block;border-bottom:2px solid transparent}.login-html .sign-in:checked+.tab,.login-html .sign-up:checked+.tab{color:#fff;border-color:#1161ee}.login-form{margin-top:20px;min-height:345px;position:relative;perspective:1000px;transform-style:preserve-3d}.login-form .group{margin-bottom:15px}.login-form .group .button,.login-form .group .input,.login-form .group .label{width:100%;color:#fff;display:block}.login-form .group .button,.login-form .group .input{border:none;padding:15px 20px;border-radius:25px;background:rgba(255,255,255,.1)}.login-form .group input[data-type=password]{-webkit-text-security:circle}.login-form .group .label{color:#aaa;font-size:12px}.login-form .group .button{background:#1161ee}.button{transition:.5s}.button:hover{background:#1153c4!important}.login-form .group label .icon{width:15px;height:15px;border-radius:2px;position:relative;display:inline-block;background:rgba(255,255,255,.1)}.login-form .group label .icon:after,.login-form .group label .icon:before{content:\"\";width:10px;height:2px;background:#fff;position:absolute;transition:.2s ease-in-out}.login-form .group label .icon:before{left:3px;width:5px;bottom:6px;transform:scale(0) rotate(0)}.login-form .group label .icon:after{top:6px;right:0;transform:scale(0) rotate(0)}.login-form .group .check:checked+label{color:#fff}.login-form .group .check:checked+label .icon{background:#1161ee}.login-form .group .check:checked+label .icon:before{transform:scale(1) rotate(45deg)}.login-form .group .check:checked+label .icon:after{transform:scale(1) rotate(-45deg)}.login-html .sign-in:checked+.tab+.sign-up+.tab+.login-form .sign-in-htm,.login-html .sign-up:checked+.tab+.login-form .sign-up-htm{transform:rotate(0)}.hr{height:2px;margin:30px 0;background:rgba(255,255,255,.2)}.foot-lnk{text-align:center;cursor:pointer;color:#fff}.forgot{cursor:pointer;transition:.2s ease-in}.forgot:hover{color:#fff}.social{text-align:center}.social-icon{width:50px;margin:0 15px;transition:transform .1s}.social-icon:hover{transform:scale(1.5)}.social-text{margin:10px}.placeholder-padding{padding:100px 0}@media only screen and (max-width:525px){.placeholder-padding{padding:0}.login-wrap{min-height:100vh}}"]
            }]
    }], function () { return [{ type: AuthService }, { type: UserService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{
                selector: 'ak-navbar',
                template: "<ng-container>\r\n  <div class=\"nav acm-nav\">\r\n    <div class=\"header-container\">\r\n      <ak-icon-hamburger\r\n        class=\"nav-icon\"\r\n        (click)=\"toggleSidebar()\"\r\n      ></ak-icon-hamburger>\r\n      <div class=\"logo-container\">\r\n        <a href=\"#home\">{{ title }}</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-container\">\r\n      <ak-icon-bell></ak-icon-bell>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                styles: ["body{background-color:#edf1f7}.nav{display:flex;justify-content:space-between;max-width:1920px;margin-left:auto;margin-right:auto;width:100%}.nav-icon{color:#8f9bb3;cursor:pointer}.acm-nav{background-color:#fff;box-shadow:0 .5rem 1rem 0 rgba(44,51,73,.1);overflow:hidden;padding:1.25rem;height:4.75rem;position:fixed;top:0;left:0;right:0;z-index:1040}.acm-nav a{color:#222b45;text-align:center;padding:0 20px;text-decoration:none;font-size:28px}.header-container,.logo-container{display:flex;align-items:center;width:auto}@media only screen and (max-width:380px){.acm-nav a{font-size:25px}}"]
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], sidebarClicked: [{
            type: Output
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SiderbarComponent, [{
        type: Component,
        args: [{
                selector: 'ak-sidebar',
                template: "<ul id=\"sidebar\" class=\"menu-items scrollable\">\r\n  <li class=\"menu-item\" *ngFor=\"let item of items\" (click)=\"route(item)\">\r\n    <a>\r\n      <ak-icon\r\n        [icon]=\"item.icon\"\r\n        class=\"icon\"\r\n        [ngClass]=\"{ 'item-selected': path === item.link }\"\r\n      ></ak-icon>\r\n      <span\r\n        class=\"title\"\r\n        [ngClass]=\"{ 'item-selected': path === item.link }\"\r\n        *ngIf=\"sidebarOpen\"\r\n        >{{ item.name }}</span\r\n      >\r\n    </a>\r\n  </li>\r\n  <li class=\"menu-item\">\r\n    <a>\r\n      <ak-icon></ak-icon>\r\n      <span class=\"title\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
                styles: ["li{border-bottom:1px solid #edf1f7}.fixed{position:fixed}.scrollable::-webkit-scrollbar{display:none}.scrollable{-ms-overflow-style:none;scrollbar-width:none}.menu-items{overflow-y:scroll;color:#222b45;top:0;left:0;bottom:0;height:100%;width:16rem;z-index:0;font-weight:400;margin:4.75rem 0 0;padding:0;position:fixed;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;transition:.5s}.menu-item{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item a .title{flex:1 0 auto;vertical-align:text-top}.menu-item a .icon{color:#8f9bb3;margin:0 .5rem 0 0;transition:.4s}.menu-item a .icon:hover,.menu-item:hover{color:#36f}.item-selected{color:#36f!important}"]
            }]
    }], function () { return [{ type: ɵngcc2.Router }]; }, { items: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(JwtService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc2.Router }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StompUrlService, [{
        type: Injectable
    }], function () { return [{ type: UrlService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StompWebsocketService, [{
        type: Injectable
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StompWebsocketModule, [{
        type: NgModule,
        args: [{
                providers: [
                    StompUrlService,
                    {
                        provide: StompWebsocketService,
                        useFactory: ɵ0,
                        deps: [InjectableRxStompConfig]
                    },
                    {
                        provide: InjectableRxStompConfig,
                        useFactory: ɵ1,
                        deps: [StompUrlService]
                    },
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ServicesModule, { imports: function () { return [BrowserModule, HttpClientModule]; }, exports: function () { return [StompWebsocketModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ServicesModule, [{
        type: NgModule,
        args: [{
                imports: [BrowserModule, HttpClientModule],
                providers: [
                    AuthService,
                    ParticlesService,
                    UserService,
                    JwtService,
                    UrlService,
                ],
                exports: [StompWebsocketModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AcmkitLibModule, { declarations: function () { return [AcmkitLibComponent,
        CardComponent,
        BasePageComponent,
        LoginCardComponent,
        LandingComponent,
        NavbarComponent,
        SiderbarComponent]; }, imports: function () { return [BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ServicesModule,
        IconsModule]; }, exports: function () { return [AcmkitLibComponent,
        CardComponent,
        BasePageComponent,
        LoginCardComponent,
        LandingComponent,
        NavbarComponent,
        SiderbarComponent,
        ServicesModule,
        IconsModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AcmkitLibModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AcmkitLibComponent,
                    CardComponent,
                    BasePageComponent,
                    LoginCardComponent,
                    LandingComponent,
                    NavbarComponent,
                    SiderbarComponent,
                ],
                imports: [
                    BrowserModule,
                    RouterModule,
                    BrowserAnimationsModule,
                    HttpClientModule,
                    ServicesModule,
                    IconsModule,
                ],
                exports: [
                    AcmkitLibComponent,
                    CardComponent,
                    BasePageComponent,
                    LoginCardComponent,
                    LandingComponent,
                    NavbarComponent,
                    SiderbarComponent,
                    ServicesModule,
                    IconsModule,
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AcmkitLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class AbstractTestBed {
    static useProvider(moduleMetaData, provider) {
        const index = moduleMetaData.providers.findIndex((p) => p.provide === provider || p.provide === provider.provide);
        if (index >= 0) {
            moduleMetaData.providers.splice(index, 1);
        }
        moduleMetaData.providers.push(provider);
    }
    static setup(updateModuleMetaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const moduleMetaData = this.getModuleMetaData();
            if (updateModuleMetaData) {
                updateModuleMetaData(moduleMetaData);
            }
            TestBed.configureTestingModule(moduleMetaData);
        });
    }
    static getModuleMetaData() {
        return null;
    }
}

class AcmKitTestBed extends AbstractTestBed {
    static getModuleMetaData() {
        return {
            imports: [
                RouterTestingModule,
                CommonModule,
                HttpClientTestingModule,
                AcmkitLibModule,
            ],
            declarations: [],
        };
    }
}

const setupTests = (initTest) => configureTestSuite(() => initTest());

/**
 * Public API Surface of acmkit-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractTestBed, AcmKitTestBed, AcmkitLibComponent, AcmkitLibModule, AcmkitLibService, AuthService, BasePageComponent, BellIconComponent, BoardMemebersIconComponent, CalendarIconComponent, CardComponent, ClassroomIconComponent, ContactIconComponent, ContractIconComponent, HamburgerIconComponent, HouseIconComponent, IconsModule, InfoIconComponent, JwtService, LandingComponent, LoginCardComponent, NavbarComponent, ParticlesService, QuestionIconComponent, ResourcesIconComponent, RobotIconComponent, ServicesModule, SiderbarComponent, StompUrlService, StompWebsocketModule, StompWebsocketService, TOKEN_NAME, TeachersIconComponent, VideoIconComponent, defaultStompConfig, setupTests, stompConfigFactory, stompWebsocketServiceFactory, ɵ0, ɵ1, UrlService as ɵa, UserService as ɵb, IconComponent as ɵc };


//# sourceMappingURL=acmkit-lib.js.map