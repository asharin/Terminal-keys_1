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
    selType: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2
    },
    columns: [{xtype:'rownumberer'},
              {text:'Код',dataIndex:'code',editor:{
                xtype: 'textfield'}},
              {text:'Адресс',dataIndex:'adress',editor:{
                xtype: 'textfield'}},
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