import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import {
    DefinitionSourceFormElement,
    DefinitionAddComposeFileFormElement
} from '../../config-form/definition-config-form.model';


@Component({
    selector: 'app-definition-add-compose-file-form-element',
    templateUrl: './definition-add.compose-file-form-element.component.html',
    styles: []
})
export class DefinitionAddComposeFileFormElementComponent implements OnInit {

    @Input() composeFile: DefinitionAddComposeFileFormElement;

    @Input() sources: DefinitionSourceFormElement[];

    ngOnInit() {}

    addComposeFileRelativePath(): void {
        this.composeFile.composeFileRelativePaths.push('');
    }

    deleteComposeFileRelativePath(index: number) {
        this.composeFile.composeFileRelativePaths.splice(index, 1);
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }
}
