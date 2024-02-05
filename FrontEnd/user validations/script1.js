<script>

        function validateAge(){
            var age=document.getElementById("age").value;
            if(age.includes("e")){
                 document.getElementById("errage").innerHTML="age cannot contain alphabet"
                 return false;
            }
            document.getElementById("errage").innerHTML=""
            return true;
        }
        function validateGender(){
            var data=document.getElementsByName("gender");
           /*for(var i=0;i<data.length;i++){
                if(data[i].checked){
                    document.getElementById("errgender").innerHTML="";
                    return true;
                }
            } */
            for(var ob of data){   
                if(ob.checked){
                    document.getElementById("errgender").innerHTML="";
                    return true;
                }
            }

            document.getElementById("errgender").innerHTML="pls select gender";
            return false;
        }
        function validateDegree(){
            var data=document.getElementsByName("degree");
            for(var ob of data){
                if(ob.checked){
                    document.getElementById("errdegree").innerHTML="";
                    return true; 
                }
            }
            document.getElementById("errdegree").innerHTML="pls select one option";
            return false;
        }
        function validateHobbies(){
            var data=document.getElementsByName("hobbies");
            var cnt=0;
            for(var ob of data){
                if(ob.checked){
                    cnt++;
                    if(cnt>=2){
                        document.getElementById("errhobbies").innerHTML="";
                        return true;
                    }
                }
                  
            }
            document.getElementById("errhobbies").innerHTML="pls select minimum 2 hobbies";
            return false;
        }
        function validateCity(){
            var idx=document.getElementById("city").selectedIndex;
            if(idx!=0){
                document.getElementById("errcity").innerHTML="";
                //alert(document.getElementById("city").options[idx].value)
                return true;
            }
            document.getElementById("errcity").innerHTML="pls select one city"
            return false; 
        }
        function validate(){
            var flag=validateAge();
            var flag1=validateGender();
            var flag2=validateDegree();
            var flag3=validateHobbies();
            var flag4=validateCity();
            //alert(flag+"  "+flag1+"  "+flag2+"  "+flag3+"  "+flag4)
            return flag && flag1 && flag2 && flag3 && flag4;
        }
    </script>