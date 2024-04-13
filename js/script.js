console.log("Hello, World!");
$(document).ready(function(){
    $("#liveToastBtn").click(function(){
        var text = "dog"; // Replace with the text you want to generate an image from
        $.ajax({
            type: "POST",
            url: "https://api.edenai.run/v2/image/generation",
            data: {
                text: text
            },
            headers: {
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzViZjVlNjYtMTI3Ni00N2M0LWE2OWEtOThjNWI0NmU0ZTRmIiwidHlwZSI6ImFwaV90b2tlbiJ9.kvhthE12CnsNDN_pD_eZ4SBplEhKdfXJZKinWcKx7jw",
            },
            
            success: function (response) {
                $("#generatedImage").attr("src", response.output_url);
            }
        });
    });
});

