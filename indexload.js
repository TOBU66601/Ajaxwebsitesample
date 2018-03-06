﻿var load_html_and_insert = function (html_url, insert_info_arr) {
    $.ajax(html_url, {
        timeout: 1000,
        datatype: 'html'
    }).then(function (data) {
        var out_html = $($.parseHTML(data));//parse1
        var i;
        for (i = 0; i < insert_info_arr.length; ++i) {
            $("#" + insert_info_arr[i][1]).empty().append(out_html.filter("#" + insert_info_arr[i][0])[0].innerHTML);//insert
        }
    }, function (jqXHR, textStatus) {
        if (textStatus !== "success") {
            var txt = "<p>textStatus:" + textStatus + "</p>" +
                "<p>status:" + jqXHR.status + "</p>" +
                "<p>responseText : </p><div>" + jqXHR.responseText +
                "</div>";
            $('#title').html(txt);
            $('#date').html(txt);
            $('#kiji').html(txt);


        }
    });
};









