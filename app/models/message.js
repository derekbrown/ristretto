var message = DS.Model.extend({
  subject: DS.attr('string'),
  sender: DS.attr('string'),
  participants: DS.attr(),
  messageText: DS.attr()
});

message.reopenClass({
  FIXTURES: [
    {
      id: 1,
      subject:"Meeting Today About Project Bermuda",
      sender:"GregCarter",
      participants:[
        {"firstname":"Kelly","lastname":"Boyd","username":"SunshineKelly","email":"kelly@kelly.com"},
        {"firstname":"Gregory","lastname":"Carter","username":"GregCarter","email":"greg@greg.com"},
        {"firstname":"Dylan","lastname":"Gordon","username":"DGordon134","email":"dylan@dylan.com"},
        {"firstname":"Jeffrey","lastname":"Mason","username":"JeffreyMason","email":"jeffrey@jeffrey.com"},
        {"firstname":"Gloria","lastname":"Lawson","username":"GloriaLawson","email":"gloria@gloria.com"}
      ],
      messageText:"Blah blah blah"
    }
  ]
});

export default message;