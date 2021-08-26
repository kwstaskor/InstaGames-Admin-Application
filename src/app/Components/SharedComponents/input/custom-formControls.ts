import { FormControl } from "@angular/forms";
import { RiRestaurantLine } from "angular-remix-icon";

export class NamesFormControl extends FormControl {
    setValue(value: string, options: any) {
        if(value.length ==1){
            super.setValue(value.toUpperCase(), {...options,emitModelToViewChange:true});
            return;
        }
        super.setValue(value,options);
    }
}