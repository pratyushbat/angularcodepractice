import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[myCustomIf]'
})

export class MyCustomIfDirective {
// custom structural directive

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }
        
    @Input() set myCustomIf(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            console.log('templateRef')
            console.log(this.templateRef)
console.log('viewCon')
            console.log(this.viewContainer)
        } else {
            this.viewContainer.clear();
        }
    }
}