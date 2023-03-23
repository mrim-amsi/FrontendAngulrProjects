import axios from "axios";


//Buttons click listeners

// Axios
console.log("Axios scripts goes here");
const url="https://localhost:7123/ToDo/Delete/";
const AddForm = document.querySelector("#AddForm");
const update = document.querySelector("#update");
const TitleText = document.querySelector("#Title");
const LoadingSpinner = document.querySelector("#LoadingSpinner");
const tableId = document.getElementById("tableId");
const title = document.getElementById("title");
const category = document.getElementById("category");
//GetList
         axios.get('https://localhost:7123/ToDo/GetList').then(response =>{
            const resultData = response.data.map((el) =>
            ` <tr>     
                <input id="id" value="${el.id }" style="display:none" />

                <td> ${el.title}</td > 
                <td>${el.category}</td> 
                <td>${el.dueDate}</td>
                <td>${el.isCompleted}</td> 
                    <td>
                    <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                   </td></tr>`).join("\n");
          tableId.innerHTML += resultData; });

//add post
      AddForm.addEventListener("submit", (event) => {
                event.preventDefault();

                axios.post("https://localhost:7123/ToDo/AddJSON", {
                    title:title.value ,
                    category:category.value 
            }).then(response => {
                var data =response.data;
                tableId.innerHTML += ` <tr><td class="">${data.title}</td> 
                    <td>${data.category}</td> 
                    <td>${data.dueDate}</td>
                    <td>${data.isCompleted}</td> 
                        <td>
                        <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>

                    </td> </tr>`;

            }) });

//delete post
        $(document).on("click", ".delete", function () {

            var id = document.getElementById("id").value;
            console.log(id)
            var urlId =url.concat(id);
            console.log(urlId)
            axios.delete(urlId)
                .then(res => console.log(res));
                $(this).parents("tr").remove();
                $(".add-new").removeAttr("disabled");

            
        });


//update post 
 
      update.addEventListener("submit", (event) => {
            var id = document.getElementById("id").value;
            console.log(id)
            var urlId =url.concat(id);
            axios.put('urlId', {
                title:title.value ,
                category:category.value
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(err);
            });  });
           