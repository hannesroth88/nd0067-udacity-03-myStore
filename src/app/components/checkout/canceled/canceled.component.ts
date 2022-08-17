import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-canceled',
  templateUrl: './canceled.component.html',
  styleUrls: ['./canceled.component.css']
})
export class CanceledComponent implements OnInit {
  constructor(private readonly activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      console.log(params)
    })
  }
}
