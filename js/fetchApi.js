const token = 'xmr2wna5aj7t3012pcxgriqhd9c8u88kpttc1a3j'


async function fetchData(url){
    try {
        let res = await fetch(url,{
            headers: {
                authorization: token
            }
        });
        let response = await res.json();
        return response;
    }
    catch (error) {
        console.log(error);
    }
}
export default fetchData;
// async function getDataSuggestion(event) {
//     const url = 'https://api.json-generator.com/templates/dyj6ivO6Zbzv/data';
//     try {
//         let res = await fetch(url,{
//             headers: {
//                 authorization: token
//             }
//         });
//         let response = await res.json();
//         let ulElement = document.getElementById('suggestions');
//         ulElement.innerHTML = '';
//         response.forEach(item => {
//     	if(item.term.indexOf(event.target.value)>=0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(item.term));
//         li.setAttribute("id", item.id);
//         ulElement.appendChild(li);
//       }
//     })
//    }
//      catch (error) {
//         console.log(error);
//     }
// }

// async function getDataCollection(event) {
//     const url = 'https://api.json-generator.com/templates/JiITcIZCWfAu/data';
//     try {
//         let res = await fetch(url,{
//             headers: {
//                 authorization: token
//             }
//         });
//         let response = await res.json();
//         let ulElement = document.getElementById('suggestions');
//         ulElement.innerHTML = '';
//         response.forEach(item => {
//     	if(item.term.indexOf(event.target.value)>=0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(item.term));
//         li.setAttribute("id", item.id);
//         ulElement.appendChild(li);
//       }
//     })
//    }
//      catch (error) {
//         console.log(error);
//     }
// }

// async function getDataProduct(event) {
//     const url = 'https://api.json-generator.com/templates/jhOhdH17h06a/data';
//     try {
//         let res = await fetch(url,{
//             headers: {
//                 authorization: token
//             }
//         });
//         let response = await res.json();
//         let ulElement = document.getElementById('suggestions');
//         ulElement.innerHTML = '';
//         response.forEach(item => {
//     	if(item.term.indexOf(event.target.value)>=0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(item.term));
//         li.setAttribute("id", item.id);
//         ulElement.appendChild(li);
//       }
//     })
//    }
//      catch (error) {
//         console.log(error);
//     }
// }

