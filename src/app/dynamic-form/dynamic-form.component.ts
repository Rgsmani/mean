import { Component, OnChanges, DoCheck, OnInit, SimpleChanges,SimpleChange, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']  
})
export class DynamicFormComponent implements OnInit {

  @Input() formValues;
 
  




inputValues:any = [];  
  textareaValues: any = [];
  radiovalues: any = [];
  dropdownvalues: any = [];

  datefields = [];
  checkboxvalues: any = [];
  form: any = [];
  dyanmicvalues: any = [];
  textinputValues: any = {
    check: [],
  };
  daterandom = 10;
  constructor() { 
   
  }

 checkvalarray = 0;
  checkedValues = [];

  ngOnChanges(changes: SimpleChanges ) {
    // only run when property "data" changed
     console.log('ngDoCheck.formValues');
    console.log(changes);

    // this.currentChange = changes.formValues;
   this.formValues = changes.formValues.currentValue;



    if(this.formValues.length >= 1){
    this.formValues.forEach(eachObj => {

      if(eachObj.controltype == 'Text Box'){
        console.log(eachObj.inputfieldscount);
        let inputc =  parseInt(eachObj.inputfieldscount);
        console.log(inputc);
         this.inputValues[inputc - 1] = {
          label : eachObj.label,   
          value: '',
         };
      }

      if(eachObj.controltype == 'Textarea'){
        console.log(eachObj.textareaFieldCounts);
        let textareac =  parseInt(eachObj.textareaFieldCounts);
        console.log(textareac);
         this.textareaValues[textareac - 1] = {
          label : eachObj.label,   
          value: '',
         };
      }

      if(eachObj.controltype == 'Radio button'){
        console.log(eachObj.radioFieldCounts);
        let radioc =  parseInt(eachObj.radioFieldCounts);
        console.log(radioc);
         this.radiovalues[radioc - 1] = {
          label : eachObj.label,   
          value: '',
         };
      }

      if(eachObj.controltype == 'Dropdown'){
        console.log(eachObj.dropdownFieldCounts);
        let dropdownc =  parseInt(eachObj.dropdownFieldCounts);
        console.log(dropdownc);
         this.dropdownvalues[dropdownc - 1] = {
          label : eachObj.label,   
          value: '',
         };
      }
      if(eachObj.controltype == 'Checkboxes'){
        console.log(eachObj.checkFieldCounts);
       let checkc =  parseInt(eachObj.checkFieldCounts);
       console.log(checkc);
        this.checkboxvalues[checkc - 1] = {
          values: [],     
          checks:[],    
          label: eachObj.label
           
        };
      }
    
      if(eachObj.controltype == 'Date'){
        console.log(eachObj.datefields);
       let datec =  parseInt(eachObj.datefields);
       console.log(datec);
        this.datefields[datec - 1] = {
          date: [],
          label: eachObj.label         
        };
      }
     
    
    });
  }
  else{
    console.log("Else Part");
  }
    
     
   

}

  ngOnInit() {
    console.log('changed this.formValues');
  
  
  console.log(this.formValues);  
   
  
  }


  onChange(label, opt, event) {
  // const option = opt;
   //const e = event;
   console.log('opt');
  console.log(opt);
   console.log(event)
   console.log('onChange this.formValues');
    console.log(this.formValues);
   if(this.formValues.length >= 1){
    this.formValues.forEach(eachObj => {
      if(eachObj.controltype == 'Checkboxes'){
        
        eachObj.options.forEach(value => {
         if(value == opt){
          // this.checkedValues.push(value);
          // console.log(this.checkedValues);
           console.log('in If');
           console.log(value);
          let checkc =  parseInt(eachObj.checkFieldCounts);
          console.log(this.checkboxvalues);
          this.checkboxvalues[checkc - 1].values.push(value);
          this.checkboxvalues[checkc - 1].label = label;
         }
      });
    

          // if(eachObj.label == label && event.checked){
          //   let checkc =  parseInt(eachObj.checkFieldCounts);
          //   console.log(checkc);
          //   console.log('opt');
          //   console.log(opt);
          //    this.checkboxvalues[checkc - 1].values[this.checkvalarray] = opt;
          //    this.checkboxvalues[checkc - 1].label = label;
            
          // }


      }
    });
    console.log('onChange this.checkboxvalues');
    console.log(this.checkboxvalues);

  }
  this.checkvalarray++;

  }
   

  // tslint:disable-next-line:one-line
  addDynamicForm(value) {    
    console.log('value');
    console.log(value);
    console.log('this.inputValues');
    console.log(this.inputValues);
    console.log('this.textareaValues');
    console.log(this.textareaValues);
    console.log('this.radiovalues');
    console.log(this.radiovalues);
    console.log('this.dropdownvalues');
    console.log(this.dropdownvalues);
    console.log('this.checkboxvalues');
    console.log(this.checkboxvalues);

    console.log('this.datefields');
   console.log(this.datefields);
  
  
  }



  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
