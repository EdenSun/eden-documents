/*
 * File: app/view/MyWindow.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyWindow', {
    extend: 'Ext.window.Window',

    height: 317,
    width: 400,
    layout: {
        type: 'fit'
    },
    title: '添加用户',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '帐号'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '真名'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '密码'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '邮箱'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: '电话'
                        },
                        {
                            xtype: 'radiogroup',
                            fieldLabel: '性别',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    boxLabel: '男'
                                },
                                {
                                    xtype: 'radiofield',
                                    boxLabel: '女'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: '角色',
                            items: [
                                {
                                    xtype: 'radiogroup',
                                    fieldLabel: '角色',
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            boxLabel: '学生'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            boxLabel: '教师'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            boxLabel: '管理员'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: '学号'
                                },
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    fieldLabel: '入学年份'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});