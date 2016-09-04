function createDP() {
    url = $("#imgName").text();

    var list = document.getElementById("imgName");
    
    var reader = new FileReader();

    reader.onloadend = function () {
        
        $('#img1').attr('src', reader.result);
        console.log
        
        var img1 = new Image();
        
        img1.src = $('#img1').attr('src');
        img1.setAttribute('crossOrigin', 'anonymous');
        img1.width = 300;
        img1.height = 300;
        var img2 = new Image();
        img2.src = $('#img2').attr('src');
        img2.setAttribute('crossOrigin', 'anonymous');
        img2.width = 300;
        img2.height = 300;
        
        img2.onload = function() {
            var width = img1.width;
            var height = img1.height;
            canvas.width = width;
            canvas.height = height;
            img2.width = width;
            img2.height = height;

            var context = canvas.getContext("2d");
            
            context.drawImage(img1, 0, 0, img1.width, img1.height);
            context.save();
            if (document.getElementById('chkOpaq').checked) {
                console.log("LOL");
                context.globalAlpha = 0.7;
            }
            context.drawImage(img2, 0, 0, img2.width, img2.height);
            console.log(img2.width);

        };
    }

    var lol =reader.readAsDataURL(list.files[0]);
    
}

