<?php
require_once(__DIR__.'/snap-oop.php');
use JohnTheDev\WitchyWoman;

$bob = new WitchyWoman\WitchyWoman('oooo oooo Witchy Woman',
	"She's got the moon in her eyes!");
echo("witchyWoman ID:");
echo($bob -> getWitchyWomanId());
echo(" witchyWomanMoonInHerEyes:");
echo($bob -> getWitchyWomanMoonInHerEyes());
$bob->switchWitchyWomanAttributes();
echo(" witchyWoman ID:");
echo($bob -> getWitchyWomanId());
echo(" witchyWomanMoonInHerEyes:");
echo($bob -> getWitchyWomanMoonInHerEyes());

