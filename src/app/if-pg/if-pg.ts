import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-if-pg',
  imports: [],
  templateUrl: './if-pg.html',
  styleUrl: './if-pg.scss',
})
export class IfPg {
showCount = signal(false);
  count = signal(0);

  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    }
    return ' start Count.';
  });

  increase() {
    this.count.set(this.count() + 1);
    this.showCount.set(true);
  }
}
