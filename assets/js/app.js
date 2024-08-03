let info=document.getElementById('info')
let postArr=[
	{
		fname:"sachin",
		lname:"tendulkar",
		nickname:"master",
		numbar:10
	},
	{
		fname:"rohit",
		lname:"sharma",
		nickname:"rs",
		numbar:45
	},
	{
		fname:"virat",
		lname:"kohali",
		nickname:"chiku",
		numbar:18
	},
]

let result='';

for(let i=0;i<postArr.length;i++){
	result +=`<tr>`;
	result +=`<td>`+(i+1)+`</td>`;
	result +=`<td>`+postArr[i].fname+`</td>`;
	result +=`<td>`+postArr[i].lname+`</td>`;
	result +=`<td>`+postArr[i].nickname+`</td>`;
	result +=`<td>`+postArr[i].numbar+`</td>`;
	result +=`</tr>`;
}
info.innerHTML=result;
