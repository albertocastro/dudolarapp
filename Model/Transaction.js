function Transaction (_amount, _description, _receiver, _sender) {
    this.amount = _amount;
 	this.approved = false;
 	this.createDate = Math.floor(new Date() / 1000);
 	this.description = _description;
 	this.receiver = _receiver;
 	this.sender = _sender;
}
