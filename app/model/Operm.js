Ext.define('E1.model.Operm', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'keyid', type: 'auto' },
        { name: 'stuff1id', type: 'auto' },
        { name: 'stuff2id', type: 'auto' },
        { name: 'trtime', type: 'date', dateFormat: 'Y-n-d h:i:s A' }

    ]
});
