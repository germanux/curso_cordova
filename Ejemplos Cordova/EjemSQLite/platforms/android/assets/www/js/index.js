
console.log(">> SQLite Demo: // Wait for Cordova to load");
	console.warn(">> SQLite Demo: Hola ()");
	console.debug(">> SQLite Demo: debug()");
	console.info(">> SQLite Demo: info()");
	//console.exception(">> SQLite Demo: exception()");
	console.error(">> SQLite Demo: error()");
	console.assert(true, ">> SQLite Demo:  true assert()");
	console.assert(false, ">> SQLite Demo: false assert()");
// Wait for Cordova to load
// [1]
document.addEventListener("deviceready", onDeviceReady, false);

console.log(">> SQLite Demo: addEventListener");
var currentRow;
// Populate the database
//
// [2]
function populateDB(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER PRIMARY KEY AUTOINCREMENT, name,number)');
	console.log(">> SQLite Demo: populateDB()");
}

// Query the database
//
// [6]
function queryDB(tx) {
	tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
	console.log(">> SQLite Demo: queryDB()");
}

// [9]
function searchQueryDB(tx) {
	tx.executeSql("SELECT * FROM DEMO where name like ('%"+ document.getElementById("txtName").value + "%')",
			[], querySuccess, errorCB);
	console.log(">> SQLite Demo: searchQueryDB()");
}
// Query the success callback
//
// [7]
function querySuccess(tx, results) {
	var tblText='<table id="t01"><tr><th>ID</th> <th>Name</th> <th>Number</th></tr>';
	var scriptText = "";//"<script>";
	var len = results.rows.length;
	for (var i = 0; i < len; i++) {
		var tmpArgs=results.rows.item(i).id + ",'" + results.rows.item(i).name
				+ "','" + results.rows.item(i).number+"'";
		var idTR=results.rows.item(i).id + "_" + results.rows.item(i).name
				+ "_" + results.rows.item(i).number;
		tblText +='<tr id='+ idTR + ' onclick="goPopup('+ tmpArgs + ');"><td>' + results.rows.item(i).id +'</td><td>'
				+ results.rows.item(i).name +'</td><td>' + results.rows.item(i).number +'</td></tr>';
		scriptText+='document.getElementById("'+ idTR + '").addEventListener("click", function() { goPopup('+ tmpArgs + ');}, false);\n';
	}
	tblText +="</table>";
	//scriptText += "</script>";
	document.getElementById("tblDiv").innerHTML =tblText;//; + scriptText;
	eval(scriptText);
	console.log(">> SQLite Demo: querySuccess()");
}

//Delete query
function deleteRow(tx) {
  tx.executeSql('DELETE FROM DEMO WHERE id = ' + currentRow, [], queryDB, errorCB);
}

// Transaction error callback
//
// [4]
function errorCB(err) {
	console.log("Error processing SQL: "+err.code);
	alert("Error processing SQL: "+err.code);
}

// Transaction success callback
//
// [3]
function successCB() {
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(queryDB, errorCB);
}

 // Cordova is ready
//
// [5]
function onDeviceReady() {
	
	console.log(">> SQLite Demo: onDeviceReady 1()");
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(populateDB, errorCB, successCB);
	//db.transaction(insertDB2, errorCB, successCB);
	console.log(">> SQLite Demo: onDeviceReady 2()");
	inicializarEventosClick();
	console.log(">> SQLite Demo: onDeviceReady 3()");
	
}
function inicializarEventosClick() {
	
	document.getElementById("goDelete").addEventListener("click", goDelete, false);
	document.getElementById("goEdit").addEventListener("click", goEdit, false);
	document.getElementById("qrpopupCerrrar").addEventListener("click", qrpopupCerrrar, false);
	document.getElementById("goInsert").addEventListener("click", goInsert, false);
	document.getElementById("goSearch").addEventListener("click", goSearch, false);
	document.getElementById("successCB").addEventListener("click", successCB, false);
}
function qrpopupCerrrar() {
	document.getElementById('qrpopup').style.display='none';
}
//Insert query
//
function insertDB(tx) {
	console.log(">> SQLite Demo: insertDB()");
	tx.executeSql('INSERT INTO DEMO (name,number) VALUES ("' +document.getElementById("txtName").value
			+'","'+document.getElementById("txtNumber").value+'")');
	console.log(">> SQLite Demo: insertDB()");
}

//Insert query 2
//
function insertDB2(tx) {
	tx.executeSql('INSERT INTO DEMO (name,number) VALUES ("' +"Pepe" +'","'+1+'")');
	tx.executeSql('INSERT INTO DEMO (name,number) VALUES ("' +"Rosa" +'","'+2+'")');
	tx.executeSql('INSERT INTO DEMO (name,number) VALUES ("' +"Juan" +'","'+3+'")');
	tx.executeSql('INSERT INTO DEMO (name,number) VALUES ("' +"Maria" +'","'+4+'")');
	console.log(">> SQLite Demo: insertDB 2()");
}
function goInsert() {
	console.log(">> SQLite Demo: goInsert()");
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(insertDB, errorCB, successCB);
}

// [8]
function goSearch() {
	console.log(">> SQLite Demo: goSearch()");
	
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(searchQueryDB, errorCB);
	console.log(">> SQLite Demo: goSearch()");
}

function goDelete() {
	 var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	 db.transaction(deleteRow, errorCB);
	 document.getElementById('qrpopup').style.display='none';
	console.warn(">> SQLite Demo: goDelete()");
}

//Show the popup after tapping a row in table
//
function goPopup(row,rowname,rownum) {
	currentRow=row;
	document.getElementById("qrpopup").style.display="block";
	document.getElementById("editNameBox").value = rowname;
	document.getElementById("editNumberBox").value = rownum;
	console.log(">> SQLite Demo: goPopup()");
}

function editRow(tx) {
	tx.executeSql('UPDATE DEMO SET name ="'+document.getElementById("editNameBox").value+
			'", number= "'+document.getElementById("editNumberBox").value+ '" WHERE id = '
			+ currentRow, [], queryDB, errorCB);
	console.log(">> SQLite Demo: editRow()");
}
function goEdit() {
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(editRow, errorCB);
	document.getElementById('qrpopup').style.display='none';
	console.log(">> SQLite Demo: goEdit()");
}
