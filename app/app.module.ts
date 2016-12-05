// the root module
// this module describes how the application parts fit together
import { NgModule }      from '@angular/core'; // tells angular how to compile and launch this app
// each angular library start with the "@angular" prefix
import { BrowserModule } from '@angular/platform-browser';

// the common name for the root component is the AppComponent
import { AppComponent }  from './app.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroListComponent} from "./hero-list.component";

@NgModule({
  // imports is the list of dependencies of this module
  // in imports you must put only @NgModule classes
  // browsermodule needed for those application that run in a browser
  imports:      [ BrowserModule ],

  // exports: the subset of declarations that should be visible and usable in the component templates of other modules.

  // you put here every component you're going to use in your application
  // like Components, Directives and Pipes, also called View Classes
  declarations: [ AppComponent, HeroListComponent, HeroDetailComponent ],

  // the components list to insert into the DOM
  // for each component in this list a cascade of triggers will be launched
  // every component here will create a tree of components, like the AppComponent
  bootstrap:    [ AppComponent ]

  // providers: creators of services that this module contributes to the global collection of services
})
export class AppModule { }
