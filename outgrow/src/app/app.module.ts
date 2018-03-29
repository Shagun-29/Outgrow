import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ToolkitComponent } from './home/toolkit/toolkit.component';
import { Read1Component } from './home/read1/read1.component';
import { Read2Component } from './home/read2/read2.component';
import { Read3Component } from './home/read3/read3.component';
import { InteractiveContentComponent } from './interactive-content/interactive-content.component';
import { FeaturesComponent } from './features/features.component';
import { ExamplesComponent } from './examples/examples.component';
import { PricingComponent } from './pricing/pricing.component';

const appRoutes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'interactive-content' , component : InteractiveContentComponent},
  {path : 'features' , component : FeaturesComponent},
  {path : 'pricing' , component : PricingComponent},
  {path : 'examples' , component : ExamplesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ToolkitComponent,
    Read1Component,
    Read2Component,
    Read3Component,
    InteractiveContentComponent,
    FeaturesComponent,
    ExamplesComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
