import UserPreferencesHideCSNGetChatterMobileTask from '@salesforce/schema/User.UserPreferencesHideCSNGetChatterMobileTask';
import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track cols = [
        {
            fieldName: 'name',
            label: 'Name'
        },
        {
            fieldName: '',
            label: 'Icon',
            cellAttributes: { iconName: { fieldName: 'dynamicIcon' } }
        },
    ];
    @track data = []

    @track specialIcon = '';

    @track showTable = true;

    @track iconName = '';

    connectedCallback(){

        let rand = Math.floor(Math.random()*100);
        console.log(rand);
        this.specialIcon = rand;
        for(let i = 1; i <101; i++){

            let randTemp = Math.floor(Math.random()*100) + 1;

            if(i%9 === 0){
                randTemp = rand;
            }

            this.data.push({id:i, name: i, dynamicIcon:'custom:custom' + randTemp});
        }
    }

    reset(){
        console.log('hello reset');
        let temp = [];
        this.data.forEach(row =>{
            row.dynamicIcon = 'standard:account';
            temp.push(row);
            console.log(JSON.stringify(row));
        })

        console.log(JSON.stringify(this.data));
        this.data = temp;
    }

    reveal(){
        //hide table
        this.showTable = false;
        this.iconName = 'custom:custom' + this.specialIcon;
        //show icon
    }
}