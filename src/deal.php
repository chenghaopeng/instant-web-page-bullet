<?php
    header("content-type: text/html; charset=utf-8");
    if (!isset($_POST["op"])) exit("Forbidden!");
    $op = $_POST["op"];
    $fn="dm.txt";
    if ($op == "send") {
        if (!isset($_POST["s"]) || trim($_POST["s"]) == "") exit("Forbidden!");
        $file = fopen($fn, "a");
        fwrite($file, trim($_POST["s"]) . PHP_EOL);
        fclose($file);
    }
    else if ($op == "get") {
        if (!file_exists($fn)) exit("");
        $file = fopen($fn, "r");
        echo fread($file, filesize($fn));
        fclose($file);
        unlink($fn);
    }
    else exit("Forbidden!");
?>