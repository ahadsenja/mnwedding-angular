import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './section/hero/hero.component';
import { MempelaiComponent } from './section/mempelai/mempelai.component';
import { BigdayComponent } from './section/bigday/bigday.component';
import { WeddingeventComponent } from './section/weddingevent/weddingevent.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent, 
    HeroComponent, 
    MempelaiComponent, 
    BigdayComponent, 
    WeddingeventComponent, 
    FooterComponent],
  imports: [
    CommonModule
  ],

  exports: [
    HomeComponent,
    MempelaiComponent,
    BigdayComponent,
    WeddingeventComponent,
    FooterComponent
  ]
})
export class FeaturesModule { }
