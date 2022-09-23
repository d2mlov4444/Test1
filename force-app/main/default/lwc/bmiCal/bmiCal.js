import { LightningElement,api } from 'lwc';	
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class BmiCal extends LightningElement {
    result;
    weight;
    height;
    dummyResult;

    weightChangeHandler(event){
        this.weight=event.target.value;
    }

    heightChangeHandler(event){
    
        this.height=event.target.value;
    }
    calculateHandler(event)
    {
        const a=Math.pow(this.height,2);
        this.dummyResult=(this.weight)/a;
        
        if(this.dummyResult>0)
        {
            this.result=this.dummyResult;
            if(this.result>18.5 && this.result<24.9) 
            {
                const abc = new ShowToastEvent({
                    title: 'Success',
                    message: 'Normal'+this.result,
                    variant: 'success'
                });
                
                this.dispatchEvent(abc);
            }
            else if(this.result<18.5)
            {
                const underweight = new ShowToastEvent({
                    title: ' Success',
                    message: 'UnderWeight' +this.result,
                    variant: 'success'
                });
                this.dispatchEvent(underweight);
            }
            else if(this.result>24.9) 
           {
            const pqr = new ShowToastEvent({
                title: 'Success',
                message: 'overweight'+this.result,
                variant: 'success'
            });
            
            this.dispatchEvent(pqr);
           }
        }
       
        else
        {
            const xyz = new ShowToastEvent({
                title: 'Error',
                message: 'Plz enter Value',
                variant: 'Error'
            });
            
            this.dispatchEvent(xyz);
        }
    }
         
} 