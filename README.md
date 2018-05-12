# Angular5-Nit-Validator
Guatemalan nit validator for Angular Forms

Validate you nits with this simple, and easy to use validator

Usage


import {NitValidator} from '../../../validators/nit.validator';
.
.
.
.
 this.validateForm = this.fb.group({
            .
            .
            .
            Nit            : [ '', [ Validators.required, NitValidator] ],         
            .
            .
            .
  });
