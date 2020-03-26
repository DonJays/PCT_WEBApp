import { NgModule } from "@angular/core";
import {
    MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatCheckboxModule,
    MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatIconModule, MatSelectModule
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatCheckboxModule,
        MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatIconModule,
        MatDialogModule, MatSelectModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatCheckboxModule,
        MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatIconModule,
        MatDialogModule, MatSelectModule]
})
export class AppMaterialModule { }

