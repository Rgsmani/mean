import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  selectedValue: string = 'Text Box';
  selectedCtype: string = 'Text Box';
  
  textboxValues: any = {};
  textareaValues: any = {};
  radioValues: any = {
    options:[]
  };
 
  formValues: any = [];

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
 }

 controltypes = ['Text Box','Textarea','Radio button','Checkboxes','Dropdown','Date'];
 chartypes = ['Alphabetic','Alpha Numeric','Numeric'];
 
 
 radioInputs = [''];

  ngOnInit() {
    console.log("Toaster");
    this.toastr.success('You are awesome!', 'Success!');

  } 
  
  

  SelectControlType(value){
    console.log(value);
    this.selectedCtype = value;
  }
  reset(){
    this.textboxValues = {};
    this.textareaValues = {};
    this.radioValues = {
        options:[]
    };
  }

  addTextbox(value){   
    this.textboxValues = value;
    this.textboxValues.controltype = this.selectedCtype; 
    this.formValues.push(this.textboxValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.textboxValues.label+' is added!');
    this.textboxValues = {};
  }
  addTextarea(value){   
    this.textareaValues = value;
    this.textareaValues.controltype = this.selectedCtype; 
    this.formValues.push(this.textareaValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.textareaValues.label+' is added!');
    this.textareaValues = {};
  }

  addRadioOption(){
    this.radioInputs.push("");
  }
  removeRadioOption(index){
this.radioInputs.splice(index, 1);
  }
  addRadio(value){    
   
    console.log('this.radioValues'); 
    console.log(this.radioValues);       
    this.radioValues.controltype = this.selectedCtype; 
    this.formValues.push(this.radioValues);
    console.log("this.formValues");
    console.log(this.formValues);

    this.toastr.success(this.radioValues.label+' is added!');
    this.radioValues = {
      options:[]
    };
    this.radioInputs = [""];
  }
  


  

}
