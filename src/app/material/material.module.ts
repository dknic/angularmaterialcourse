import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
const Material = [MatButtonModule, MatButtonToggleModule];
@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
