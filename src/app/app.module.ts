import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { AppRoutingModule } from './app-routing.module';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';
import { IlustrativaComponent } from './ilustrativa/ilustrativa.component';
import { FormularioOrcamentoComponent } from './formulario-orcamento/formulario-orcamento.component';
import { TelaPrincipalRoutingModule } from './tela-principal/tela-principal-routing.module';
import { FormularioOrcamentoRoutingModule } from './formulario-orcamento/formulario-orcamento-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    OrcamentoComponent,
    ProdutosComponent,
    RedesSociaisComponent,
    IlustrativaComponent,
    FormularioOrcamentoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormularioOrcamentoRoutingModule,
    TelaPrincipalRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
