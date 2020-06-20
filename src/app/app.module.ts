import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { AppRoutingModule } from './app-routing.module';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';
import { IlustrativaComponent } from './ilustrativa/ilustrativa.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    OrcamentoComponent,
    ProdutosComponent,
    RedesSociaisComponent,
    IlustrativaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
