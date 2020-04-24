function test() {
    $.ajax({
        type: 'POST',
        url: "sample.py",
        dataType: "text",
        success: function(response){
           output = response;
           alert(output);
        }
}).done(function(data){
    console.log(data);
    alert(data);
});
}