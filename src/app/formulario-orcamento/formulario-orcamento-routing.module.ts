import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioOrcamentoComponent } from './formulario-orcamento.component';

const routes: Routes = [
    {
        path: 'formulario-orcamento',
        component: FormularioOrcamentoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class FormularioOrcamentoRoutingModule { }
