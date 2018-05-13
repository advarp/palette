import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Directives
import { DraggableDirective } from './directives/drag.directive';
import { DropTargetDirective } from './directives/drop.directive';

// Services
import { DragService } from './services/drag.service';
import { GridService } from './services/grid.service';
import { UtilsService } from './services/utils.service';
import { SidebarService } from './services/sidebar.service';

// Components
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { GridCellComponent } from './components/grid/grid-cell/grid-cell.component';
import { PaletteComponent } from './components/palette/palette.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ManageComponent } from './components/manage/manage.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    GridComponent,
    GridCellComponent,
    PaletteComponent,
    ManageComponent,
    DraggableDirective,
    DropTargetDirective,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DragService, GridService, UtilsService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
