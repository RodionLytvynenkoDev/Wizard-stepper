import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { StoreModule } from '@ngrx/store';
import { featureName, WizardReducer } from './state/wizard.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MiddleContentComponent,
    BottomBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(featureName, WizardReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
