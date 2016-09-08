import { NgModule } from '@angular/core';

import { HomeComponent }   from './home.component';
import { SearchComponent } from '../search/search.component';

@NgModule({
    imports: [
        SearchComponent
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
