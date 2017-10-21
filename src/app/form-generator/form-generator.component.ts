import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DynamicFormComponent }     from '../dynamic-form/dynamic-form.component';
@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  selectedValue = 'Text Box';
  selectedCtype = 'Text Box';

  textboxValues: any = {
    required: false
  };
  textareaValues: any = {
    required: false
  };
  radioValues: any = {
    options: [],
    required: false
  };
  checkboxValues: any = {
    options: [],
    required: false
  };
  dropdownValues: any = {
    options: [],
    required: false
  };
  dateValues: any = {
    required: false,
    dateoptions: ['Day', 'Month', 'Year']
  };

  radioOptions = [''];
  checkboxOptions = [''];
  dropdownOptions = [''];
  formValues: any = [];
  newformValues: any =[];


    inputFieldCounts = [];
    textareaFieldCounts = [];
    radioFieldCounts = [];
    checkFieldCounts = [];
    dropdownFieldCounts = [];
    dateFieldCounts = [];
  
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  // tslint:disable-next-line:member-ordering
  controltypes = ['Text Box', 'Textarea', 'Radio button', 'Checkboxes', 'Dropdown', 'Date'];
  // tslint:disable-next-line:member-ordering
  chartypes = ['Alphabetic', 'Alpha Numeric', 'Numeric'];




  ngOnInit() {
    console.log('Toaster');
    this.toastr.success('You are awesome!', 'Success!');

  }



  SelectControlType(value) {
    console.log(value);
    this.selectedCtype = value;
  }
  reset() {
    this.textboxValues = {};
    this.textareaValues = {};
    this.radioValues = {
      options: [],
    required: false
    };
    this.checkboxValues = {
      options: [],
    required: false
    };
    this.dropdownValues = {
      options: [],
    required: false
    };
    this.dateValues = {
      required: false,
      dateoptions: ['Day', 'Month', 'Year']
    };
    this.radioOptions = [''];
    this.checkboxOptions = [''];
    this.dropdownOptions = [''];
  }

  addTextbox(value) {
    this.inputFieldCounts.push(' ');

    this.textboxValues = value;
    const label = this.textboxValues.label.toLowerCase();

    const x = label.split(' ');

    // tslint:disable-next-line:one-line
    if (x[2]){
      const y = x[0].concat(x[1]);
      const z = y.concat(x[1]);
      this.textboxValues.key = z;
    }else if (x[2]){
      const y = x[0].concat(x[1]);
      this.textboxValues.key = y;
    }else{
      this.textboxValues.key = x[0];
    }


    console.log('combineLabel');
    console.log(this.textboxValues.key);
    this.textboxValues.controltype = this.selectedCtype;
    this.textboxValues.inputfieldscount = this.inputFieldCounts.length;
    this.formValues.push(this.textboxValues);
    this.newformValues = Object.assign([], this.formValues);
    console.log('this.formValues');
    console.log(this.formValues);
    console.log('this.newformValues');
    console.log(this.newformValues);

    this.toastr.success(this.textboxValues.label + ' is added!');
    this.textboxValues = {};
  }
  addTextarea(value) {

    this.textareaFieldCounts.push(' ');
    this.textareaValues = value;

    const label = this.textareaValues.label.toLowerCase();

    const x = label.split(' ');

    // tslint:disable-next-line:one-line
    if (x[2]){
      const y = x[0].concat(x[1]);
      const z = y.concat(x[1]);
      this.textareaValues.key = z;
    }else if (x[2]){
      const y = x[0].concat(x[1]);
      this.textareaValues.key = y;
    }else{
      this.textareaValues.key = x[0];
    }
    this.textareaValues.controltype = this.selectedCtype;
    this.textareaValues.textareaFieldCounts = this.textareaFieldCounts.length;
    this.formValues.push(this.textareaValues);
    this.newformValues = Object.assign([], this.formValues);
    console.log('this.formValues');
    console.log(this.formValues);
    console.log('this.newformValues');
    console.log(this.newformValues);

    this.toastr.success(this.textareaValues.label + ' is added!');
    this.textareaValues = {};
  }

  addRadioOption() {
    this.radioOptions.push('');
  }
  removeRadioOption(index) {
    this.radioOptions.splice(index, 1);
  }
  addRadio(value) {
    this.radioFieldCounts.push(' ');
    console.log('this.radioValues');
    console.log(this.radioValues);

    const label = this.radioValues.label.toLowerCase();

     const x = label.split(' ');

     if (x[2]){
       const y = x[0].concat(x[1]);
       const z = y.concat(x[1]);
       this.radioValues.key = z;
     }else if (x[2]){
       const y = x[0].concat(x[1]);
       this.radioValues.key = y;
     }else{
       this.radioValues.key = x[0];
     }


    this.radioValues.controltype = this.selectedCtype;
    this.radioValues.radioFieldCounts = this.radioFieldCounts.length;
    this.formValues.push(this.radioValues);
    this.newformValues = Object.assign([], this.formValues);
    console.log('this.formValues');
    console.log(this.formValues);
    console.log('this.newformValues');
    console.log(this.newformValues);

    this.toastr.success(this.radioValues.label + ' is added!');
    this.radioValues = {
      options: []
    };
    this.radioOptions = [''];
  }
  addCheckboxOption() {
    this.checkboxOptions.push('');
  }
  removeCheckboxOption(index) {
    this.checkboxOptions.splice(index, 1);
  }
  addCheckbox(value) {
    this.checkFieldCounts.push(' ');
    console.log('this.checkboxValues');
    console.log(this.checkboxValues);
    const label = this.checkboxValues.label.toLowerCase();

     const x = label.split(' ');

     // tslint:disable-next-line:one-line
     if (x[2]){
       const y = x[0].concat(x[1]);
       const z = y.concat(x[1]);
       this.checkboxValues.key = z;
     }else if (x[2]){
       const y = x[0].concat(x[1]);
       this.checkboxValues.key = y;
     }else{
       this.checkboxValues.key = x[0];
     }


    this.checkboxValues.controltype = this.selectedCtype;
    this.checkboxValues.checkFieldCounts = this.checkFieldCounts.length;
    this.formValues.push(this.checkboxValues);
    this.newformValues = Object.assign([], this.formValues);
    console.log('this.formValues');
    console.log(this.formValues);
    console.log('this.newformValues');
    console.log(this.newformValues);

    this.toastr.success(this.checkboxValues.label + ' is added!');
    this.checkboxValues = {
      options: []
    };
    this.checkboxOptions = [''];
  }

  addDropdownOption() {
    this.dropdownOptions.push(' ');
  }
  removeDropdownOption(index) {
    this.dropdownOptions.splice(index, 1);
  }
  addDropdown(value) {
    this.dropdownFieldCounts.push(' ');
    console.log('this.dropdownValues');
    console.log(this.dropdownValues);

    const label = this.dropdownValues.label.toLowerCase();

     const x = label.split(' ');

     if (x[2]){
       const y = x[0].concat(x[1]);
       const z = y.concat(x[1]);
       this.dropdownValues.key = z;
     }else if (x[2]){
       const y = x[0].concat(x[1]);
       this.dropdownValues.key = y;
     }else{
       this.dropdownValues.key = x[0];
     }
     this.dropdownValues.dropdownFieldCounts = this.dropdownFieldCounts.length;
    this.dropdownValues.controltype = this.selectedCtype;
    this.formValues.push(this.dropdownValues);
    this.newformValues = Object.assign([], this.formValues);
    console.log('this.formValues');
    console.log(this.formValues);
    console.log('this.newformValues');
    console.log(this.newformValues);

    this.toastr.success(this.dropdownValues.label + ' is added!');
    this.dropdownValues = {
      options: []
    };
    this.dropdownOptions = [''];
  }

  addDate(value) {

    this.dateFieldCounts.push(' ');

    console.log('this.dropdownValues');
    console.log(this.dateValues);

    const label = this.dateValues.label.toLowerCase();

     const x = label.split(' ');

     if (x[2]){
       const y = x[0].concat(x[1]);
       const z = y.concat(x[1]);
       this.dateValues.key = z;
     }else if (x[2]){
       const y = x[0].concat(x[1]);
       this.dateValues.key = y;
     }else{
       this.dateValues.key = x[0];
     }
     this.dateValues.datefields = this.dateFieldCounts.length;
    this.dateValues.controltype = this.selectedCtype;
    this.formValues.push(this.dateValues);
    this.newformValues = Object.assign([], this.formValues);
    console.log('this.formValues');
    console.log(this.formValues);
    console.log('this.newformValues');
    console.log(this.newformValues);

    this.toastr.success(this.dateValues.label + ' is added!');
    this.dateValues = {
      required: false,
      dateoptions: ['Day', 'Month', 'Year']
    };

  }




}
