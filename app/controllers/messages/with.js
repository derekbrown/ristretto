import Ember from 'ember';
import _ from 'lodash';

var MessagesWithController = Ember.Controller.extend({
  columns: function() {
    var idCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'ID',
      contentPath: '_data.id',
      getCellContent: function(row) {
        return row.get('id').toString();
      }
    });

    var subjectCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Subject',
      contentPath: '_data.subject',
      getCellContent: function(row) {
        return row.get('subject').toString();
      }
    });

    var senderCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Sender',
      contentPath: '_data.sender.userName',
      // tableCellViewClass: 'userNameTableCellView',
      getCellContent: function(row) {
        return row.get('sender.userName').toString();
      }
    });

    var participantsCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Participants',
      contentPath: '_data.participants',
      // tableCellViewClass: 'App.userNameTableCell',
      getCellContent: function(row) {
        var total = '';
        _(row.get('participants')).each(function (participantEntry) {
          var participantID = participantEntry['userName'].toString();
          total += participantID + ', ';
        });
        return total.slice(0,-2);
      }
    });

    var messageTextCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Message Text',
      contentPath: '_data.messageText',
      getCellContent: function(row) {
        return row.get('messageText').toString();
      }
    });

    return [idCol, subjectCol, senderCol, participantsCol, messageTextCol];
  }.property()
});

export default MessagesWithController;