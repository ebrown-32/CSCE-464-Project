<?php
// Database configuration
define('DB_HOST', 'db');
define('DB_USER', 'user');
define('DB_PASS', 'userpassword');
define('DB_NAME', 'myapp');

// Site configuration
define('SITE_NAME', 'My Website');
define('SITE_URL', 'http://localhost');

// Directory paths
define('ROOT_DIR', dirname(__DIR__, 2));
define('SRC_DIR', dirname(__DIR__));
define('TEMPLATES_DIR', SRC_DIR . '/templates');
define('INCLUDES_DIR', SRC_DIR . '/includes');

// Error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1); 