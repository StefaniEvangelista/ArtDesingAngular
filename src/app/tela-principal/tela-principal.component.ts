import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onNavigate() {
    window.location.href = "https://www.instagram.com/ste.artdesign"
  }
}
