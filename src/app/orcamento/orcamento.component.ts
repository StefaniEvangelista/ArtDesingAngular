import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate() {
    window.location.href = "https://www.instagram.com/ste.artdesign"
  }

}
