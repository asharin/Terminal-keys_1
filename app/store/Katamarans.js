Ext.define('E1.store.Katamarans',{
    extend:'Ext.data.Store',
    model: 'E1.model.Katamaranm',
    proxy: {type: 'memory'},
    data: [{id:1,code:2134,adress:'Тверская'},
           {id:2,code:2453,adress:'Калининград'},
           {id:3,code:5234,adress:'Сталинград'},
           {id:4,code:2346,adress:'Вавилон'},
           {id:5,code:1235,adress:'Сахалинск'},
           {id:6,code:1234,adress:'Киото'},
           {id:7,code:3214,adress:'Торонто'},
           {id:8,code:2154,adress:'Бордо'},
           {id:9,code:2135,adress:'Брюгге'}]
 });