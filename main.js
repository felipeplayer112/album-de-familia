var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPQfnmBZLCdMbDAWsRAL2--17qnrV4QLuCWYh6byWfPPvCnekoe0lPWjBzM1sXSvnMYo&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0njf2pgDmUd9KRIkQ2GxKgoN9ULgdmBeSI22oknigLh6RfVx5RxVFBn0Tc-n6CztBL4&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0njf2pgDmUd9KRIkQ2GxKgoN9ULgdmBeSI22oknigLh6RfVx5RxVFBn0Tc-n6CztBL4&usqp=CAU"];
var names = ["album de familia","pai","tio"]
var ages = [0,38,34];
ages.sort();
ages.reverse();
var i = 0
function update(){
    i++;
    var numbersOfFamilyMember = 2;
    if(i > numbersOfFamilyMember )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}