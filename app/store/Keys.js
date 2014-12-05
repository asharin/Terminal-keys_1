Ext.define('E1.store.Keys',{
    extend:'Ext.data.Store',
    model: 'E1.model.Keym',
    proxy: {type: 'memory'},
    data: [{id:1, name:'Mona' ,hole:'2345'},
           {id:2, name:'Jesus' ,hole:'3245'},
           {id:3, name:'Buddha' ,hole:'2345'},
           {id:4, name:'Krishna' ,hole:'2345'},
           {id:5, name:'Moloh' ,hole:'6542'},
           {id:6, name:'Zeus' ,hole:'4325'},
           {id:7, name:'Allah' ,hole:'2345'},
           {id:8, name:'Omon Ra' ,hole:'2345'},
           {id:9, name:'Ktulhu' ,hole:'3245'}],
    filters: {
        property: 'id'
    }
 });