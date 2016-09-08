import { NgModule } from '@angular/core';

import { SearchComponent }   from './search.component';

const declarables = [SearchComponent];

@NgModule({
    imports: [],
    declarations: [declarables],
    providers: [/* TODO: Providers go here */],
})

export default class SearchModule { }
