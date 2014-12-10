Ext.define('E1.view.grids.StuffGrid',{   
    extend: 'Ext.grid.Panel',
	title:'Таблица Техников',
    alias: 'widget.StuffGrid',
    tbar: [{
    text: '+ Служащий',
    handler: 'onAddClick'
    }],
    layout:'fit',
    store: 'Stuffs',
    columns: [{text:'Id',dataIndex:'id', width:30}, {text:'Имя',dataIndex:'name'},{text:'Роль',dataIndex:'role'},
              {text: 'Del',
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