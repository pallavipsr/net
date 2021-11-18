const rankingsBody=document.querySelector("#rankings-table>tbody");
    console.log(rankingsBody);
    function loadRankings()
    {
        const request=new XMLHttpRequest();
        request.open("get","rankings.json");
        request.onload=()=>{
            try{
                const json=JSON.parse(request.responseText);
                populateRankings(json);
            }
            catch(e){
                console.warn("could not load function:()");
            }
            
        };
        request.send();
    }
    function populateRankings(json){
        console.log(json);
         while(rankingsBody.firstChild){
           rankingsBody.removeChild(rankingsBody.firstChild);
        }
    
        json.forEach((row) => {
            const tr= document.createElement("tr");
            row.forEach((cell)=>{
                const td=document.createElement("td");
                td.textContent=cell;
                tr.appendChild(td);
            })
            rankingsBody.appendChild(tr) 
        });
        
       
        $("#rankings-table tbody tr").append('<tr><td><input type= "checkbox"id="checkbox"></input></td></tr>');
        
       
         
    
    //  

// if (this.checked) {
    
//     $(this).closest("tr").css("text-decoration","strike-through");

// } else {
//     $(this).closest("tr").css("text-decoration", "none");
// }
// });
    }
    
    // 

    document.addEventListener("DOMContentLoaded",()=>{loadRankings();});
    $('.cells:checkbox:checked').parent().parent().css("background-color","white");

    if($("input[type='checkbox']").is(":checked"))
       
       {
               
            $(this). closest("tr").css("text-decoration","strike-through");
                }
                else{ $(this). closest("tr").css("none");}