<?php

/*
Filename: routes.php
Purpose:  Define fully qualified pathnames to folders in this repot. Use these
constants througout the app. Include this in functions.php.

*/

// Define Paths and Routing
define('REPO_PATH', dirname(__FILE__));
// echo "<h2>I'm in routes.php!</h2>";

// include_once(view-header.php');
define('MENTORS_PATH', REPO_PATH . '/mentors/');
define('ERIC_PATH', REPO_PATH . '/eric-selected/');
define('DOCS_PATH', REPO_PATH . '/docs/');