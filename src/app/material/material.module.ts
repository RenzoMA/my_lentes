import { OverlayModule } from "@angular/cdk/overlay";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule, MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatBadgeModule } from "@angular/material/badge";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {A11yModule} from '@angular/cdk/a11y';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    OverlayModule,
    MatInputModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    A11yModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    OverlayModule,
    MatInputModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    A11yModule,
    MatChipsModule
  ],
})
export class MaterialModule {}
