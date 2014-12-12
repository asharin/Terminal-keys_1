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
    selType: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2
    },
    columns: [{xtype:'rownumberer'}, {text:'Имя',dataIndex:'name',editor:{
                xtype: 'textfield'
            }},{text:'Роль',dataIndex:'role',editor:{
                xtype: 'textfield'
            }},
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