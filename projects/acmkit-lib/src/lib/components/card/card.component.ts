import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ak-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() editRoute = '/';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onEditClick() {
    this.router.navigate([this.editRoute]);
  }
}