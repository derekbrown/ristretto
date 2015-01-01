import Ember from 'ember';
import _ from 'lodash';

var MessagesController = Ember.ArrayController.extend({
  columns: function() {
    var idCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'ID',
      contentPath: '_data._id.$oid',
      getCellContent: function(row) {
        return row.get('_id.$oid').toString();
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
      contentPath: '_data.sender',
      getCellContent: function(row) {
        return row.get('sender').toString();
      }
    });

    var participantsCol = Ember.Table.ColumnDefinition.create({
      headerCellName: 'Participants',
      contentPath: '_data.participants',
      getCellContent: function(row) {
        var total = '';
        _(row.get('participants')).each(function (participantEntry) {
          var participantID = participantEntry['$oid'].toString();
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

export default MessagesController;