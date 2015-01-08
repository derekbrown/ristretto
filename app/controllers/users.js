import Ember from 'ember';

var UsersController = Ember.ArrayController.extend({
  columns: function() {
    var idCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'ID',
      contentPath: '_data.id',
      getCellContent: function(row) {
        return row.get('id').toString();
      }
    });

    var userNameCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Username',
      contentPath: '_data.userName',
      getCellContent: function(row) {
        return row.get('userName').toString();
      }
    });

    var firstNameCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'First Name',
      contentPath: '_data.firstName',
      getCellContent: function(row) {
        return row.get('firstName').toString();
      }
    });

    var lastNameCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Last Name',
      contentPath: '_data.lastName',
      getCellContent: function(row) {
        return row.get('lastName').toString();
      }
    });

    var emailCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'E-Mail Address',
      contentPath: '_data.email',
      getCellContent: function(row) {
        return row.get('email').toString();
      }
    });

    return [idCol, userNameCol, firstNameCol, lastNameCol, emailCol];
  }.property()
});

export default UsersController;