import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') bg: string;

  constructor(private elementRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.bg = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
    this.bg = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent');
    this.bg = this.defaultColor;
  }
}
