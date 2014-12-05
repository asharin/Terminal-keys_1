Ext.define('E1.model.Operm', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'time', type: 'auto' },
        { name: 'send', type: 'int' },
        { name: 'reciv', type: 'int' },
        { name: 'key_nums', type: 'int' }

    ]
});
