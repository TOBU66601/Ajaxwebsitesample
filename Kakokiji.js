//最新記事リスト
function kako() {
    var html = "";
    //html
    html += '<div id="blognav">';
    html += '<h3>';
    html += '過去の記事';
    html += '</h3>';

    html += '<p>';
    html += '2018/2/2<br/>';
    html += '<a href="/blog/article/20180202.html">';
    html += '●　自作環境の道：パーツ購入';
    html += '</a>';
    html += '</p>';

    html += '<p>';
    html += '2018/1/28<br/>';
    html += '<a href="/blog/article/20180128.html">';
    html += '●　1月27日　.NET Fringe Japan 2018 New Year Party　イベントレポート';
    html += '</a>';
    html += '</p>';

    html += '<p>';
    html += '2018/1/24<br/>';
    html += '<a href="/blog/article/20180124.html">';
    html += '●　1月20日　JXUGC#24 春のApp Centerまつり　イベントレポート';
    html += '</a>';
    html += '</p>';






    html+='<h3><p><a href="/blog/list.html">ブログ記事一覧</a></p></h3>' //位置の再編集
    html += '<div><p>';
    html += '<a href="/blog/article/nipponlinetime.html">';
    html += '●　BVE日本線　ソースファイル';
    html += '</a>';

    html += '</p></div>';

    html += '</div>';

    document.write(html);
    document.write('<link rel="stylesheet" href="css/kiji.css" type="text/css" />');
}
