<?php
require_once dirname(__DIR__) . '/config/config.php';

/**
 * Safely escape HTML entities
 */
function h($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

/**
 * Redirect to a URL
 */
function redirect($url) {
    header("Location: $url");
    exit;
}

/**
 * Get the current page name
 */
function getCurrentPage() {
    return basename($_SERVER['PHP_SELF'], '.php');
}

/**
 * Check if the current page matches a given page name
 */
function isCurrentPage($pageName) {
    return getCurrentPage() === $pageName;
} 