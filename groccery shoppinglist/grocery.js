$.ajax({
    url:'grocery.json',
    datatype:'json',
    success:function(data){
        for(var i=0; i<data.length;i++){
            var row=$('<tr><td>'+data[i].Slno+'</td><td>'+data[i].Name+'</td><td>'+data[i].quantity+'</td><td>'+data[i].Unit+'</td><td>'+data[i].Department+'</td><td>'+data[i].Notes+'</td></tr>');
            $('#myTable').append(row);
        }
    },
    error:function(jqXHR,textStatus,errorThrown){
        alert('Error:'+textStatus+'-'+errorThrown);
    }
});