<?php
require_once dirname(__DIR__) . '/config/config.php';
require_once INCLUDES_DIR . '/functions.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= h(SITE_NAME) ?></title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/" <?= isCurrentPage('index') ? 'class="active"' : '' ?>>Home</a></li>
                <li><a href="/about" <?= isCurrentPage('about') ? 'class="active"' : '' ?>>About</a></li>
                <li><a href="/contact" <?= isCurrentPage('contact') ? 'class="active"' : '' ?>>Contact</a></li>
            </ul>
        </nav>
    </header>
    <main> 