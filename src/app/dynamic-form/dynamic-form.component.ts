import {
  Component,
  OnChanges,
  DoCheck,
  OnInit,
  SimpleChanges,
  SimpleChange,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { DynamicFormService } from '../services/dynamicform.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [DynamicFormService]
})
export class DynamicFormComponent implements OnInit {

  @Input() formValues;
  @Output() deleteInput = new EventEmitter();




  inputValues: any = [];
  textareaValues: any = [];
  radiovalues: any = [];
  dropdownvalues: any = [];

  datefields = [];
  checkboxvalues: any = [];
  form: any = [];
  dyanmicvalues: any = {};
  textinputValues: any = {
    check: [],
  };
  daterandom = 10;

  checktrue = [];
  checkvalarray = 0;
  checkedValues = [];

  saveForm: any = {
    form: [],
    active: false,
  };

  constructor(private _dynamicFormService: DynamicFormService) {

      }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    console.log('ngDoCheck.formValues');
    console.log(changes);

    // this.currentChange = changes.formValues;

    this.formValues = changes.formValues.currentValue;



    if (this.formValues.length >= 1) {
      this.formValues.forEach(eachObj => {

        if (eachObj.controltype === 'Text Box') {
          console.log(eachObj.inputfieldscount);
          // tslint:disable-next-line:radix
          const inputc = parseInt(eachObj.inputfieldscount);
          console.log(inputc);
          this.inputValues[inputc - 1] = {
            label: eachObj.label,
            value: '',
          };
        }

        if (eachObj.controltype == 'Textarea') {
          console.log(eachObj.textareaFieldCounts);
          // tslint:disable-next-line:radix
          const textareac = parseInt(eachObj.textareaFieldCounts);
          console.log(textareac);
          this.textareaValues[textareac - 1] = {
            label: eachObj.label,
            value: '',
          };
        }

        if (eachObj.controltype === 'Radio button') {
          console.log(eachObj.radioFieldCounts);
          // tslint:disable-next-line:radix
          const radioc = parseInt(eachObj.radioFieldCounts);
          console.log(radioc);
          this.radiovalues[radioc - 1] = {
            label: eachObj.label,
            value: '',
          };
        }

        if (eachObj.controltype === 'Dropdown') {
          console.log(eachObj.dropdownFieldCounts);
          // tslint:disable-next-line:radix
          const dropdownc = parseInt(eachObj.dropdownFieldCounts);
          console.log(dropdownc);
          this.dropdownvalues[dropdownc - 1] = {
            label: eachObj.label,
            value: '',
          };
        }


        if (eachObj.controltype === 'Checkboxes') {
          this.checkboxvalues[eachObj.checkFieldCounts - 1] = {
            values: [],
            checks: [],
            label: eachObj.label
          };

          eachObj.options.forEach(value => {

            this.checkboxvalues[eachObj.checkFieldCounts - 1].values.push(value);
            this.checkboxvalues[eachObj.checkFieldCounts - 1].checks.push(false);


          });

          // this.onChange();
        }

        if (eachObj.controltype === 'Date') {
          console.log(eachObj.datefields);
          // tslint:disable-next-line:radix
          const datec = parseInt(eachObj.datefields);
          console.log(datec);
          this.datefields[datec - 1] = {
            date: [],
            label: eachObj.label
          };
        }


      });
    } else {
      console.log('Else Part');
    }




  }

  ngOnInit() {
    console.log('ngOninit');


    console.log(this.formValues);


  }

  showCheck() {
    console.log('onChange this.checkboxvalues');
    console.log(this.checkboxvalues);
  }



  // tslint:disable-next-line:one-line
  addDynamicForm(value) {
    // console.log('value');
    // console.log(value);
    // console.log('this.inputValues');
    // console.log(this.inputValues);
    // console.log('this.textareaValues');
    // console.log(this.textareaValues);
    // console.log('this.radiovalues');
    // console.log(this.radiovalues);
    // console.log('this.dropdownvalues');
    // console.log(this.dropdownvalues);
    // console.log('this.checkboxvalues');
    // console.log(this.checkboxvalues);
    // console.log('this.datefields');
    // console.log(this.datefields);

    console.log('this.formValues');
    console.log(this.formValues);
    this.saveForm.form = this.formValues;
    this._dynamicFormService.AddDynamicForm(this.saveForm)
    // tslint:disable-next-line:no-shadowed-variable
    .subscribe((value) => {

      console.log(value);

    });



    // Get values from Dynamic Form
    this.inputValues.forEach(obj => {
      console.log('obj');
      console.log(obj);
      this.dyanmicvalues[obj.label] = obj.value;
      console.log('this.dyanmicvalues');
      console.log(this.dyanmicvalues);
    });

    this.textareaValues.forEach(obj => {
      console.log('obj');
      console.log(obj);
      this.dyanmicvalues[obj.label] = obj.value;
      console.log('this.dyanmicvalues');
      console.log(this.dyanmicvalues);
    });

    this.radiovalues.forEach(obj => {
      console.log('obj');
      console.log(obj);
      this.dyanmicvalues[obj.label] = obj.value;
      console.log('this.dyanmicvalues');
      console.log(this.dyanmicvalues);
    });

    this.dropdownvalues.forEach(obj => {
      console.log('obj');
      console.log(obj);
      this.dyanmicvalues[obj.label] = obj.value;
      console.log('this.dyanmicvalues');
      console.log(this.dyanmicvalues);
    });

    this.checkboxvalues.forEach(obj => {
      console.log('obj');
      console.log(obj);

      obj.checks.forEach((checkvalue, chechindex) => {
        if (checkvalue === true) {
          // tslint:disable-next-line:no-shadowed-variable
          obj.values.forEach((value, valueindex) => {
            if (chechindex === valueindex) {
              this.checktrue.push(value);
              console.log(value);
              console.log('this.checktrue');
              console.log(this.checktrue);
            }
          });
        }

      });

      this.dyanmicvalues[obj.label] = this.checktrue;
      this.checktrue = [];

      console.log('this.dyanmicvalues');
      console.log(this.dyanmicvalues);
    });

    this.datefields.forEach(obj => {

      console.log(obj);
      this.dyanmicvalues[obj.label] = obj.date;
      console.log('this.dyanmicvalues');
      console.log(this.dyanmicvalues);
    });

  }


  removeTextInput(input) {
    console.log('input');
    console.log(input);
    this.deleteInput.emit(input);
  }

}
