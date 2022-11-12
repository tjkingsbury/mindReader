import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track cols = [
        {
            fieldName: 'name',
            label: 'Name',
        },
        {
            fieldName: '',
            label: 'Icon',
            cellAttributes: { iconName: { fieldName: 'dynamicIcon' } }
        },
    ];
    @track data = [];
    //holds data for each column
    @track data1 = [];
    @track data2 = [];
    @track data3 = [];
    @track data4 = [];
    @track data5 = [];

    @track specialIcon = '';

    @track showTable = true;

    @track iconName = '';

    connectedCallback(){

        this.populateData();
    }

    populateData(){
        this.data = [];
        this.data1 = [];
        this.data2 = [];
        this.data3 = [];
        this.data4 = [];
        this.data5 = [];
        let rand = Math.floor(Math.random()*100);
        this.specialIcon = rand;
        for(let i = 1; i <101; i++){

            let randTemp = Math.floor(Math.random()*100) + 1;

            if(i%9 === 0){
                randTemp = rand;
            }

            this.data.push({id:i, name: i, dynamicIcon:'custom:custom' + randTemp});

            if(i >= 1 && i <=20){
                this.data1.push({id:i, name: i, dynamicIcon:'custom:custom' + randTemp});
            }
            else if(i > 20 && i <=40){
                this.data2.push({id:i, name: i, dynamicIcon:'custom:custom' + randTemp});
            }
            else if(i >40 && i <=60){
                this.data3.push({id:i, name: i, dynamicIcon:'custom:custom' + randTemp});
            }
            else if(i >60 && i <=80){
                this.data4.push({id:i, name: i, dynamicIcon:'custom:custom' + randTemp});
            }
            else if(i >80 && i <=100){
                this.data5.push({id:i, name: i, dynamicIcon:'custom:custom' + randTemp});
            }
        }
    }

    reset(){
        this.populateData();
        this.showTable = true;
    }

    reveal(){
        this.showTable = false;
        this.iconName = 'custom:custom' + this.specialIcon;
    }
}