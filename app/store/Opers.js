Ext.define('E1.store.Opers',{
    extend:'Ext.data.Store',
    model: 'E1.model.Operm',
    proxy: {type: 'memory'},
    autoLoad: true,
    data: [{keyid:1, stuff1id:'1',stuff2id:'Gogol', trtime:'2012-4-12 10:34:00 PM'},
           {keyid:2, stuff1id:'2',stuff2id:'Kant', trtime:'2012-4-12 10:34:00 PM'},
           {keyid:3, stuff1id:'3',stuff2id:'Gazdamov', trtime:'2012-4-12 10:34:00 PM'},
           {keyid:4, stuff1id:'4',stuff2id:'Mariengof', trtime:'2012-4-12 10:34:00 PM'},
           {keyid:5, stuff1id:'5',stuff2id:'Kavabata', trtime:'2012-4-12 10:34:00 PM'},
           {keyid:6, stuff1id:'6',stuff2id:'Bunin', trtime:'2012-4-12 10:34:00 PM'},
           {keyid:7, stuff1id:'7',stuff2id:'Tolstoy', trtime:'2012-4-12 10:34:00 PM'},
           {keyid:8, stuff1id:'8',stuff2id:'Chehov', trtime:'2012-4-12 10:34:00 PM'},
           {keyid:9, stuff1id:'9',stuff2id:'Tutchev', trtime:'2012-4-12 10:34:00 PM'}]
   // statics: {ac: function(){
   //                   var out = [],
   //                   Ext.getStore('Key').each({out.push{this.get('name')}}),
   //                   return out
   //                //   for (i = 0; i < total; ++i) {
   //                //   var mod = 
   //                //   out.push(.get('name'))}}
   //             }}
});