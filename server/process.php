<?php
include("inc/config.php");
include("simple_html_dom.php");
$url = $_GET['url'];
$c_url = parse_url($url)["host"];

if(strpos($c_url, 'www.') !== false){
    $c_url = substr(parse_url($url)["host"],4); 
}

$result = mysqli_query($conn, "SELECT * FROM domains WHERE url LIKE '%{$c_url}%'");

if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}

$row = mysqli_fetch_array($result);
$factScore = $row['factScore'];

$html = new simple_html_dom();
$html->load_file($url); 
$titleraw = $html->find('title',0);
$title = $titleraw->innertext;

//echo $title;


//echo "<span id='domain-result'></span>";

$urll = 'http://localhost:8080/fakebox/check';
$data = array('url' => $url,'title' => $title);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($urll, false, $context);
$data = json_decode($result);

if($factScore == ""){
    $score = $data->title->score*100;
}else{
    $score = .3*$factScore + (.7*$data->title->score)*100;
}
$score = round($score,1);

echo $score;
echo ":";
echo $data->title->decision; 




?>

