import { DropdownComponent } from './components/ui/dropdown/dropdown.component';
import { ImageComponent } from './components/ui/image/image.component';
import { TableComponent } from './components/ui/table/table.component';
import { PComponent } from './components/typography/p/p.component';
import { H2Component } from './components/typography/h2/h2.component';
import { H1Component } from './components/typography/h1/h1.component';
import { AngularmaterialmoduleModule } from './../angularmaterialmodule/angularmaterialmodule.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpanComponent } from './components/typography/span/span.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    H1Component,
    H2Component,
    PComponent,
    TableComponent,
    SpanComponent,
    ImageComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    AngularmaterialmoduleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    H1Component,
    H2Component,
    PComponent,
    TableComponent,
    SpanComponent,
    ImageComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
