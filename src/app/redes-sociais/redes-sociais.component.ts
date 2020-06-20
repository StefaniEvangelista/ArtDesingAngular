import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css']
})
export class RedesSociaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate() {
    window.location.href = "https://www.instagram.com/ste.artdesign"
  }
}
