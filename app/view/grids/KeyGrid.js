Ext.define('E1.view.grids.KeyGrid',{   
    extend: 'Ext.grid.Panel',
	title:'Таблица ключей',
    alias: 'widget.KeyGrid',
    bbar: [{
    text: 'Add Plant',
    handler: 'onAddClick'
    }],
    layout:'fit',
    store: 'Keys',
    columns: [{text:'Id',dataIndex:'id', width:30}, {text:'Name',dataIndex:'name'},{text:'Hole',dataIndex:'hole'},
               {
	xtype: 'actioncolumn',
    width: 30,
    sortable: false,
    menuDisabled: true,
    items: [{
     icon: 'resources/delete.gif',
     tooltip: 'Delete Record',
     handler: 'onDeleteClick'
    }]  }]
});