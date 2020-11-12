import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const data = [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule];
@NgModule({
    imports: [data],
    exports: [data]

})

export class MaterialModule {


}