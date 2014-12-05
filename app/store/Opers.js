Ext.define('E1.store.Opers',{
    extend:'Ext.data.Store',
    model: 'E1.model.Operm',
    proxy: {type: 'memory'}
});