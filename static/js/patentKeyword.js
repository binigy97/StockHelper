$(document).ready(function() {
    // 특허 키워드 순위 top50 보여줌
    var cnt = 1

    for (j of [10, 20, 30, 40, 50]) {
        var res = $('#patent_kw_top' + j);   // res 결과가 들어갈 자리
        res.load('../static/data/count_patent_desc.csv', function (data) {
            var lines = data.split('\n');
            var list = '';
            
            // alert(j + " " + cnt + " " + typeof(j))
            for (i = cnt; i <= j; i++) {
                var element = lines[i].split(',');
                list += '<li><a href="/StockWeb/patent">'
                        + '<span class="rank text-warning mr-1">' + element[0] + '</span>'
                        + '<span class="kw mr-1">' + element[1] + '</span>'
                        + '<span class="cnt text-warning">' + element[2] + '</span>'
                        + '</a></li>'
            }
            cnt += 10
            res.html(list);   // res 결과를 html에 보여줌
        });
    }
});