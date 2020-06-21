import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-formulario-orcamento',
  templateUrl: './formulario-orcamento.component.html',
  styleUrls: ['./formulario-orcamento.component.css']
})
export class FormularioOrcamentoComponent implements OnInit {
  private subscription: Subscription;
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      telefone: [null],
      email: [null],
      servico: [null]
    });
  }

  onSubmit() { }

  disableButton() {
    if (this.formulario.value.nome !== null &&
      this.formulario.value.nome !== '' &&
      this.formulario.value.sobrenome !== null &&
      this.formulario.value.sobrenome !== '' &&
      this.formulario.value.telefone !== null &&
      this.formulario.value.telefone !== '' &&
      this.formulario.value.email !== null &&
      this.formulario.value.email !== '' &&
      this.formulario.value.servico !== null &&
      this.formulario.value.servico !== '') {
      return false;
    } else {
      return true;
    }
  }
}
