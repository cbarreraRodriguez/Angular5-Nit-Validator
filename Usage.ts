
import {NitValidator} from '../../../validators/nit.validator';
// Your form's component

 this.validateForm = this.fb.group({
           
            Nit            : [ '', [ Validators.required, NitValidator] ],     
            
  });
