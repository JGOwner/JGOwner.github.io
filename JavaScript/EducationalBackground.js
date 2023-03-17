var highschool = document.getElementById("Highschool");
var bachelor = document.getElementById("Bachelor");

var highschoolBtnList = highschool.getElementsByClassName("btn");
var highschoolContentList = highschool.getElementsByClassName("content");
var bachelorBtnList = bachelor.getElementsByClassName("btn");
var bachelorContentList = bachelor.getElementsByClassName("content");

var lastBtn = null;
var lastContent = null;

function getSpecificElement(btnList, contentList, contentType)
{
    for(let i = 0; i < btnList.length; i++)
    {
        btnList[i].onclick = function()
        {
            if(lastBtn != null && lastContent != null)
            {
                resetElements(lastBtn, lastContent);
            }
            r = i * 15;
            r.toString();
            g = r;
            b = r; 
            contentList[i].style.display = "block";
            contentList[i].style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
            btnList[i].style.backgroundColor = "red";
            
            lastBtn = btnList[i];
            lastContent = contentList[i];
        };
    }
}

//Find a way to get a lastUsed, but seperating the two types of lists in a clean way

function lastUsed(btn, content, contentType)
{
    lastBtn
}

function resetElements(previousBtn, previousContent)
{
    previousContent.style.display = "none";
    previousBtn.style.backgroundColor = "black";
}

getSpecificElement(highschoolBtnList, highschoolContentList);
getSpecificElement(bachelorBtnList, bachelorContentList);