<?php
$file = file_get_contents('https://ipac-france-2.hyperplanning.fr/hp/Telechargements/ical/Edt_PEISSEL.ics?version=2022.0.4.3&idICal=0A9FF628A780D0183E420EB90D16DA74&param=643d5b312e2e36325d2666683d3126663d31');
$content = str_replace(
    [
        'PUBLISH'
    ], 
    [   
        'PUBLISH<br />NAME:GO Calendar - Community Day<br />X-WR-CALNAME:GO Calendar - Community Day<br />',
    ], 
$file);
echo nl2br($content);