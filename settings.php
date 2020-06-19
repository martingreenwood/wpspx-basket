<?php
/*
 * File includes & settings
 */

if (!defined( 'ABSPATH' ) ) die( 'Forbidden' );

// Plugin helpers
require plugin_dir_path( __FILE__ )  . '/lib/helpers/misc.php';
require plugin_dir_path( __FILE__ )  . '/lib/helpers/options-page.php';


function wpspx_basket_frontend_scripts()
{
	wp_register_style('wpspx_basket_css', WPSPX_BASKET_PLUGIN_URL . 'lib/assets/css/wpspx-basket.css', false, '1.0');
	wp_enqueue_style( 'wpspx_basket_css' );

	wp_register_script( 'wpspx_basket_front', WPSPX_BASKET_PLUGIN_URL . 'lib/assets/js/wpspx-basket-front-min.js', array(), false, true );
	wp_enqueue_script( 'wpspx_basket_front' );
}

function wpspx_basket_enqueue_color_picker() {
    wp_enqueue_style( 'wp-color-picker' );
    wp_enqueue_script( 'wpspx_basket_js', WPSPX_BASKET_PLUGIN_URL . 'lib/assets/js/wpspx-basket-min.js', array( 'wp-color-picker' ), false, true );
}
