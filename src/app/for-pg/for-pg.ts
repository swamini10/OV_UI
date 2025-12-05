import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-for-pg',
  imports: [],
  templateUrl: './for-pg.html',
  styleUrl: './for-pg.scss',
})
export class ForPg {
  count = signal(0);


  conditionalCount = computed(() => {
    let result = 'Start Counting: ';
    for (let i = 1; i <= this.count(); i++) {
      result += i + ' ';
    }
    return result.trim();
  });

  increase() {
    this.count.set(this.count() + 1);
  }
}
