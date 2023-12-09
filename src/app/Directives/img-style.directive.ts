import { Directive, ElementRef, HostListener, Input,OnChanges } from '@angular/core';

@Directive({
// value that used in any element
// [appImgStyle]
  selector: '[hide]'

})
//                   implements OnChanges
export class ImgStyleDirective  {
//elemenRef=>document
//nativeElement=>getElement
//@input(appImgStyle)
// @Input() properity:string = "tomato";
  constructor(public elementRef:ElementRef) {

}
ngOnChanges():void {
 const parentElement = this.elementRef.nativeElement.parentNode.parentNode;


  parentElement.style.display = 'block';
 }
//method decorator
// @HostListener('mouseover')func(){
//    this.elementRef.nativeElement.style.boxShadow = '5px 5px 10px gray';
// }

// @HostListener('mouseout')func1(){
//   this.elementRef.nativeElement.style.boxShadow='none';
// }


@HostListener('click')funcnone(){
  const parentElement = this.elementRef.nativeElement.parentNode.parentNode;


  parentElement.style.display = 'none';
}
}




