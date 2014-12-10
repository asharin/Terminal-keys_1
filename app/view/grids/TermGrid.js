Ext.define('E1.view.grids.TermGrid',{   
    extend: 'Ext.grid.Panel',
	title:'Таблица Катамаранов',
    alias: 'widget.TermGrid',
    tbar: [{
    text: '+ Терминал',
    handler: 'onAddClick'
    }],
    layout:'fit',
    store: 'Katamarans',
    columns: [{text:'Id',dataIndex:'id', width:30}, {text:'Код',dataIndex:'code'},{text:'Адресс',dataIndex:'adress'},
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