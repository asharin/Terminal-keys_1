/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('E1.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        title: 'Подсистема учета ключей',
        height:'100%',

        xtype: 'tabpanel',
        bodyPadding:'15',
        items:[{
            extend: 'Ext.container.Container',
            title: 'Ключи',
            layout: {
                type: 'table',
                columns:'2',
                tdAttrs: { style: 'padding: 10px; vertical-align: top;' }},
            items:[{
            xtype:'KeyGrid'},{items:[{html: '<h2>Таблица ключей и таблица операций</h2>'},{   
                height:'40%',
                width:'500',
                xtype: 'grid',
                layout:'fit',
                store: 'Opers',
                columns: [{text:'Id',dataIndex:'id'},{text:'Name',dataIndex:'name'},{text: 'Hole',dataIndex:'hole'}]
            }]}
            ]
        },{title: 'Техники',
            items:[
            {html: '<h2>Таблица техников</h2>'},
            {   height:'500',
                widht:'500',
                xtype: 'grid',
                layout:'fit',
                store: 'Stuffs',
                columns: [{text:'Id',dataIndex:'id'},{text:'Name',dataIndex:'name'},{text: 'Role',dataIndex:'role'}]
            }
            ]
        },{
            title: 'Катамараны',
            items:[
            {html: '<h2>Таблица терминалов</h2>'},
            {   height:'500',
                widht:'500',
                xtype: 'grid',
                layout:'fit',
                store: 'Katamarans',
                columns: [{text:'Id',dataIndex:'id'},{text:'Code',dataIndex:'code'},{text: 'Adress',dataIndex:'adress'}]
            }
            ]
        }]
    }]
});
