import Ember from 'ember';

var UsersController = Ember.ArrayController.extend({
  // columns: function() {
  //   var userNameCol = ColumnDefinition.create({
  //     columnWidth: 150,
  //     headerCellName: 'Username',
  //     contentPath: '_data.userName',
  //     getCellContent: function(row) {
  //       return row.get('userName').toString();
  //     }
  //   });

  //   var firstNameCol = ColumnDefinition.create({
  //     columnWidth: 150,
  //     headerCellName: 'First Name',
  //     contentPath: '_data.firstName',
  //     getCellContent: function(row) {
  //       return row.get('firstName').toString();
  //     }
  //   });

  //   var lastNameCol = ColumnDefinition.create({
  //     columnWidth: 150,
  //     headerCellName: 'Last Name',
  //     contentPath: '_data.lastName',
  //     getCellContent: function(row) {
  //       return row.get('lastName').toString();
  //     }
  //   });

  //   var emailCol = ColumnDefinition.create({
  //     columnWidth: 150,
  //     headerCellName: 'E-Mail Address',
  //     contentPath: '_data.email',
  //     getCellContent: function(row) {
  //       return row.get('email').toString();
  //     }
  //   });

  //   return [userNameCol, firstNameCol, lastNameCol, emailCol];
  // }.property()
});

export default UsersController;