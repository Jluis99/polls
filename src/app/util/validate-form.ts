export class FormValidation {

   static validForm(type: string, name: string, options?: any): string {
      const INPUT_VALIDATE = {
         required: ' is required.',
         maxLength:
            ' cannot exceed ' +
            options?.maxLength +
            ' characters. Current ' +
            options?.actualLength +
            '.',
         minLength:
            ' must have a minimum of ' +
            options?.minLength +
            ' characters. Current ' +
            options?.actualLength +
            '.',
         email: ' must be a correct email.',
      };

      return 'The ' + name + ' field ' + INPUT_VALIDATE[type];
   }
}
