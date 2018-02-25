import * as firebase from 'firebase';

class DB {
	constructor(config) {
		this.app = firebase.initializeApp(config);
		this.dbRef = firebase.database().ref();
		this.usersRef = dbRef.child('users');
		this.transactionsRef = dbRef.child('transactions');
	}

	getUsersByUsername(token) {
		return this.usersRef.orderByChild('username')
				.startAt(`${token}`).endAt(`${token}\uf8ff`).once('value');
	}

	createTransaction(transaction) {
		return this.transactionsRef.push(transaction);
	}

	approveTransaction(transactionKey) {
		return this.transactionsRef.child(`${transactionKey}/approved`).update(true);
	}

	rejectTransaction(transactionKey) {
		return this.transactionsRef.child(`${transactionKey}`).remove();
	}

	getAllTransactionsReceived(userKey) {
		return this.transactionsRef.orderByChild('receiver').equalsTo(userKey).once('value');
	}

	getAllTransactionsSent(userKey) {
		return this.transactionsRef.orderByChild('sender').equalsTo(userKey).once('value');
	}

	getMyBalance() {
		return new Promise( function(cb){
			let received = {};
			let sent = {};
			this.transactionsRef.orderByChild('receiver').equalsTo(userKey).once('value')
			.then(snap => snap.value);
			this.transactionsRef.orderByChild('sender').equalsTo(userKey).once('value');

			cb();
		});
	}

	getMyInfo() {

	}

	getMyContacts() {

	}

	getContactDetails(username) {

	}
}