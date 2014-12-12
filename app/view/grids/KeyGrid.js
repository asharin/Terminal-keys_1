Ext.define('E1.view.grids.KeyGrid',{   
    extend: 'Ext.grid.Panel',
	title:'Таблица ключей',
    alias: 'widget.KeyGrid',
    tbar: [{
    text: 'Add Key',
    handler: 'onAddClick'
    }],
    layout:'fit',
    store: 'Keys',
    selType: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2
    },

    columns: [{xtype:'rownumberer'}, 
              {text:'id',dataIndex:'id',type:'numberfield'},
              {text:'Имя',dataIndex:'name',editor:{type: 'textfield'}},
              {text:'Терминал',dataIndex:'hole',editor:{type: 'textfield'}},
              {text: 'х',
	             xtype: 'actioncolumn',
               width: 30,
               sortable: false,
               menuDisabled: true,
               items: [{
                 icon: 'resources/delete.gif',
                 tooltip: 'Delete Record',
                 handler: 'onDeleteClick'
                       }]  
              }]
});