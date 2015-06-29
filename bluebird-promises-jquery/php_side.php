<?php

// simulate waiting before 1 and 4 seconds
$timeWait = mt_rand(1, 4);
sleep($timeWait);

// create random object with a number to simulate data
$data = new stdClass;
$data->timeWait = $timeWait;

Header('Content-Type: application/json');
echo json_encode($data, true);