<?php
$file = file_get_contents('https://github.com/othyn/go-calendar/releases/latest/download/gocal__community_day.ics');
$content = str_replace(
    [
        'DTSTART', 
        'DTEND',
        'NAME:GO Calendar - Community Day', 
        'X-WR-CALNAME:GO Calendar - Community Day',
        'SUMMARY:[Community Day]',
        ' Community Day Classic',
    ], 
    [
        'DTSTART;TZID=Europe/Paris', 
        'DTEND;TZID=Europe/Paris', 
        'NAME:Community Day',
        'X-WR-CALNAME:Community Day',
        'SUMMARY:Community Day',
        '<br />LOCATION;LANGUAGE=fr:Pokémon Go',
    ], 
$file);
echo nl2br($content);