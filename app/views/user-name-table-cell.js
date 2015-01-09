import Ember from 'ember';

userNameTableCellView = Ember.Table.TableCell.extend({
  classNames: 'username-table-cell',
  templateName: 'table/user-name-table-cell'
});

export default userNameTableCellView;
