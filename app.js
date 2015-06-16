var class_names = ["casie", "michael", "luke", "mary"];


// $( document ).ready(function() {
// } 

var desks = [];
var new_desk;

function desk(num, person){
	this.num = num,
	this.person = person
}

$(function () {
    $("h1").draggable({
        cursor: "move", 
        // revert: "valid"
    });
    $("div").droppable({
        accept: "h1",
        drop: function (event, ui) {
            var desk_id = $(this).attr("id");
            var student = ui.draggable.html();
            var replaced = check_repeat(student, desk_id);
            if (!replaced){
            	new_desk = new desk(desk_id, student);
            	desks.push(new_desk);
            }
            console.log(desks)
        }
    });
});

function check_repeat(student, desk_id){
	var replaced = false;
	if (desks != undefined){
		console.log(student);
		for (var i = 0; i < desks.length; i++){
			if (student == desks[i].person) {
				console.log('already assigned this person')
				desks[i].num = desk_id;
				replaced = true
			}
			if (desk_id == desks[i].num){
				desks[i].person = student;
				replaced = true;
			}
		}
	}
	return replaced;
}

