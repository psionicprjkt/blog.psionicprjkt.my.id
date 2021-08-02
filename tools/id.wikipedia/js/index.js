$(document).ready(function () {
    $("#isubmit").click(function (event) {
        event.preventDefault();
        $("#resultpost").html("");
        var keyword = $("#searchbox").val();
        $("#searchboxresult").val(keyword);
        $("#container").addClass("hidden");
        $("#containerresult").removeClass("hidden");
        $("h1.logo").removeAttr("tooltip");
        ajax(keyword);
    });

    $("#searchbox").on("keydown", function (event) {
        if (event.keyCode === 13) {
            $("#isubmit").click();
        }
    });

    $("#isubmitresult").click(function (event) {
        event.preventDefault();
        $("#resultpost").html("");
        $("#searchboxresult").blur();
        var keyword = $("#searchboxresult").val();
        ajax(keyword);
    });

    $("#searchboxresult").on("keydown", function (event) {
        if (event.keyCode === 13) {
            $("#isubmitresult").click();
        }
    });

    function ajax(keyword) {
        $.ajax({
            url: "https://id.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info%7Cextracts&list=&generator=search&inprop=url&exsentences=1&exintro=1&explaintext=1&gsrsearch=" + keyword + "&gsrnamespace=0&gsrlimit=10",
            success: function (result) {
                if (typeof result.query == "undefined") {
                    showerror(keyword);
                } else {
                    var obj = result.query.pages;
                    var arr = Object.keys(obj).map((item) => obj[item]);
                    var i;
                    for (i = 0; i <= 9; i++) {
                        $("#resultpost").append(
                            '<p class="posttitle"><a href="' + arr[i].fullurl + '" class="postlink" target="_blank">' + arr[i].title + '</a></p><p class="posturl">' + arr[i].fullurl + '</p><p class="postsnippet">' + arr[i].extract + "</p>"
                        ); //end append
                    } //end of loop
                    //console.log(result);
                    //alert(result.query.pages[0].title);

                    //$("input").val("");
                    //console.log(keyword);
                } //end of if
            }, //end of success function
        }); //end of ajax
    }

    function showerror(keyword) {
        $("#resultpost").append(
            '<p class="postsnippet" style="padding:10px; font-size:16px; line-height:1.5; "><span style="font-size:20px">Ups!</span> <br>We can\'t search<b> ' + keyword + " </b>! Pastikan kata kunci yang Anda cari sudah benar.</p>"
        );
    }
}); //end
