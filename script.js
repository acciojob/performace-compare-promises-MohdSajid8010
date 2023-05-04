// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here

let promise_arr=apiUrls.map((url)=>{

	return new Promise((resolve , rejected)=>{
		fetch(url).then((response)=>{
			return response.json();
		}).then((data)=>{
			resolve(data);
		})
	})

})

async function myFunction1()
{
		let f_time=new Date();
		await Promise.all(promise_arr).then(()=>{
			
		let s_time=new Date();
			
		let time=s_time -f_time;
		document.getElementById("output-all").innerHTML=time;

}).catch((err)=>{
	console.log(err);
});
	}

myFunction1();

async function myFunction2()
{
		let f_time=new Date();
		await Promise.any(promise_arr).then(()=>{
			
		let s_time=new Date();
			
		let time=s_time -f_time;
		document.getElementById("output-any").innerHTML=time;

}).catch((err)=>{
	console.log(err);
});
	}

myFunction2();