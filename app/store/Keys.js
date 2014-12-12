Ext.define('E1.store.Keys',{
    extend:'Ext.data.Store',
    model: 'E1.model.Keym',
    proxy: {type: 'memory'},
    data: [{keyid:1, name:'Mona' ,hole:'2345'},
           {keyid:2, name:'Jesus' ,hole:'3245'},
           {keyid:3, name:'Buddha' ,hole:'2345'},
           {keyid:4, name:'Krishna' ,hole:'2345'},
           {keyid:5, name:'Moloh' ,hole:'6542'},
           {keyid:6, name:'Zeus' ,hole:'4325'},
           {keyid:7, name:'Allah' ,hole:'2345'},
           {keyid:8, name:'Omon Ra' ,hole:'2345'},
           {keyid:9, name:'Ktulhu' ,hole:'3245'}],
    filters: {
    }
 });