let db;

const request = indexedDB.open('budget_app', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_payment', { autoIncrement: true});
};

request.onsuccess = function(event) {
    db = event.target.result;

    if (navigator.onLine) {

    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode)
};

function saveRecord(record) {
    const transaction = db.transaction(['new_payment'], 'readwrite');
    const paymentObjectStore = transaction.objetStore('new_payment');
    paymentObjectStore.add(record);
}