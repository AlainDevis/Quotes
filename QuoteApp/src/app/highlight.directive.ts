import { Directive,ElementRef, ViewChild, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @ViewChild('upvotes') upvotes: ElementRef;

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor='yellow';
  }

}
