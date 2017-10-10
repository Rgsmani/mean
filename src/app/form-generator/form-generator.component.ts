import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DynamicFormComponent }     from '../dynamic-form/dynamic-form.component';
@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  selectedValue: string = 'Text Box';
  selectedCtype: string = 'Text Box';

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
    required: false
  };

  radioOptions = [''];
  checkboxOptions = [''];
  dropdownOptions = [''];
  formValues: any = [];

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  controltypes = ['Text Box', 'Textarea', 'Radio button', 'Checkboxes', 'Dropdown', 'Date'];
  chartypes = ['Alphabetic', 'Alpha Numeric', 'Numeric'];




  ngOnInit() {
    console.log("Toaster");
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
    this.dateValues= {
      required: false
    };
    this.radioOptions = [''];
    this.checkboxOptions = [''];
    this.dropdownOptions = [''];
  }

  addTextbox(value) {
    this.textboxValues = value;
    let label = this.textboxValues.label.toLowerCase();
   
    let x = label.split(" ");   

    if(x[2]){
      let y = x[0].concat(x[1]);
      let z = y.concat(x[1]);
      this.textboxValues.key = z;
    }else if(x[2]){
      let y = x[0].concat(x[1]);
      this.textboxValues.key = y;
    }else{
      this.textboxValues.key = x[0];
    }

    
    console.log("combineLabel");
    console.log(this.textboxValues.key);
    this.textboxValues.controltype = this.selectedCtype;
    this.formValues.push(this.textboxValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.textboxValues.label + ' is added!');
    this.textboxValues = {};
  }
  addTextarea(value) {
    this.textareaValues = value;
    this.textareaValues.controltype = this.selectedCtype;
    this.formValues.push(this.textareaValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.textareaValues.label + ' is added!');
    this.textareaValues = {};
  }

  addRadioOption() {
    this.radioOptions.push("");
  }
  removeRadioOption(index) {
    this.radioOptions.splice(index, 1);
  }
  addRadio(value) {

    console.log('this.radioValues');
    console.log(this.radioValues);
    this.radioValues.controltype = this.selectedCtype;
    this.formValues.push(this.radioValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.radioValues.label + ' is added!');
    this.radioValues = {
      options: []
    };
    this.radioOptions = [""];
  }
  addCheckboxOption() {
    this.checkboxOptions.push("");
  }
  removeCheckboxOption(index) {
    this.checkboxOptions.splice(index, 1);
  }
  addCheckbox(value) {

    console.log('this.checkboxValues');
    console.log(this.checkboxValues);
    this.checkboxValues.controltype = this.selectedCtype;
    this.formValues.push(this.checkboxValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.checkboxValues.label + ' is added!');
    this.checkboxValues = {
      options: []
    };
    this.checkboxOptions = [""];
  }

  addDropdownOption() {
    this.dropdownOptions.push("");
  }
  removeDropdownOption(index) {
    this.dropdownOptions.splice(index, 1);
  }
  addDropdown(value) {

    console.log('this.dropdownValues');
    console.log(this.dropdownValues);
    this.dropdownValues.controltype = this.selectedCtype;
    this.formValues.push(this.dropdownValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.dropdownValues.label + ' is added!');
    this.dropdownValues = {
      options: []
    };
    this.dropdownOptions = [""];
  }

  addDate(value) {

    console.log('this.dropdownValues');
    console.log(this.dateValues);
    this.dateValues.controltype = this.selectedCtype;
    this.formValues.push(this.dateValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.dateValues.label + ' is added!');
    this.dateValues = {};

  }




}
