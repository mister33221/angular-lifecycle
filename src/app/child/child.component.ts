import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-child',
  template: `<p>👶 子元件 - {{ message }}</p>`,
})
export class ChildComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message = '';

  constructor() {
    console.log('1️⃣ Child - constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2️⃣ Child - ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('3️⃣ Child - ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4️⃣ Child - ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('5️⃣ Child - ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('6️⃣ Child - ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('7️⃣ Child - ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('8️⃣ Child - ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('9️⃣ Child - ngOnDestroy');
  }
}
