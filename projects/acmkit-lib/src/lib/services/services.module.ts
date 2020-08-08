import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [AuthService],
})
export class ServicesModule {}