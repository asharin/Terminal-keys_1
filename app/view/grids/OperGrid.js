Ext.define('E1.view.grids.OperGrid',{   
    extend: 'Ext.grid.Panel',
	title: 'Таблица операций',
    alias: 'widget.OperGrid',  
    store: 'Opers',
    selType: 'cellmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },
    tbar: [{
    text: '+ Транзакция',
    handler: 'onAddClick'
    }],
    columns: [{text:'Ключ',dataIndex:'keyid',editor: {
                xtype: 'textfield',
                allowBlank: false
            }},
    		  {text:'От Кого',dataIndex:'stuff1id',editor: {
                xtype: 'textfield',
                allowBlank: false
            }},
    		  {text: 'Кому',dataIndex:'stuff2id',editor: {
                xtype: 'textfield',
                allowBlank: false
            }},
    		  {xtype: 'datecolumn',
           header: 'Время',
           dataIndex: 'trtime',
           format: 'd-m-Y H:i:s',
           flex: 1},
          {xtype: 'actioncolumn',
           width: 40,
           sortable: false,
           menuDisabled: true,
           items: [{
             icon: 'resources/delete.gif',
             tooltip: 'Удалить',
             handler: 'onDeleteClick'
                   }]  
              },
          {xtype: 'actioncolumn',
           width: 40,
           sortable: false,
           menuDisabled: true,
           items: [{
             icon: 'resources/delete.gif',
             tooltip: 'Подробно',
             handler: 'onInfoClick'
                   }]  
              }]


});