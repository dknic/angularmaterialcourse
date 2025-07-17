import { Component } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.css',
})
export class ButtonToggleComponent {
  selectedValues: string[] = [];

  onToggleChange(event: any) {
    this.selectedValues = event.value;
    console.log('Selected values:', this.selectedValues);
  }
}
