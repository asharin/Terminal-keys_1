Ext.define('E1.store.Stuffs',{
    extend:'Ext.data.Store',
    model: 'E1.model.Stuffm',
    proxy: {type: 'memory'},
    data: [{id:1, name:'Gogol', role:1},
           {id:2, name:'Kant', role:1},
           {id:3, name:'Gazdamov', role:1},
           {id:4, name:'Mariengof', role:1},
           {id:5, name:'Kavabata', role:1},
           {id:6, name:'Bunin', role:1},
           {id:7, name:'Tolstoy', role:1},
           {id:8, name:'Chehov', role:1},
           {id:9, name:'Tutchev', role:1}]
 });